import { useEffect, useRef } from 'react'
import mermaid from 'mermaid/dist/mermaid.esm.mjs'

const MERMAID_CONFIG = {
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'strict'
}

export default function Mermaid({ chart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let isMounted = true

    const render = async () => {
      try {
        mermaid.initialize(MERMAID_CONFIG)
        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        const { svg } = await mermaid.render(id, chart)
        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      } catch (error) {
        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = '<pre>Mermaid diagram failed to render.</pre>'
        }
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }

    render()

    return () => {
      isMounted = false
    }
  }, [chart])

  return <div className="mermaid" ref={containerRef} />
}
