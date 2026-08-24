# Getting Started with QVM

From `pip install` to your first simulated circuit in under five minutes.

## Installation

QVM requires **Python ≥ 3.10**. The core has only two dependencies (`numpy`, `lark`); everything else is opt-in:

```bash
pip install quantum-virtual-machine              # lean core: parse, transpile, simulate
pip install "quantum-virtual-machine[qiskit]"    # + Qiskit & Aer interop
pip install "quantum-virtual-machine[cirq]"      # + Cirq interop
pip install "quantum-virtual-machine[viz]"       # + matplotlib visualizations
pip install "quantum-virtual-machine[server]"    # + FastAPI dashboard stack
pip install "quantum-virtual-machine[dev]"       # + pytest and dev tooling
```

Optional backends degrade gracefully: calling an interop API without the matching extra raises `MissingBackendError` — with the exact `pip install` command to fix it.

## Your first circuit (Python)

```python
from qvm.qasm3_parser import OpenQASM3Parser
from qvm.simulator import Simulator

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
state, classical_memory = Simulator().simulate(bell)

print(classical_memory)        # {'c': array([1, 1])}
```

**Important semantics:** when a circuit contains measurements, `simulate()` returns the *post-collapse* state of the single execution trajectory — so the probability vector is `[0, 0, 0, 1]` (one definite outcome), not `[0.5, 0, 0, 0.5]`. This is the physically correct behavior for dynamic circuits; to get statistics instead, sample:

```python
counts = Simulator().sample(bell, shots=1024, seed=42)
print(counts)   # {'11': 517, '00': 507}
```

Perfect anti-correlation: only `00` and `11` ever appear.

### Without QASM — build the IR directly

```python
from qvm.ir import QuantumCircuit
from qvm.simulator import Simulator
import numpy as np

qc = QuantumCircuit(2)
qc.add_operation("h", [0])
qc.add_operation("cx", [0, 1])

state, _ = Simulator().simulate(qc)          # no measurements → pure statevector
print(np.abs(state) ** 2)                    # [0.5 0.  0.  0.5]
```

## CLI quickstart

The package installs a `qvm` console script:

```bash
qvm circuit.qasm                                   # simulate a QASM file
qvm circuit.json --nqubits 4                       # simulate a JSON gate list
qvm bell.qasm --shots 1024 --seed 42               # shot-based sampling
qvm bell.qasm --transpile --routing sabre          # route onto linear topology
qvm bell.qasm --device fake_5q                     # hardware noise profile
qvm vqe_circuit.json --nqubits 2 --expectation ZZ  # Pauli expectation value
qvm ghz.qasm --noise-depol 0.01 --shots 4096       # custom noise channel
```

Useful flag groups:

| Group | Flags |
|---|---|
| Routing | `--transpile`, `--routing {greedy,sabre}`, `--no-restore-mapping` |
| Sampling | `--shots N`, `--seed` |
| Noise | `--noise-depol`, `--noise-amp-damp`, `--noise-phase-damp`, `--device {fake_5q,fake_7q,ideal}` |
| Analysis | `--expectation ZZ:-1.0,XI:0.5` (weighted Pauli sums), `--visualize` |

## JSON gate-list format

The simplest machine-readable input — an array of gate dicts:

```json
[
  {"name": "h", "qubits": [0]},
  {"name": "cx", "qubits": [0, 1]}
]
```

Run it with `qvm gates.json --nqubits 2`, or through the IR's lossless serialization:

```python
qc = QuantumCircuit.from_json(json_str)
round_trip = qc.to_json()   # structural fidelity guaranteed by tests
```

## Error handling

Every QVM error derives from one root class, so callers can catch broadly or narrowly:

```python
from qvm.exceptions import (
    QVMError,               # root
    QVMParseError,          # syntax / grammar failures        (ValueError)
    QVMCompilationError,    # routing / decomposition / conversion failures
    UnsupportedGateError,   # gate outside a subsystem's vocabulary
    QVMConversionError,     # unfaithful-or-impossible format conversion
    MissingBackendError,    # optional Qiskit/Cirq extra not installed (ImportError)
    QVMRuntimeError,        # simulation failures               (RuntimeError)
    QVMResourceLimitError,  # op-budget breaches                (RuntimeError)
)
```

Concrete classes also inherit the built-in shown in parentheses, so existing `except ValueError` code keeps working during migration. Validation is eager: malformed arities (`cx` on one qubit), measurements into undeclared registers, and unknown gates all fail at circuit-construction time.

## Where next

- [Tutorial: Bell & Teleportation](/docs/qvm-tutorial-bell-teleportation) — dynamic circuits with classical feedback
- [Tutorial: Grover Search](/docs/qvm-tutorial-grover) — amplitude amplification in OpenQASM 3
- [Simulation Engines](/docs/qvm-simulation-engines) — choosing between statevector and MPS
