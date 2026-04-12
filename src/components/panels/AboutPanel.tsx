import { about } from '../../content';
import { PanelHeading } from '../PanelHeading';

export function AboutPanel() {
  return (
    <div className="panel-content">
      <PanelHeading panel={about} theme="ink" />
      <p className="body-text ink-dim">{about.body}</p>
      <div className="tags">
        {about.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      <p className="cta ink-cta">{about.cta}</p>
    </div>
  );
}
