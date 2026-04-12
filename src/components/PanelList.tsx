import { cx } from './cx';

type PanelListProps = {
  items: readonly string[];
  theme: 'ink' | 'chalk';
};

export function PanelList({ items, theme }: PanelListProps) {
  return (
    <ul className={cx('list', theme === 'chalk' ? 'chalk-dim' : 'ink-dim')}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
