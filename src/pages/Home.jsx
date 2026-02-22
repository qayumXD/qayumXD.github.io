import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { projectsData } from '../data/projects'
import { docsData } from '../data/docs'

export default function Home() {
  const [contactEmail, setContactEmail] = useState('')
  const featuredProjects = useMemo(() => projectsData.slice(-3).reverse(), [])
  const caseStudy = projectsData.find((project) => project.id === 'quantum-vm')
  const latestDoc = docsData[0]

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const mailto = `mailto:qayumxd@gmail.com?subject=${encodeURIComponent(
      'Project inquiry'
    )}&body=${encodeURIComponent(
      `Hi Qayum,%0D%0A%0D%0AI'm reaching out about:%0D%0A%0D%0AContact email: ${contactEmail}`
    )}`
    window.location.href = mailto
  }

  const handleMagnetMove = (event) => {
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    target.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleMagnetLeave = (event) => {
    event.currentTarget.style.transform = 'translate(0, 0)'
  }

  return (
    <div className="home">
      <section className="hero-section" data-reveal>
        <div className="hero-copy">
          <p className="hero-eyebrow">Full-stack developer · AI systems · Quantum computing</p>
          <h1>
            Hi, I&apos;m <span className="signature">Qayum</span>
          </h1>
          <p className="hero-lede">
            I build production-ready AI and simulation systems that are fast, explainable,
            and designed to ship. Recent focus: quantum simulation, agentic AI, and
            geospatial computer vision.
          </p>
          <div className="hero-actions">
            <Link
              to="/projects"
              className="btn primary magnetic"
              onMouseMove={handleMagnetMove}
              onMouseLeave={handleMagnetLeave}
            >
              View Projects
            </Link>
            <Link
              to="/docs"
              className="btn ghost magnetic"
              onMouseMove={handleMagnetMove}
              onMouseLeave={handleMagnetLeave}
            >
              Read Docs
            </Link>
          </div>
          <div className="hero-links">
            <a className="link-underline" href="https://github.com/qayumXD" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link className="link-underline" to="/docs">Docs</Link>
            <a className="link-underline" href="mailto:qayumxd@gmail.com">Contact</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <p className="card-label">Currently Building</p>
            <h3>Quantum Virtual Machine</h3>
            <p>
              Hardware-agnostic transpilation, statevector simulation, and educational tooling
              for quantum workflows.
            </p>
          </div>
          <div className="hero-card">
            <p className="card-label">Latest Doc</p>
            {latestDoc ? (
              <>
                <h3>{latestDoc.title}</h3>
                <p>{latestDoc.summary}</p>
                <Link className="link-underline" to={`/docs/${latestDoc.slug}`}>Read</Link>
              </>
            ) : (
              <p>Documentation coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <div className="section-divider">
        <svg viewBox="0 0 600 32" aria-hidden="true">
          <path d="M10 16 H590" />
        </svg>
      </div>

      <section className="featured-projects" data-reveal>
        <div className="section-heading">
          <h2>Featured Work</h2>
          <Link className="link-underline" to="/projects">View all projects</Link>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card elevated">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link className="link-underline" to={`/projects/${project.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study" data-reveal>
        <div className="case-study-card">
          <div>
            <p className="card-label">Case Study</p>
            <h2>{caseStudy?.title ?? 'Quantum Virtual Machine'}</h2>
            <p>
              A lightweight simulator that maps logical circuits to hardware topologies,
              inserts SWAP gates, and exports OpenQASM 2.0. Optimized for 10–12 qubits with
              vectorized NumPy execution.
            </p>
            <Link className="btn primary magnetic" to="/docs/quantum-virtual-machine"
              onMouseMove={handleMagnetMove}
              onMouseLeave={handleMagnetLeave}
            >
              Read the QVM Docs
            </Link>
          </div>
          <ul className="case-metrics">
            <li><span>10–12</span> qubits simulated</li>
            <li><span>OpenQASM</span> export pipeline</li>
            <li><span>Vectorized</span> state evolution</li>
          </ul>
        </div>
      </section>

      <section className="current-strip" data-reveal>
        <div>
          <p className="card-label">Currently Building</p>
          <h3>Explainable AI systems with measurable impact.</h3>
        </div>
        <Link className="link-underline" to="/projects">See roadmap</Link>
      </section>

      <section className="skills-section" data-reveal>
        <h2>Tech Stack Mosaic</h2>
        <div className="skills-mosaic">
          {['React', 'Node.js', 'Python', 'AI / ML', 'Computer Vision', 'Geospatial', 'Strapi', 'Docker', 'Cloud', 'LangGraph', 'Next.js', 'YOLOv8', 'n8n'].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-cta" data-reveal>
        <div>
          <h2>Start a conversation</h2>
          <p>Share your idea and I’ll respond with a clear next step.</p>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={contactEmail}
            onChange={(event) => setContactEmail(event.target.value)}
            required
          />
          <button
            type="submit"
            className="btn primary magnetic"
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
          >
            Contact Me
          </button>
        </form>
      </section>
    </div>
  )
}
