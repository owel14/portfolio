import type { ReactNode } from 'react';
import { cx } from './cx';

type PanelCtaProps = {
  children: ReactNode;
  theme?: 'ink' | 'chalk' | 'chalk-dim';
};

const themeClass = {
  ink:        'text-ink-secondary',
  chalk:      'text-chalk/80',
  'chalk-dim': 'text-chalk/50',
} as const;

export function PanelCta({ children, theme = 'ink' }: PanelCtaProps) {
  return (
    <p className={cx('mt-auto text-[9px] tracking-[2px] uppercase', themeClass[theme])}>
      {children}
    </p>
  );
}
