import type { ReactNode } from 'react';
import { cx } from './cx';

export type PanelCardLayout = 'stacked' | 'inline';

type PanelCardProps = {
  title: string;
  badge: string;
  href?: string;
  titleIcon?: ReactNode;
  subtitle?: string;
  layout: PanelCardLayout;
  isFirst?: boolean;
  isLast?: boolean;
  children: ReactNode;
};

export function PanelCard({
  title,
  badge,
  href,
  titleIcon,
  subtitle,
  layout,
  isFirst = false,
  isLast = false,
  children,
}: PanelCardProps) {
  const stacked = layout === 'stacked';
  const titleContent = (
    <>
      <span>{title}</span>
      {titleIcon === undefined ? null : (
        <span aria-hidden="true" className="text-ink-secondary shrink-0 group-hover/title:text-blue-600">
          {titleIcon}
        </span>
      )}
    </>
  );

  return (
    <div className={cx(
      'flex flex-col',
      stacked ? 'gap-0.5' : 'gap-1.5',
      !isFirst && 'pt-1',
      !isLast && 'pb-1 border-b border-ink/10'
    )}>

      {stacked ? (
        <div className="flex flex-col gap-px">
          <span className="text-xs font-semibold text-ink leading-[1.2]">{title}</span>
          {subtitle ? (
            <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
              <span className="text-xs font-light italic text-ink">{subtitle}</span>
              <span className="text-[9.5px] tracking-[1.5px] uppercase text-ink-secondary ml-auto whitespace-nowrap">{badge}</span>
            </div>
          ) : (
            <span className="text-[9.5px] tracking-[1.5px] uppercase text-ink-secondary">{badge}</span>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          {href === undefined ? (
            <span className={cx(
              'flex items-center gap-1 text-xs font-semibold text-ink flex-1 min-w-0',
              titleIcon !== undefined && 'group/title hover:text-blue-600'
            )}>
              {titleContent}
            </span>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title flex items-center gap-1 text-xs font-semibold text-ink flex-1 min-w-0 no-underline hover:text-blue-600"
              draggable={false}
              onClick={(event) => { event.stopPropagation(); }}
            >
              {titleContent}
            </a>
          )}
          <span className="text-[9px] tracking-[1.8px] uppercase text-ink-secondary ml-auto whitespace-nowrap">{badge}</span>
        </div>
      )}

      <ul className={cx('list-none flex flex-col gap-0.75', stacked && 'mt-0.5 pl-2')}>
        {children}
      </ul>
    </div>
  );
}
