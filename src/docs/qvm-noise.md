# Noise Modeling & Device Profiles

Real quantum hardware is noisy. QVM models that noise with Kraus channels applied as stochastic trajectories — statistically exact sampling from the noisy distribution, no density-matrix blowup.

## Noise channels

All channels are completely-positive maps defined by Kraus operators, with a `validate()` check enforcing trace preservation:

```python
from qvm.noise import NoiseChannel

NoiseChannel.depolarizing(p)        # 1-qubit: with prob p replace state by I/2
NoiseChannel.depolarizing_2q(p)     # 2-qubit depolarizing (for cx/cz/swap)
NoiseChannel.amplitude_damping(g)   # T1 energy relaxation |1> → |0>
NoiseChannel.phase_damping(g)       # T2 dephasing without energy loss
NoiseChannel.thermal_relaxation(t1, t2, gate_time)   # composite T1/T2 model
```

Channels apply to statevectors via `apply_to_statevector(state, target_qubits, rng)` — each trajectory samples one Kraus operator per channel occurrence.

## Noise models

A `NoiseModel` binds channels to gates:

```python
from qvm.noise import NoiseChannel, NoiseModel

nm = NoiseModel()
nm.add_all_qubit_quantum_error(NoiseChannel.depolarizing(0.02), ["h", "x", "rz"])
nm.add_all_qubit_quantum_error(NoiseChannel.depolarizing_2q(0.05), ["cx"])
nm.add_quantum_error(channel, gate_names, qubits=[3])     # qubit-specific
nm.add_readout_error(confusion_matrix, qubits=[0, 1])     # measurement flips

print(nm.summary())          # human-readable table of attached errors
nm.get_noise_for("cx", [2, 3])   # lookup used by the sampler
```

## Running noisy simulations

Pass the model to sampling — every shot is an independent noisy trajectory:

```python
from qvm.qasm3_parser import OpenQASM3Parser
from qvm.simulator import Simulator
from qvm.noise import NoiseChannel, NoiseModel

BELL = """
OPENQASM 3.0;
include "stdgates.inc";
qubit[2] q;
bit[2] c;
h q[0];
cx q[0], q[1];
c[0] = measure q[0];
c[1] = measure q[1];
"""
bell = OpenQASM3Parser().parse(BELL)

nm = NoiseModel()
nm.add_all_qubit_quantum_error(NoiseChannel.depolarizing(0.02), ["h"])
nm.add_all_qubit_quantum_error(NoiseChannel.depolarizing_2q(0.05), ["cx"])

counts = Simulator().sample(bell, shots=4000, seed=3, noise_model=nm)
print({k: round(v / 4000, 4) for k, v in counts.items()})
```

Verified output on QVM v0.5.1:

```
{'00': 0.4905, '11': 0.4825, '01': 0.015, '10': 0.012}
```

The ideal Bell distribution (`00`, `11` at 50% each) now leaks ~1.3% into wrong-parity outcomes — exactly the error budget implied by the channel probabilities.

## Device profiles

Prepackaged fake devices bundle per-qubit T1/T2, gate fidelities and readout confusion into ready-to-use backends:

```python
from qvm.noise import DeviceBackend

device = DeviceBackend.fake_5q_device()      # or .fake_7q_device() / .ideal(n)
noise_model = device.to_noise_model()
print(device)                                # topology + calibration summary
```

| Backend | Description |
|---|---|
| `fake_5q` | 5-qubit linear chain, calibrated decoherence + readout error |
| `fake_7q` | 7-qubit device profile for larger demos |
| `ideal` | No-noise reference backend |

The CLI wires this in directly: `qvm bell.qasm --device fake_5q --shots 4096`.

## How trajectories work

Instead of propagating a 4^N-density matrix, each shot evolves the pure statevector and, at each noisy gate, samples one Kraus operator according to the channel's probability weights. Over many shots the sample statistics converge to the exact noisy distribution. Cost: O(shots × circuit depth), memory stays O(2^N).

## Try next

- Sweep depolarizing strength 0 → 0.2 and plot Bell fidelity vs p.
- Combine amplitude damping with readout error to see asymmetric skew toward `00`.
- [Web API](/docs/qvm-web-api) exposes all four noise knobs over REST.
