import type { ReactElement, ReactNode } from 'react';
import { cx } from './cx';

type SectionHeaderProps = {
  icon?: ReactElement;
  children: ReactNode;
  theme?: 'ink' | 'chalk' | 'white';
  className?: string;
};

const themeClass = {
  ink: 'text-ink-secondary',
  chalk: 'text-chalk/75',
  white: 'text-white',
} as const;

export function SectionHeader({ icon, children, theme = 'ink', className }: SectionHeaderProps) {
  return (
    <div className={cx('flex items-center gap-1.25 text-[11px] tracking-[2.5px] uppercase font-bold', themeClass[theme], className)}>
      {icon}
      {children}
    </div>
  );
}
