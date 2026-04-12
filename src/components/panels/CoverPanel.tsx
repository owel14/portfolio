import { profile } from '../../content/profile';
import { contact } from '../../content/contact';
import { Mail, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../BrandIcons';

const contactIcons = {
  Email:    <Mail         size={10} strokeWidth={1.5} />,
  Phone:    <Phone        size={10} strokeWidth={1.5} />,
  LinkedIn: <LinkedInIcon size={10} />,
  GitHub:   <GitHubIcon   size={10} />,
};

export function CoverPanel() {
  return (
    <div className="panel-content cover">
      <div className="cover-hero">
        <h1 className="cover-name">
          {profile.firstName}
          <em>{profile.lastName}</em>
        </h1>
        <div className="cover-bar" />
        <p className="cover-role">{profile.role}</p>
      </div>

      <p className="cover-sub">{profile.intro}</p>

      <div className="cover-contacts">
        {contact.items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="cover-contact-row"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            draggable={false}
            onClick={(e) => e.stopPropagation()}
          >
            {contactIcons[item.label as keyof typeof contactIcons]}
            <span className="cover-contact-value">{item.value}</span>
          </a>
        ))}
      </div>

      <p className="cover-cta">Open to unfold ›</p>
    </div>
  );
}
