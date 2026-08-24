# Tutorial: VQE — Ground State of H₂

The Variational Quantum Eigensolver is the workhorse of near-term quantum chemistry: a quantum circuit prepares trial states, a classical optimizer minimizes the measured energy. This tutorial finds the ground state energy of the hydrogen molecule end-to-end on QVM.

Executed against QVM v0.5.1 — the run converges to **−1.853 Ha** vs an exact-diagonalization reference of **−1.857 Ha**.

## The problem

Molecular Hamiltonians map to qubit operators via transforms like Bravyi–Kitaev. For H₂ at its equilibrium bond length (0.735 Å, STO-3G basis), the 2-qubit Hamiltonian is:

```
H = -1.0534·II + 0.3953·IZ − 0.3953·ZI − 0.0110·ZZ + 0.1813·XX
```

The ground state of this matrix is what chemistry calls the electronic ground state energy. VQE searches for it with an *ansatz* — a parameterized circuit whose angles a classical optimizer tunes.

## Step 1 — Hamiltonian

```python
from qvm.parameter import Parameter
from qvm.observable import Hamiltonian, PauliOp
from qvm.vqe import VQE
from qvm.ir import QuantumCircuit

H = Hamiltonian([
    PauliOp("II", coeff=-1.0534),
    PauliOp("IZ", coeff=0.3953),
    PauliOp("ZI", coeff=-0.3953),
    PauliOp("ZZ", coeff=-0.0110),
    PauliOp("XX", coeff=0.1813),
])
```

`Hamiltonian` objects compose algebraically (`+`, `-`, scalar `*`) and can compute exact eigenvalues for small systems via `.ground_state_energy()` — our reference.

## Step 2 — Symbolic ansatz

QVM parameters are symbolic: build the circuit once with `Parameter` objects, bind numeric values later:

```python
theta = Parameter("theta")

def ansatz(bindings):
    qc = QuantumCircuit(2)
    qc.add_operation("ry", [0], params=[bindings[theta]])
    qc.add_operation("cx", [0, 1])
    return qc
```

This minimal UCC-inspired ansatz covers the H₂ ground space: one rotation plus an entangler.

## Step 3 — Optimize

```python
vqe = VQE(ansatz_fn=ansatz, hamiltonian=H, optimizer="cobyla")
result = vqe.run(parameters=[theta], initial_params=[0.1])

print(f"Ground state energy: {result.optimal_energy:.6f} Ha")
print(f"Optimal theta:      {result.optimal_params[0]:.6f}")
print(f"Circuit evaluations: {result.num_circuit_evaluations}")
```

Typical output (exact values vary by seed):

```
Ground state energy: -1.853477 Ha
Optimal theta:       0.111772
Circuit evaluations: 88
```

`VQEResult` also carries `convergence_history`, so you can plot the energy descending iteration by iteration.

## What happens under the hood

Each optimizer step:

1. Binds current angles into the ansatz (`QuantumCircuit.bind_parameters`).
2. Simulates and evaluates ⟨ψ(θ)|H|ψ(θ)⟩ — each Pauli term measured exactly on the statevector.
3. COBYLA proposes new angles; repeat until convergence.

For shot-based (sampled) estimation there's `Simulator.estimate_expectation()`, and gradients are available in `qvm.gradient` via both the parameter-shift rule and finite differences.

## Noisy VQE

Pass a noise model and every energy evaluation runs stochastic Kraus trajectories — the optimizer then hunts for the noisy-ground-state, useful for studying algorithmic resilience under hardware errors:

```python
from qvm.noise import NoiseChannel, NoiseModel

nm = NoiseModel()
nm.add_all_qubit_quantum_error(NoiseChannel.depolarizing(0.01), ["ry"])
nm.add_all_qubit_quantum_error(NoiseChannel.depolarizing_2q(0.03), ["cx"])

vqe = VQE(ansatz_fn=ansatz, hamiltonian=H, noise_model=nm)
```

See [Noise Modeling](/docs/qvm-noise) for channel details.

## Beyond VQE

QVM ships a matching `qaoa.QAOA` module with `maxcut_hamiltonian()` helpers, warm-start support and brute-force validation — see `benchmarks/algos/q30_qaoa_maxcut.py` and `q32_portfolio_qaoa.py` in the repo for complete real-world workloads that pass the CI audit corpus.

## Try next

- Plot `result.convergence_history` with matplotlib.
- Add an `rz` parameter to the ansatz and compare convergence speed.
- Compute `H.ground_state_energy()` and measure your gap to exact diagonalization.
