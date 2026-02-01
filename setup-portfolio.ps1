# Complete React + Vite Portfolio Setup Script
# Run this: powershell -ExecutionPolicy Bypass -File ".\setup-portfolio.ps1"

$ErrorActionPreference = "Continue"

Write-Host "╔════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   React + Vite Portfolio Setup for GitHub Pages   ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean up
Write-Host "📦 Step 1: Cleaning up legacy files..." -ForegroundColor Yellow
$legacyDirs = @("node_modules", ".next", "dist", "sass", "static", "css", "calculator", "odin-recipes", "rock-paper-scissors", "landing-page", "portfolio", "assets", "esketch")
$legacyFiles = @("package-lock.json", "asset-manifest.json", "manifest.json", "robots.txt", "map.docx", "logo192.png", "logo512.png")

foreach ($dir in $legacyDirs) {
  if (Test-Path $dir) {
    Remove-Item -Recurse -Force $dir -ErrorAction SilentlyContinue
    Write-Host "  ✓ Removed $dir" -ForegroundColor Green
  }
}

foreach ($file in $legacyFiles) {
  if (Test-Path $file) {
    Remove-Item $file -ErrorAction SilentlyContinue
    Write-Host "  ✓ Removed $file" -ForegroundColor Green
  }
}

# Step 2: Create directory structure
Write-Host ""
Write-Host "📁 Step 2: Creating directory structure..." -ForegroundColor Yellow
$dirs = @("src", "src/pages", "src/components")
foreach ($dir in $dirs) {
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    Write-Host "  ✓ Created $dir" -ForegroundColor Green
  }
}

# Step 3: Create source files
Write-Host ""
Write-Host "✍️  Step 3: Creating source files..." -ForegroundColor Yellow

# src/main.jsx
@"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"@ | Out-File -Encoding UTF8 "src/main.jsx"
Write-Host "  ✓ Created src/main.jsx" -ForegroundColor Green

# src/App.jsx
@"
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function Navigation() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <nav>
      <ul>
        <li><span className="logo">Qayum</span></li>
        <li style={{ marginLeft: 'auto' }}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
        </li>
        <li>
          <a href="https://github.com/qayumXD" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2026 Qayum. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
"@ | Out-File -Encoding UTF8 "src/App.jsx"
Write-Host "  ✓ Created src/App.jsx" -ForegroundColor Green

# src/App.css
@"
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

footer {
  padding: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-muted);
  font-size: 0.9rem;
}

.logo {
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--color-accent);
}

nav ul li {
  display: flex;
  align-items: center;
}

.hero {
  margin-bottom: 3rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-muted);
  max-width: 600px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.project-card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.project-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.project-category {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--color-accent);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-border);
  color: var(--color-text);
  border-radius: 16px;
  font-size: 0.85rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  font-weight: 500;
  color: var(--color-accent);
}

.back-link::before {
  content: "← ";
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
"@ | Out-File -Encoding UTF8 "src/App.css"
Write-Host "  ✓ Created src/App.css" -ForegroundColor Green

# src/index.css
@"
:root {
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --color-accent: #0066cc;
  --color-muted: #666666;
  --color-border: #e0e0e0;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #e8e8e8;
    --color-bg: #1a1a1a;
    --color-accent: #4da3ff;
    --color-muted: #999999;
    --color-border: #333333;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.6;
  transition: background-color 0.3s, color 0.3s;
}

html {
  scroll-behavior: smooth;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.7;
}

button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.85;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

nav {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: var(--color-bg);
  z-index: 100;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
}

nav a {
  font-weight: 500;
  color: var(--color-text);
}

nav a.active {
  color: var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
  padding-bottom: 0.25rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  nav ul {
    gap: 1rem;
    flex-wrap: wrap;
  }
}
"@ | Out-File -Encoding UTF8 "src/index.css"
Write-Host "  ✓ Created src/index.css" -ForegroundColor Green

# src/pages/Home.jsx
@"
export default function Home() {
  return (
    <div className="hero">
      <h1>Hi, I'm Qayum</h1>
      <p className="bio">
        I'm a full-stack developer with a passion for building elegant, performant web applications. 
        I specialize in React, Node.js, and cloud technologies. Beyond web development, I enjoy 
        working on automation projects, exploring machine learning concepts, and building tools that 
        solve real-world problems. Currently focused on creating scalable systems and learning new technologies.
      </p>
      <p className="bio" style={{ marginTop: '2rem' }}>
        When I'm not coding, you can find me exploring new frameworks, contributing to open source, 
        or architecting solutions for complex problems.
      </p>
    </div>
  )
}
"@ | Out-File -Encoding UTF8 "src/pages/Home.jsx"
Write-Host "  ✓ Created src/pages/Home.jsx" -ForegroundColor Green

# src/pages/Projects.jsx
@"
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
          <Link key={project.id} to={\`/projects/\${project.id}\`} style={{ textDecoration: 'none' }}>
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
"@ | Out-File -Encoding UTF8 "src/pages/Projects.jsx"
Write-Host "  ✓ Created src/pages/Projects.jsx" -ForegroundColor Green

# src/pages/ProjectDetail.jsx
@"
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
"@ | Out-File -Encoding UTF8 "src/pages/ProjectDetail.jsx"
Write-Host "  ✓ Created src/pages/ProjectDetail.jsx" -ForegroundColor Green

# Step 4: Install dependencies
Write-Host ""
Write-Host "📥 Step 4: Installing npm dependencies..." -ForegroundColor Yellow
npm install
Write-Host ""

if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ Setup completed successfully!" -ForegroundColor Green
  Write-Host ""
  Write-Host "Next steps:" -ForegroundColor Cyan
  Write-Host "  1. Run development server: npm run dev" -ForegroundColor White
  Write-Host "  2. Build for production: npm run build" -ForegroundColor White
  Write-Host "  3. Deploy to GitHub Pages: npm run deploy" -ForegroundColor White
  Write-Host ""
} else {
  Write-Host "❌ npm install failed. Please check the error above." -ForegroundColor Red
}
