import { approach } from '../../content/approach';
import { BookOpen } from 'lucide-react';

export function ApproachPanel() {
  return (
    <div className="panel-content">
      <p className="edu-degree chalk-dim">{approach.degree}</p>

      <div className="edu-meta">
        <div className="edu-gpa">
          <span className="edu-gpa-value">{approach.gpa}</span>
          <span className="edu-gpa-label">GPA</span>
        </div>
        <div className="edu-period chalk-dim">
          <span>{approach.period}</span>
          <span>Graduated</span>
        </div>
      </div>

      <div className="edu-courses-label">
        <BookOpen size={10} strokeWidth={1.5} className="edu-courses-icon" />
        <p className="label chalk-dim">{approach.coursesLabel}</p>
      </div>
      <div className="edu-courses">
        {approach.items.map((course) => (
          <span className="edu-course chalk-dim" key={course}>{course}</span>
        ))}
      </div>

      <p className="cta chalk-cta">{approach.cta}</p>
    </div>
  );
}
