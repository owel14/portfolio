import { services } from '../../content/services';
import { Code2, Globe, Wrench } from 'lucide-react';

const categoryIcons = {
  'Languages':          <Code2  size={10} strokeWidth={1.5} />,
  'Web & Frameworks':   <Globe  size={10} strokeWidth={1.5} />,
  'Tools':              <Wrench size={10} strokeWidth={1.5} />,
};

export function ServicesPanel() {
  return (
    <div className="panel-content">
      <div className="skill-groups">
        {services.groups.map((group) => (
          <div className="skill-group" key={group.category}>
            <span className="skill-group-label">
              {categoryIcons[group.category as keyof typeof categoryIcons]}
              {group.category}
            </span>
            <p className="skill-group-items ink-dim">
              {group.skills.join(' · ')}
            </p>
          </div>
        ))}
      </div>

      <p className="cta ink-cta">{services.cta}</p>
    </div>
  );
}
