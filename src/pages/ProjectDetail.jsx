import { useParams, Link } from 'react-router-dom'

const projectsData = [
  {
    id: 'quantum-vm',
    title: 'Quantum Virtual Machine',
    category: 'Quantum Computing',
    description: 'A quantum computing simulation platform with quantum gate operations and circuit building.',
    tags: ['Python', 'Quantum Computing', 'NumPy'],
    details: 'An educational quantum virtual machine implementing quantum gates, entanglement, and measurement operations. Supports building and executing quantum circuits with visualization capabilities.',
    fullDescription: 'This project provides a complete quantum computing simulation environment. It implements fundamental quantum gates (Hadamard, Pauli, CNOT) and allows users to build and execute quantum circuits. The simulator can handle quantum state superposition, entanglement, and measurement operations with classical outcome probabilities.',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'mern-1',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A complete MERN stack e-commerce solution with authentication and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    details: 'Full-featured e-commerce platform built with MERN stack including user authentication, product catalog, shopping cart, and payment processing.',
    fullDescription: 'Complete e-commerce platform featuring JWT authentication, product filtering and search, shopping cart management, order processing, and integrated payment gateway. Includes admin dashboard for inventory and order management.',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'laravel-1',
    title: 'Business Management System',
    category: 'Backend',
    description: 'A comprehensive business management system built with Laravel and MySQL.',
    tags: ['Laravel', 'MySQL', 'PHP'],
    details: 'Enterprise-level business management system with modules for inventory, billing, and customer relationship management.',
    fullDescription: 'Comprehensive business solution with customer management, invoice generation, inventory tracking, and financial reporting. Includes permission-based access control and audit logging.',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'web-scraper',
    title: 'Web Scraper Suite',
    category: 'Automation',
    description: 'A collection of web scrapers for data extraction and analysis from various sources.',
    tags: ['Python', 'BeautifulSoup', 'Selenium'],
    details: 'Robust web scraping toolkit with support for JavaScript-rendered content, data cleaning, and storage options.',
    fullDescription: 'Advanced web scraping suite supporting both static and dynamic content. Features include proxy rotation, rate limiting, data validation, and export to multiple formats (CSV, JSON, Database).',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'n8n-automation',
    title: 'N8N Automation Workflows',
    category: 'Automation',
    description: 'Complex business process automation workflows built with n8n integrations.',
    tags: ['n8n', 'API Integrations', 'Workflow Automation'],
    details: 'Advanced automation workflows connecting multiple services including CRM, email, and data processing systems.',
    fullDescription: 'Sophisticated automation workflows integrating multiple business systems. Handles data transformation, conditional logic, error handling, and monitoring with comprehensive logging.',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'social-bot',
    title: 'Social Media Bot',
    category: 'Automation',
    description: 'An intelligent social media bot for content scheduling and engagement.',
    tags: ['Python', 'API', 'Scheduling'],
    details: 'Automated social media management bot with content scheduling, analytics tracking, and engagement features.',
    fullDescription: 'Intelligent social media automation tool with AI-powered content scheduling, engagement metrics tracking, and multi-platform support. Includes analytics dashboard and automated reporting.',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'pos-system',
    title: 'POS & Inventory System',
    category: 'Full Stack',
    description: 'Point of Sale system with real-time inventory management.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Real-time'],
    details: 'Complete POS solution with real-time inventory sync, transaction logging, and sales analytics dashboard.',
    fullDescription: 'Professional POS system with real-time inventory updates, multi-store support, advanced reporting, and integrated payment processing. Includes staff management and sales analytics.',
    github: 'https://github.com/qayumXD'
  },
  {
    id: 'laravel-2',
    title: 'Content Management System',
    category: 'Backend',
    description: 'A headless CMS built with Laravel for managing digital content.',
    tags: ['Laravel', 'API', 'PostgreSQL'],
    details: 'Flexible headless CMS with role-based access control, content versioning, and RESTful API.',
    fullDescription: 'Headless CMS providing a flexible API for content management. Features include content versioning, scheduled publishing, role-based permissions, and multi-language support.',
    github: 'https://github.com/qayumXD'
  }
]

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
      <>
        <Link to="/projects" className="back-link">Back to Projects</Link>
        <h1>Project not found</h1>
        <p>The project you're looking for doesn't exist.</p>
      </>
    )
  }

  return (
    <>
      <Link to="/projects" className="back-link">Back to Projects</Link>
      <h1>{project.title}</h1>
      <div className="project-category">{project.category}</div>
      
      <h2>Overview</h2>
      <p className="bio">{project.fullDescription}</p>

      <h2>Technologies</h2>
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <h2>Learn More</h2>
      <p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
      </p>
    </>
  )
}
