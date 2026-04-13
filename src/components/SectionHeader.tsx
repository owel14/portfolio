import type { ReactElement, ReactNode } from 'react';

type SectionHeaderProps = {
  icon?: ReactElement;
  children: ReactNode;
  theme?: 'ink' | 'chalk';
};

export function SectionHeader({ icon, children, theme = 'ink' }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-1.25 text-[9px] tracking-[2.5px] uppercase font-normal ${theme === 'ink' ? 'text-ink-secondary' : 'text-chalk/75'}`}>
      {icon}
      {children}
    </div>
  );
}
