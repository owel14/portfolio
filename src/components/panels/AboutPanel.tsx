import { about } from '../../content/about';
import { Briefcase } from 'lucide-react';

export function AboutPanel() {
  return (
    <div className="panel-content">
      <p className="exp-intro body-text ink-dim">{about.intro}</p>

      <div className="exp-entries">
        {about.entries.map((entry) => (
          <div className="exp-entry" key={entry.company}>
            <div className="exp-entry-header">
              <Briefcase size={11} strokeWidth={1.5} className="exp-icon" />
              <div className="exp-entry-meta">
                <span className="exp-company">{entry.company}</span>
                <span className="exp-role ink-dim">{entry.role}</span>
              </div>
            </div>
            <span className="exp-period">{entry.period}</span>
            <ul className="exp-bullets">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="exp-bullet ink-dim">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
