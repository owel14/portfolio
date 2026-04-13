import { useCallback } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { cx } from './cx';

export type PanelSide = 'left' | 'right';

type TogglePanelProps = {
  side: PanelSide;
  folded: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export function TogglePanel({ side, folded, onToggle, children }: TogglePanelProps) {
  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    onToggle();
  }, [onToggle]);

  return (
    <div
      className={cx('panel', `panel-${side}`)}
      role="button"
      tabIndex={0}
      aria-pressed={!folded}
      aria-label={`${folded ? 'Open' : 'Close'} ${side} pamphlet panel`}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}
