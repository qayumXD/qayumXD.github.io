import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Home() {
  return (
    <div className="hero">
      <h1>Hi, I'm Qayum</h1>
      <p className="bio">
        I'm a full-stack developer with a passion for building elegant and performant applications. 
        I specialize in creating AI-powered solutions, from full-stack news portals that analyze 
        legal texts to computer vision systems that detect and map infrastructure using geospatial data. 
        With expertise in React, Node.js, and Python, I enjoy architecting scalable systems and 
        exploring new frontiers in machine learning and automation.
      </p>
      <p className="bio" style={{ marginTop: '2rem' }}>
        When I'm not coding, you can find me exploring new frameworks, contributing to open source, 
        or architecting solutions for complex problems.
      </p>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          {projectsData.slice(-2).map(project => ( // Displaying last 2 projects as featured
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-list">
          {['React', 'Node.js', 'Python', 'AI/Machine Learning', 'Computer Vision', 'Geospatial Data', 'Headless CMS (Strapi)', 'Docker', 'Cloud Technologies', 'LangGraph', 'Next.js', 'YOLOv8', 'n8n'].map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
