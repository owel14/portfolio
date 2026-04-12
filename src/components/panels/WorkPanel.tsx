import { work } from '../../content';
import { PanelHeading } from '../PanelHeading';
import { PanelList } from '../PanelList';

export function WorkPanel() {
  return (
    <div className="panel-content">
      <PanelHeading panel={work} theme="chalk" />
      <PanelList items={work.items} theme="chalk" />
      <p className="cta chalk-cta">{work.cta}</p>
    </div>
  );
}
