# Tutorial: Bell States & Quantum Teleportation

The "hello world" and the first real application of entanglement — including mid-circuit measurement with classical feedback, QVM's dynamic-circuit support.

Every code block on this page was executed against **QVM v0.5.1**; the outputs shown are real.

## Part 1 — Creating a Bell pair

A Bell state maximally entangles two qubits: Hadamard on `q[0]`, then CNOT onto `q[1]`:

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
counts = Simulator().sample(bell, shots=1024, seed=42)
print(counts)
```

```
{'11': 517, '00': 507}
```

Only `00` and `11` appear, each with probability ≈ ½ — the defining signature of the |Φ⁺⟩ Bell state. Measuring one qubit instantly determines the other.

### Verify the expectation value

For |Φ⁺⟩ the ZZ correlator is exactly +1 (outcomes always agree):

```python
from qvm.observable import Hamiltonian

H = Hamiltonian.from_dict({"ZZ": 1.0})
ev = Simulator().expectation_value(bell, H)
print(ev)    # 1.0
```

## Part 2 — Teleportation with classical feedback

Teleportation transfers an unknown quantum state using one shared entangled pair plus **two classical bits**. The circuit measures *mid-execution* and conditions later gates on the results (`if` statements) — a *dynamic* circuit.

```python
import math
from qvm.qasm3_parser import OpenQASM3Parser
from qvm.simulator import Simulator

THETA = 0.8   # unknown state: Ry(theta)|0>

TELEPORT = f"""
OPENQASM 3.0;
include "stdgates.inc";
qubit[3] q;
bit[2] mid;
bit[1] out;
ry({THETA}) q[0];          // the unknown state to teleport
h q[1];                    // Bell pair between q[1], q[2]
cx q[1], q[2];
cx q[0], q[1];             // bell measurement on q[0], q[1]
h q[0];
mid[0] = measure q[0];     // mid-circuit measurement
mid[1] = measure q[1];
if (mid[1] == 1) {{ x q[2]; }}   // classical feedback corrections
if (mid[0] == 1) {{ z q[2]; }}
out[0] = measure q[2];     // final readout
"""

teleport = OpenQASM3Parser().parse(TELEPORT)
counts = Simulator().sample(teleport, shots=5000, seed=7)
```

Check that qubit 2 ends in the original state Ry(θ)|0⟩, i.e. P(measure 1) = sin²(θ/2):

```python
p_one = sum(c for bits, c in counts.items() if bits[-1] == "1") / 5000
theory = math.sin(THETA / 2) ** 2
print(f"P(1) = {p_one:.4f}   theory = {theory:.4f}")
```

```
P(1) = 0.1470   theory = 0.1516
```

Agreement within statistical error → the state arrived intact.

## How QVM runs dynamic circuits

This is where simulator semantics matter. A naive simulator collapses once and reuses that trajectory for every shot — which makes teleportation statistically impossible.

QVM detects dynamic circuits (any measurement whose result feeds a conditional gate) via `Simulator._is_dynamic()` and automatically routes them through `sample_with_collapse()`: **every shot is an independent trajectory**, with fresh randomness for each mid-circuit outcome and its feedback. Static circuits keep the fast vectorized path.

You never configure this — but it's why the P(1) above matches theory instead of returning a degenerate distribution.

## Key concepts

| Concept | Where you saw it |
|---|---|
| Entanglement | H + CX creates inseparable two-qubit correlations |
| Mid-circuit measurement | `mid[0] = measure q[0];` inside a running program |
| Classical feedback | `if (mid[1] == 1) { x q[2]; }` — conditioned correction |
| Per-shot trajectories | Dynamic circuits sample shot-by-shot automatically |
| Observables | `<ZZ> = 1.0` certifies perfect correlation |

## Try next

- Re-run teleportation with different `THETA` values — accuracy tracks shots.
- Remove one of the two feedback corrections and watch the statistics degrade into a mixed distribution.
- [Tutorial: Grover Search](/docs/qvm-tutorial-grover)
