import type { ReactNode } from 'react';

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-1.5 text-[12px] font-light leading-normal text-ink">
      <span aria-hidden="true" className="mt-[0.55em] size-1 shrink-0 rounded-full bg-ink-secondary/70" />
      <span>{children}</span>
    </li>
  );
}
