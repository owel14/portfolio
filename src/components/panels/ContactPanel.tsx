import { contact } from '../../content/contact';
import { Mail, Phone, Users } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../BrandIcons';

const itemIcons = {
  Email:    <Mail         size={10} strokeWidth={1.5} />,
  Phone:    <Phone        size={10} strokeWidth={1.5} />,
  LinkedIn: <LinkedInIcon size={10} />,
  GitHub:   <GitHubIcon   size={10} />,
};

export function ContactPanel() {
  return (
    <div className="panel-content">
      <p className="body-text ink-dim">{contact.body}</p>

      <div className="contact-entries">
        {contact.items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="contact-entry contact-entry-link"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            draggable={false}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="contact-entry-label">
              {itemIcons[item.label as keyof typeof itemIcons]}
              {item.label}
            </span>
            <span className="contact-entry-value">{item.value}</span>
          </a>
        ))}
      </div>

      <div className="ref-section">
        <div className="ref-heading">
          <Users size={10} strokeWidth={1.5} />
          <span className="label">References</span>
        </div>
        {contact.references.map((ref) => (
          <div className="ref-entry" key={ref.name}>
            <span className="ref-name">{ref.name}</span>
            <span className="ref-role ink-dim">{ref.role} · {ref.company}</span>
            {ref.email && <span className="ref-contact">{ref.email}</span>}
            {ref.phone && <span className="ref-contact">{ref.phone}</span>}
          </div>
        ))}
      </div>

      <p className="footer">{contact.footer}</p>
    </div>
  );
}
