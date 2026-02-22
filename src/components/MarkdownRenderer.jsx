import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Mermaid from './Mermaid'
import './MarkdownRenderer.css'

export default function MarkdownRenderer({ content, markdown, className = '' }) {
  const source = content ?? markdown ?? ''

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const codeText = String(children).replace(/\n$/, '')

            if (!inline && match?.[1] === 'mermaid') {
              return <Mermaid chart={codeText} />
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}
