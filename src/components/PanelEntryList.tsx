import { Bullet } from './Bullet';
import { cx } from './cx';
import { PanelCard } from './PanelCard';
import type { PanelCardLayout } from './PanelCard';

export type PanelEntry = {
  readonly title: string;
  readonly badge: string;
  readonly subtitle?: string;
  readonly bullets: readonly string[];
};

type PanelEntryListProps = {
  entries: readonly PanelEntry[];
  layout: PanelCardLayout;
  className?: string;
};

export function PanelEntryList({ entries, layout, className }: PanelEntryListProps) {
  return (
    <div className={cx('flex flex-col', className)}>
      {entries.map((entry, index) => (
        <PanelCard
          key={`${entry.title}-${entry.badge}`}
          title={entry.title}
          badge={entry.badge}
          layout={layout}
          isFirst={index === 0}
          isLast={index === entries.length - 1}
          {...(entry.subtitle === undefined ? {} : { subtitle: entry.subtitle })}
        >
          {entry.bullets.map((bullet) => (
            <Bullet key={`${entry.title}-${bullet}`}>{bullet}</Bullet>
          ))}
        </PanelCard>
      ))}
    </div>
  );
}
