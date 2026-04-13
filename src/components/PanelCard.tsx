import type { ReactNode } from 'react';

type PanelCardProps = {
  title: string;
  badge: string;
  subtitle?: string;
  layout: 'stacked' | 'inline';
  isFirst?: boolean;
  isLast?: boolean;
  children: ReactNode;
};

export function PanelCard({
  title,
  badge,
  subtitle,
  layout,
  isFirst = false,
  isLast = false,
  children,
}: PanelCardProps) {
  const stacked = layout === 'stacked';

  return (
    <div className={[
      'flex flex-col',
      stacked ? 'gap-0.5' : 'gap-1.5',
      isFirst ? '' : 'pt-1',
      isLast ? '' : 'pb-1',
      isLast ? '' : 'border-b border-ink/10',
    ].filter(Boolean).join(' ')}>

      {stacked ? (
        <>
          <div className="flex flex-col gap-px">
            <span className="text-sm font-semibold text-ink leading-[1.2]">{title}</span>
            {subtitle ? (
              <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                <span className="text-xs font-light italic text-ink">{subtitle}</span>
                <span className="text-[9.5px] tracking-[1.5px] uppercase text-ink-secondary ml-auto whitespace-nowrap">{badge}</span>
              </div>
            ) : (
              <span className="text-[9.5px] tracking-[1.5px] uppercase text-ink-secondary">{badge}</span>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-ink flex-1 min-w-0">{title}</span>
          <span className="text-[9px] tracking-[1.8px] uppercase text-ink-secondary ml-auto whitespace-nowrap">{badge}</span>
        </div>
      )}

      <ul className={`list-none flex flex-col gap-0.75 ${stacked ? 'mt-0.5 pl-2' : ''}`}>
        {children}
      </ul>
    </div>
  );
}
