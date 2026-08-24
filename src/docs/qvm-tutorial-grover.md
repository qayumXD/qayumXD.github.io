# Tutorial: Grover's Search in OpenQASM 3

Grover's algorithm finds a marked item among N = 2ⁿ possibilities in O(√N) queries — a quadratic speedup over classical search. This tutorial builds Grover-3 (search over 8 states for |101⟩) entirely in OpenQASM 3.0 and validates it against the ideal closed-form amplitudes.

Executed against QVM v0.5.1 — outputs are real.

## The algorithm

Three ingredients:

1. **Uniform superposition** — Hadamard on every qubit puts all 8 basis states at amplitude 1/√8.
2. **Oracle** — flips the sign of the marked state's amplitude (phase kickback through a multi-controlled gate).
3. **Diffuser** — inversion about the mean: `amps → 2·mean − amps`, amplifying the marked state.

Repeat the oracle + diffuser pair **r ≈ ⌊π/4 · √N⌋ times**. For N = 8 that is r = 2 iterations.

## Building the circuit

The oracle marks |101⟩ by flipping q[1] into the X-basis, computing a Toffoli controlled on {q[0], q[2]}, and flipping back:

```python
import math
import numpy as np
from qvm.qasm3_parser import OpenQASM3Parser
from qvm.simulator import Simulator

ORACLE = "x q[1]; h q[1]; ccx q[0], q[2], q[1]; h q[1]; x q[1];"

DIFFUSER = (
    "h q[0]; h q[1]; h q[2]; x q[0]; x q[1]; x q[2];"
    "h q[2]; ccx q[0], q[1], q[2]; h q[2];"
    "x q[0]; x q[1]; x q[2]; h q[0]; h q[1]; h q[2];"
)

N_ITER = int(math.floor(math.pi / 4 * math.sqrt(8)))   # = 2

body = "h q[0]; h q[1]; h q[2];\n" + (ORACLE + DIFFUSER) * N_ITER
src = 'OPENQASM 3.0;\ninclude "stdgates.inc";\nqubit[3] q;\n' + body

grover = OpenQASM3Parser().parse(src)

state, _ = Simulator().simulate(grover)   # no measurement → pure statevector
probs = np.abs(state) ** 2
print({format(i, "03b"): round(p, 4) for i, p in enumerate(probs) if p > 0.02})
```

```
{'101': np.float64(0.9453)}
```

**|101⟩ is found with probability ≈ 94.5%** — from only 2 oracle queries against 8 candidates (classical worst case: up to 8).

## Why no measurement?

`Simulator.simulate()` returns the full statevector when the circuit has no measurements, so you can inspect exact amplitudes. Add measurements and you get post-collapse trajectories instead; add `.sample(circuit, shots=...)` for counts.

## Validating against closed-form theory

Two Grover iterations have an exactly computable answer: flip the marked amplitude, then invert about the mean, twice:

```python
amps = np.full(8, 1 / math.sqrt(8))
for _ in range(N_ITER):
    amps[5] *= -1                      # mark |101>
    amps = 2 * amps.mean() - amps      # invert about the mean

assert np.allclose(probs, np.abs(amps) ** 2, atol=1e-9)
```

The assertion passes to within 10⁻⁹ — QVM's arithmetic matches the textbook math bit-for-bit.

## Notes & gotchas

- **Iteration count matters.** With r = 2, success ≈ 94.5%. At r = 3 the amplitudes *overshoot* past the target and success drops — Grover's rotation must stop near π/4.
- **Toffoli (`ccx`) is native vocabulary**, so this program needs no decomposition pass.
- The same pattern scales: change the oracle controls to mark any of the 8 states.
- Want native multi-controlled oracles? `mcx`/`mcp` import cleanly from Qiskit/Cirq circuits and lower *exactly* into these basis gates — see [Framework Interop](/docs/qvm-interop).

## Try next

- Generalize to Grover-4 with a 3-control MCX oracle (`mcx_ops` from `qvm.synthesis`).
- Compare shot-based sampling vs exact probabilities for r = 2 vs r = 3.
- [Tutorial: VQE](/docs/qvm-tutorial-vqe)
