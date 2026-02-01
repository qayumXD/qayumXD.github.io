import { Link } from 'react-router-dom'

const projectsData = [
  {
    id: 'quantum-vm',
    title: 'Quantum Virtual Machine',
    category: 'Quantum Computing',
    description: 'A quantum computing simulation platform with quantum gate operations and circuit building.',
    tags: ['Python', 'Quantum Computing', 'NumPy'],
    details: 'An educational quantum virtual machine implementing quantum gates, entanglement, and measurement operations. Supports building and executing quantum circuits with visualization capabilities.'
  },
  {
    id: 'mern-1',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A complete MERN stack e-commerce solution with authentication and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    details: 'Full-featured e-commerce platform built with MERN stack including user authentication, product catalog, shopping cart, and payment processing.'
  },
  {
    id: 'laravel-1',
    title: 'Business Management System',
    category: 'Backend',
    description: 'A comprehensive business management system built with Laravel and MySQL.',
    tags: ['Laravel', 'MySQL', 'PHP'],
    details: 'Enterprise-level business management system with modules for inventory, billing, and customer relationship management.'
  },
  {
    id: 'web-scraper',
    title: 'Web Scraper Suite',
    category: 'Automation',
    description: 'A collection of web scrapers for data extraction and analysis from various sources.',
    tags: ['Python', 'BeautifulSoup', 'Selenium'],
    details: 'Robust web scraping toolkit with support for JavaScript-rendered content, data cleaning, and storage options.'
  },
  {
    id: 'n8n-automation',
    title: 'N8N Automation Workflows',
    category: 'Automation',
    description: 'Complex business process automation workflows built with n8n integrations.',
    tags: ['n8n', 'API Integrations', 'Workflow Automation'],
    details: 'Advanced automation workflows connecting multiple services including CRM, email, and data processing systems.'
  },
  {
    id: 'social-bot',
    title: 'Social Media Bot',
    category: 'Automation',
    description: 'An intelligent social media bot for content scheduling and engagement.',
    tags: ['Python', 'API', 'Scheduling'],
    details: 'Automated social media management bot with content scheduling, analytics tracking, and engagement features.'
  },
  {
    id: 'pos-system',
    title: 'POS & Inventory System',
    category: 'Full Stack',
    description: 'Point of Sale system with real-time inventory management.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Real-time'],
    details: 'Complete POS solution with real-time inventory sync, transaction logging, and sales analytics dashboard.'
  },
  {
    id: 'laravel-2',
    title: 'Content Management System',
    category: 'Backend',
    description: 'A headless CMS built with Laravel for managing digital content.',
    tags: ['Laravel', 'API', 'PostgreSQL'],
    details: 'Flexible headless CMS with role-based access control, content versioning, and RESTful API.'
  }
]

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>A selection of projects I've worked on, ranging from full-stack applications to automation and machine learning.</p>
      <div className="projects-grid">
        {projectsData.map(project => (
          <Link key={project.id} to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
            <div className="project-card">
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
