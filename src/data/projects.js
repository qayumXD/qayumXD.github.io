// Shared project data for portfolio
export const projectsData = [
  {
    id: 'quantum-vm',
    title: 'Quantum Virtual Machine',
    category: 'Quantum Computing',
    description: 'A lightweight, educational quantum computing simulator with transpilation and hardware architecture mapping.',
    tags: ['Python', 'Quantum Computing', 'Simulation', 'OpenQASM'],
    details: 'Educational QVM implementing quantum gates, circuit simulation, and transpilation for hardware constraints.',
    fullDescription: `A lightweight, educational Quantum Virtual Machine (QVM) implemented in Python. The QVM simulates quantum circuits and demonstrates transpilation, where logical quantum circuits are adapted to run on specific hardware architectures with limited connectivity.

**Core Components:**
• **Intermediate Representation (IR)**: QuantumCircuit class for circuit definition
• **Statevector Simulator**: Executes circuits and calculates measurement probabilities
• **Architecture Module**: Defines target hardware with specific qubit connectivity
• **Transpiler**: Maps logical circuits to physical ones, inserting SWAP gates for connectivity constraints
• **Decomposer**: Breaks complex gates (like Toffoli) into native gate sequences
• **Export**: OpenQASM 2.0 format support

The full pipeline includes parsing → transpilation → simulation with results visualization.`,
    github: 'https://github.com/qayumXD/quantum-vm',
    features: [
      'Statevector simulation with measurement probabilities',
      'Hardware architecture mapping with connectivity constraints',
      'Automatic SWAP gate insertion for non-adjacent qubits',
      'Complex gate decomposition (Toffoli → native gates)',
      'OpenQASM 2.0 export support'
    ]
  },
  {
    id: 'collabwrite',
    title: 'CollabWrite',
    category: 'Full Stack',
    description: 'Real-time collaborative writing platform where multiple users can edit documents simultaneously.',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Express'],
    details: 'A Google Docs-style collaborative editor with real-time sync, user authentication, and document management.',
    fullDescription: `CollabWrite is a real-time collaborative writing web application that allows multiple users to edit documents simultaneously, similar to Google Docs.

**Features:**
• **Real-time Collaboration**: See changes from other users instantly via WebSocket connections
• **User Authentication**: Secure registration and login system
• **Document Management**: Create, share, and organize your documents
• **Rich Text Editing**: Intuitive editor with formatting capabilities

**Tech Stack:**
• **Frontend**: React + Vite with Socket.IO Client
• **Backend**: Node.js + Express with Socket.IO
• **Database**: MongoDB with Mongoose ODM

The architecture uses WebSockets for bi-directional real-time communication, ensuring all connected users see document changes with minimal latency.`,
    github: 'https://github.com/qayumXD/CollabWrite',
    features: [
      'Real-time document synchronization',
      'Multi-user concurrent editing',
      'User authentication and sessions',
      'Document sharing and permissions',
      'Rich text formatting'
    ]
  },
  {
    id: 'healthcare-ai',
    title: 'Agentic AI Healthcare System',
    category: 'AI / Healthcare',
    description: 'Multi-agent healthcare triage system with multilingual support, voice I/O, and automated clinical documentation.',
    tags: ['Python', 'LangGraph', 'OpenAI', 'Streamlit', 'Whisper', 'LangChain'],
    details: 'Intelligent clinical decision-support tool with adaptive patient interviews, emergency detection, and SOAP note generation.',
    fullDescription: `An intelligent multi-agent healthcare triage system built for the Techverse AI Hackathon 2026. It conducts adaptive patient interviews in multiple languages (English, Urdu, Punjabi), detects medical emergencies, and generates structured clinical summaries.

**Key Features:**
• **Multi-Agent Architecture (LangGraph)**: Safety router → Interview agent → Documentation agent
• **Multilingual Support**: English, Urdu, and Roman Urdu handled natively
• **Red Flag Detection**: Cardiac emergencies (MI suspected), suicide risk, and more
• **Real-Time Agent Logic Dashboard**: Shows category/context, color-coded triage, and red flags
• **SOAP Note Generation**: Automated clinical documentation in structured JSON
• **Voice I/O**: Record symptoms (Whisper transcription) and hear AI responses (TTS)
• **Adaptive Interviewing**: Category-aware follow-up questions (METABOLIC, CARDIAC, MENTAL, GENERAL)

**Architecture:**
\`\`\`
User Input → Safety Router (JSON)
   ├─ DANGER → Documentation (Emergency Stop) → END
   └─ SAFE   → Interview (Category-Aware) → Documentation → END
\`\`\`

**Clinical Scenarios Implemented:**
• Diabetes detection (polyuria, polydipsia, fatigue)
• Cardiac emergency triage (chest pain + sweating → IMMEDIATE)
• Mental health safety (suicide risk detection)

*Note: This is a clinical decision-support tool, NOT a diagnostic or treatment system.*`,
    github: 'https://github.com/qayumXD/ai-healthcare-triage',
    features: [
      'Multi-agent workflow with LangGraph',
      'Multilingual patient interviews (EN/UR)',
      'Voice input (Whisper) and output (TTS)',
      'Real-time triage status dashboard',
      'Automated SOAP note generation',
      'Emergency red flag detection'
    ]
  }
]
