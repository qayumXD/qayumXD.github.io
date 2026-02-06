import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects'

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
      <div className="project-category" style={{ marginBottom: '1.5rem' }}>{project.category}</div>
      
      <section>
        <h2>Overview</h2>
        <div className="bio" style={{ whiteSpace: 'pre-line' }}>
          {project.fullDescription}
        </div>
      </section>

      {project.features && (
        <section style={{ marginTop: '2rem' }}>
          <h2>Key Features</h2>
          <ul className="feature-list">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      <section style={{ marginTop: '2rem' }}>
        <h2>Technologies</h2>
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Source Code</h2>
        <p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </p>
      </section>
    </>
  )
}
