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
