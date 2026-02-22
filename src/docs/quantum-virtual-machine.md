# Quantum Virtual Machine (QVM)

The Quantum Virtual Machine (QVM) is a lightweight, educational runtime designed around a “Write Once, Run Anywhere” philosophy for quantum programs. It provides a hardware‑agnostic intermediate representation (IR), transpiles circuits to target topologies, and simulates execution on an ideal statevector backend. The goal is to reduce vendor lock‑in while making the transpilation pipeline transparent and easy to learn.

## Executive Summary

### Problem Statement

Quantum hardware remains fragmented across vendors with different native gates, topologies, and error profiles. QVM abstracts this fragmentation by ingesting a high‑level program, converting it into an IR, and transpiling it for multiple backends.

### Benefits

- Hardware‑agnostic circuit design and transpilation.
- Educational visibility into routing and gate decomposition.
- Lightweight local runtime (no cloud dependency).
- OpenQASM 2.0 export for interoperability.
- Visual feedback for circuits and probabilities.

### Scope and Limitations

- Simulates up to ~10–12 qubits (statevector memory limits).
- Ideal (noise‑free) simulation only.
- Heuristic transpilation; not guaranteed globally optimal.
- No pulse‑level control or error‑correction modeling.

## Project Status

The QVM is complete and stable. Core modules (parser/IR, simulator, transpiler, decomposer, visualization, CLI) are functional, algorithms are verified, and the simulator is vectorized for performance.

## Architecture Overview

### Pipeline Flow

```mermaid
flowchart LR
  A[User Input JSON] --> B[Parser]
  B --> C[IR / QuantumCircuit]
  C --> D[Transpiler]
  D --> E[Decomposer]
  E --> F[Simulator]
  F --> G[Visualization / Export]
```

### Step‑by‑Step Data Transformation

1. **Input JSON**
   ```json
   [
     {"name": "h", "qubits": [0]},
     {"name": "cx", "qubits": [0, 2]}
   ]
   ```
2. **IR (`QuantumCircuit`)**
   ```python
   QuantumCircuit(
     num_qubits=3,
     operations=[
       {"name": "h", "qubits": [0]},
       {"name": "cx", "qubits": [0, 2]}
     ]
   )
   ```
3. **Transpiled Operations**
   ```python
   operations=[
     {"name": "h", "qubits": [0]},
     {"name": "swap", "qubits": [0, 1]},
     {"name": "cx", "qubits": [1, 2]}
   ]
   ```
4. **Simulation**
   - Statevector evolves through gate applications.
   - Probabilities are computed via the Born rule.
5. **Visualization / Export**
   - Circuit and histogram plots.
   - OpenQASM 2.0 string export.

## Core Components

### Intermediate Representation (IR)

The IR uses a `QuantumCircuit` class:
- `__init__(num_qubits)`
- `add_operation(name, qubits, params=[])`
- `__str__()` for debugging

### Simulator Engine

The simulator maintains a complex statevector of size `2^N` using NumPy. It supports:
- Single‑qubit gate application via Kronecker products.
- Vectorized CNOT and SWAP via index permutation.
- Measurement probabilities via `abs(statevector)**2`.

### Transpiler

Maps logical to physical qubits. If a two‑qubit gate violates topology constraints, the transpiler inserts SWAPs along the shortest path and updates the logical‑to‑physical map.

### Decomposer

Converts non‑native gates into supported primitives. For example, Toffoli is decomposed into H, CNOT, T, and Tdg gates.

### Visualization and CLI

- Circuit and histogram plots.
- Unified CLI entry point for parsing, transpilation, simulation, and export.

## Technology Stack

- Python 3.10+
- NumPy for linear algebra
- Matplotlib for visualization
- NetworkX for topology routing
- Pytest for testing

## Algorithms and Examples

### Bernstein–Vazirani

Finds a hidden bitstring `s` in a single query using phase kickback and interference.

Example usage:
```bash
python examples/generate_bv.py
python -m src.qvm.cli examples/bv_101.json --nqubits 3 --visualize
```

### Grover’s Search

Quadratic speedup for search over `N` items using Oracle + Diffuser iterations.

Example usage:
```bash
python examples/generate_grover.py
python -m src.qvm.cli examples/grover_101.json --nqubits 3 --visualize
```

## Project Structure (Reference)

```
src/
  examples/
  qvm/
    cli.py
    ir.py
    parser.py
    simulator.py
    architecture.py
    transpiler.py
    decomposer.py
    visual.py
    util/export.py
tests/
docs/
```

## Testing and Quality Assurance

- All tests pass (IR, parser, simulator, transpiler, visualization).
- Key improvements delivered: vectorized simulator, CLI integration, visualization.

## Roadmap

1. Advanced transpiler routing (SABRE).
2. Noise simulation (density matrix / Monte Carlo).
3. OpenQASM 3.0 parsing support.
4. Web UI for circuit authoring and visualization.
5. Pulse‑level control (Hamiltonian solver).
6. MPS simulation for 50–100 qubits (shallow circuits).

## References

1. Nielsen & Chuang, *Quantum Computation and Quantum Information*, 2010.
2. IBM Quantum, Qiskit Documentation: https://qiskit.org/
3. Cross et al., “OpenQASM 3,” arXiv:2104.01472 (2021).
4. Steiger et al., “ProjectQ,” *Quantum*, 2, 49 (2018).
