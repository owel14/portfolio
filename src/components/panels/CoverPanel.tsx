import { profile } from '../../content';

export function CoverPanel() {
  return (
    <div className="panel-content cover">
      <p className="cover-eye">Portfolio · {profile.year}</p>
      <h1 className="cover-name">
        {profile.firstName}
        <em>{profile.lastName}</em>
      </h1>
      <div className="cover-bar" />
      <p className="cover-role">{profile.role}</p>
      <p className="cover-sub">{profile.intro}</p>
      <p className="cover-cta">Open to unfold ›</p>
    </div>
  );
}
