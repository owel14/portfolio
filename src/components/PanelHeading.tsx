import { cx } from './cx';

type PanelHeadingProps = {
  panel: { label: string; title: string; emphasis: string };
  theme: 'ink' | 'chalk';
};

export function PanelHeading({ panel, theme }: PanelHeadingProps) {
  const isChalk = theme === 'chalk';

  return (
    <>
      <p className={cx('label', isChalk ? 'chalk-dim' : '')}>{panel.label}</p>
      <h2 className={cx('title', isChalk ? 'chalk' : 'ink')}>
        {panel.title}
        <em>{panel.emphasis}</em>
      </h2>
      <hr className={cx('rule', isChalk ? 'chalk-rule' : 'ink-rule')} />
    </>
  );
}
