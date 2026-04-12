import { work } from '../../content/work';
import { FileText, Cpu, Zap, Play } from 'lucide-react';

const typeIcons = {
  Internship: <FileText size={11} strokeWidth={1.5} />,
  Research:   <Cpu      size={11} strokeWidth={1.5} />,
  Capstone:   <Zap      size={11} strokeWidth={1.5} />,
  Personal:   <Play     size={11} strokeWidth={1.5} />,
};

export function WorkPanel() {
  return (
    <div className="panel-content">
      <div className="project-entries">
        {work.items.map((project) => (
          <div className="project-entry" key={project.name}>
            <div className="project-entry-header">
              {typeIcons[project.type as keyof typeof typeIcons]}
              <span className="project-entry-name">{project.name}</span>
              <span className="project-entry-type">{project.type}</span>
            </div>
            <span className="project-entry-desc chalk-dim">{project.description}</span>
            <span className="project-entry-stack chalk-dim">{project.stack}</span>
          </div>
        ))}
      </div>

      <p className="cta chalk-cta">{work.cta}</p>
    </div>
  );
}
