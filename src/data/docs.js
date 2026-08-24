import qvmDoc from '../docs/quantum-virtual-machine.md?raw'
import gettingStarted from '../docs/qvm-getting-started.md?raw'
import tutorialBellTeleport from '../docs/qvm-tutorial-bell-teleportation.md?raw'
import tutorialGrover from '../docs/qvm-tutorial-grover.md?raw'
import tutorialVqe from '../docs/qvm-tutorial-vqe.md?raw'
import simulationEngines from '../docs/qvm-simulation-engines.md?raw'
import interop from '../docs/qvm-interop.md?raw'
import noise from '../docs/qvm-noise.md?raw'
import webApi from '../docs/qvm-web-api.md?raw'

export const docsData = [
  {
    slug: 'quantum-virtual-machine',
    title: 'Quantum Virtual Machine',
    summary: 'Overview: the IR pivot, pipeline, gate vocabulary, benchmarks, and honest limitations of QVM v0.5.x.',
    updatedAt: '2026-08-24',
    content: qvmDoc
  },
  {
    slug: 'qvm-getting-started',
    title: 'Getting Started',
    summary: 'Install QVM, run your first Bell state through CLI and Python, and learn the error-handling model.',
    updatedAt: '2026-08-24',
    content: gettingStarted
  },
  {
    slug: 'qvm-tutorial-bell-teleportation',
    title: 'Tutorial: Bell & Teleportation',
    summary: 'Entanglement basics, then quantum teleportation with mid-circuit measurement and classical feedback.',
    updatedAt: '2026-08-24',
    content: tutorialBellTeleport
  },
  {
    slug: 'qvm-tutorial-grover',
    title: 'Tutorial: Grover Search',
    summary: "Build Grover's search in OpenQASM 3 and validate against ideal closed-form amplitudes.",
    updatedAt: '2026-08-24',
    content: tutorialGrover
  },
  {
    slug: 'qvm-tutorial-vqe',
    title: 'Tutorial: VQE for H₂',
    summary: 'Find the ground state energy of molecular hydrogen with a variational quantum eigensolver.',
    updatedAt: '2026-08-24',
    content: tutorialVqe
  },
  {
    slug: 'qvm-simulation-engines',
    title: 'Simulation Engines',
    summary: 'Statevector vs MPS tensor-network engines: memory profiles, dynamic circuits, and benchmark data.',
    updatedAt: '2026-08-24',
    content: simulationEngines
  },
  {
    slug: 'qvm-interop',
    title: 'Framework Interop',
    summary: 'Qiskit & Cirq conversion through the IR pivot — no silent drops, physical equivalence guaranteed.',
    updatedAt: '2026-08-24',
    content: interop
  },
  {
    slug: 'qvm-noise',
    title: 'Noise Modeling',
    summary: 'Kraus channels, noise models, readout errors, and fake-device calibration profiles.',
    updatedAt: '2026-08-24',
    content: noise
  },
  {
    slug: 'qvm-web-api',
    title: 'Web API & Dashboard',
    summary: 'FastAPI endpoints, request/response schemas, the Next.js dashboard, and Supabase persistence.',
    updatedAt: '2026-08-24',
    content: webApi
  }
]
