import { approach } from '../../content';
import { PanelHeading } from '../PanelHeading';
import { PanelList } from '../PanelList';

export function ApproachPanel() {
  return (
    <div className="panel-content">
      <PanelHeading panel={approach} theme="chalk" />
      <p className="body-text chalk-dim">{approach.body}</p>
      <PanelList items={approach.items} theme="chalk" />
      <p className="cta chalk-cta">{approach.cta}</p>
    </div>
  );
}
