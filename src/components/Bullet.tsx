import type { ReactNode } from 'react';

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative text-[12px] font-light leading-normal text-ink">
      <span aria-hidden="true" className="left-0 text-ink-secondary select-none"> • </span>
      {children}
    </li>
  );
}
