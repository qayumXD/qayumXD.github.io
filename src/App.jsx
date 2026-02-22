import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Docs from './pages/Docs'
import DocPage from './pages/DocPage'

function Navigation() {
  const location = useLocation()
  
  const isActive = (path) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(`${path}/`))

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
          <Link to="/docs" className={isActive('/docs') ? 'active' : ''}>Docs</Link>
        </li>
        <li>
          <a href="https://github.com/qayumXD" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter basename="/">
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/:slug" element={<DocPage />} />
          </Routes>
        </main>
        {showBackToTop && (
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </button>
        )}
        <footer>
          <p>&copy; 2026 Qayum. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
