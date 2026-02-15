import MarkdownRenderer from '../components/MarkdownRenderer';
import { projectsData } from '../data/projects';

export default function Docs() {
  const qvmProject = projectsData.find(p => p.id === 'quantum-vm');
  
  return (
    <div className="docs-page">
      <h2>Project Documentation</h2>
      {qvmProject ? (
        <div className="doc-section">
          <h3>{qvmProject.title}</h3>
          <MarkdownRenderer markdown={qvmProject.fullDescription} />
        </div>
      ) : (
        <p>Quantum Virtual Machine project not found.</p>
      )}
    </div>
  );
}
