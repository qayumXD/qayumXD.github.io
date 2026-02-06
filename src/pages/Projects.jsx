import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>A selection of projects I've worked on, from quantum computing simulations to AI-powered healthcare systems.</p>
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
