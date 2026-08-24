# Simulation Engines

QVM ships two exact simulation engines with different complexity profiles. Choosing the right one is the difference between milliseconds and minutes.

| | `Simulator` (statevector) | `MPSSimulator` (tensor network) |
|---|---|---|
| State representation | Dense 2^N complex vector | Chain of rank-3 tensors (bond dimension ≤ `max_bond_dim`) |
| Memory | O(2^N) | O(N·k²) for bond dim k |
| Sweet spot | N ≲ 12–16, arbitrary entanglement | 20+ qubits, low-entanglement circuits |
| Entanglement handling | Exact, always | Exact until truncation at `max_bond_dim` |
| Dynamic circuits / control flow | Full (labels, jumps, classical ops) | Measurement sampling only |
| Noise | Stochastic Kraus trajectories | Not supported |

## Statevector engine

```python
from qvm.simulator import Simulator

sim = Simulator()
state, classical_memory = sim.simulate(circuit, seed=None, max_ops=1_000_000)
```

Key behaviors:

- **In-place tensor-stride kernels** — gates apply via strided NumPy slicing without building 2^N × 2^N unitaries (the old Kronecker approach blew up memory at O(4^N)).
- **Classical memory & control flow** — cregs, labels/jumps and classical ops execute during the trajectory, enabling dynamic circuits.
- **Execution budget** — `max_ops` caps gate applications; exceeding it raises `QVMResourceLimitError` instead of hanging.
- **Measurement semantics** — circuits containing measurements return the post-collapse state of one trajectory; measurement-free circuits return the pure statevector.

### Sampling

```python
counts = sim.sample(circuit, shots=4096, seed=42)
```

Static circuits sample analytically from the final distribution; **dynamic circuits automatically switch to per-shot collapse trajectories** so mid-circuit feedback stays statistically valid. Add a `noise_model=` argument to run noisy trajectories.

### Observables

```python
from qvm.observable import Hamiltonian

H = Hamiltonian.from_dict({"ZZ": -1.0524, "XX": 0.3979})
energy = sim.expectation_value(circuit, H)              # exact
sampled = sim.estimate_expectation(circuit, H, shots=8192)  # sampled + std err
```

## MPS engine

Matrix Product States store the amplitudes as a 1D tensor network. Each gate is applied by contracting neighboring tensors and re-splitting with SVD; singular values below tolerance are truncated, keeping memory proportional to *entanglement*, not to 2^N:

```python
from qvm.mps_simulator import MPSSimulator

mps = MPSSimulator(max_bond_dim=16)
counts = mps.sample(ghz24_circuit, shots=1000, seed=1)
state = mps.get_statevector()   # reconstruct on demand (costs 2^N memory!)
```

- **Long-range gates** are handled by exact SWAP-routing: qubits are swapped adjacent, the gate applies locally, then swaps restore order.
- **Little-endian statevector convention** matches the dense engine, so results agree bit-for-bit on untruncated runs.
- GHZ-type families stay at bond dimension ~2 regardless of width — hence GHZ-24 in **1.6 ms** vs 13.7 s dense ([benchmark](https://github.com/qayumXD/quantum-virtual-machine/blob/main/docs/reports/benchmark_2026-08-24.md)).

## Performance snapshot

Best-of-3 wall clock, identical circuits (qiskit 2.4.1, cirq 1.6.1):

| family | n | QVM statevector | QVM MPS | Qiskit Aer | Cirq |
|---|---|---|---|---|---|
| GHZ | 8 | 0.6 ms | 1.0 ms | 1.2 ms | 4.8 ms |
| GHZ | 12 | 1.3 ms | 1.3 ms | 2.0 ms | 5.4 ms |
| GHZ | 16 | 14.5 ms | 1.7 ms | 40.1 ms | 8.8 ms |
| GHZ | 20 | 313.5 ms | 1.3 ms | 470.0 ms | 96.2 ms |
| GHZ | 24 | 13.66 s | 1.6 ms | 17.58 s | – |
| QFT | 12 | 10.0 ms | – | 21.4 ms | 18.5 ms |

Reading: the dense kernel is competitive with compiled engines in its regime (pure NumPy!), and the MPS column shows where structured simulation wins outright. QFT entangles all qubits, so MPS must truncate or fail — that "–" is honest.

## Decision guide

```
Need classical feedback / full control flow?      → Simulator
Circuit has measurements + conditionals?          → Simulator (auto per-shot)
N ≤ 16 or expect volume-law entanglement?         → Simulator
N ≥ 18 with near-nearest-neighbor structure?      → MPSSimulator
Noisy sampling?                                   → Simulator (+ NoiseModel)
Exact expectation values?                         → Simulator.expectation_value
```
