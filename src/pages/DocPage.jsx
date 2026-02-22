import { Link, useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'
import { docsData } from '../data/docs'

export default function DocPage() {
  const { slug } = useParams()
  const doc = docsData.find((item) => item.slug === slug)

  if (!doc) {
    return (
      <div className="docs-page">
        <h2>Documentation</h2>
        <p>That document was not found.</p>
        <Link className="back-link" to="/docs">Back to Docs</Link>
      </div>
    )
  }

  return (
    <div className="docs-page">
      <Link className="back-link" to="/docs">Back to Docs</Link>
      <h2>{doc.title}</h2>
      {doc.updatedAt && (
        <p className="doc-meta">Last updated: {doc.updatedAt}</p>
      )}
      <MarkdownRenderer content={doc.content} />
    </div>
  )
}
