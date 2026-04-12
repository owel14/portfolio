import { services } from '../../content';
import { PanelHeading } from '../PanelHeading';
import { PanelList } from '../PanelList';

export function ServicesPanel() {
  return (
    <div className="panel-content">
      <PanelHeading panel={services} theme="ink" />
      <PanelList items={services.items} theme="ink" />
      <p className="cta ink-cta">{services.cta}</p>
    </div>
  );
}
