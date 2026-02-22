import { Link } from 'react-router-dom'
import { docsData } from '../data/docs'

export default function Docs() {
  return (
    <div className="docs-page">
      <h2>Documentation</h2>
      <p>Browse project documentation and technical deep dives.</p>
      <div className="docs-list">
        {docsData.map((doc) => (
          <div key={doc.slug} className="doc-card">
            <h3>
              <Link to={`/docs/${doc.slug}`}>{doc.title}</Link>
            </h3>
            <p>{doc.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
