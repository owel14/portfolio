import { contact } from '../../content';
import { PanelHeading } from '../PanelHeading';
import { PanelList } from '../PanelList';

export function ContactPanel() {
  return (
    <div className="panel-content">
      <PanelHeading panel={contact} theme="ink" />
      <p className="body-text ink-dim">{contact.body}</p>
      <PanelList items={contact.items} theme="ink" />
      <p className="footer">{contact.footer}</p>
    </div>
  );
}
