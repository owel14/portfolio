import { useCallback, useState } from 'react';
import { cx } from './components/cx';
import { TogglePanel } from './components/TogglePanel';
import type { PanelSide } from './components/TogglePanel';
import {
  AboutPanel,
  ApproachPanel,
  ContactPanel,
  CoverPanel,
  ServicesPanel,
  WorkPanel,
} from './components/panels';
import { usePamphletRotation } from './usePamphletRotation';

type FoldState = Record<PanelSide, boolean> & {
  top: PanelSide;
};

export default function App() {
  const [folds, setFolds] = useState<FoldState>({ left: true, right: true, top: 'left' });
  const { stageRef, pamphletRef, stageProps, pamphletProps } = usePamphletRotation();

  const toggleLeft = useCallback((): void => {
    setFolds((current) => {
      const left = !current.left;
      return {
        ...current,
        left,
        top: left ? 'left' : current.right ? 'right' : current.top,
      };
    });
  }, []);

  const toggleRight = useCallback((): void => {
    setFolds((current) => {
      const right = !current.right;
      return {
        ...current,
        right,
        top: right ? 'right' : current.left ? 'left' : current.top,
      };
    });
  }, []);

  return (
    <main
      className={cx(
        'pamphlet-root',
        folds.left ? 'is-fold-left' : '',
        folds.right ? 'is-fold-right' : '',
        `is-top-${folds.top}`
      )}
    >
      <div className="pamphlet-stage" aria-label="3D portfolio pamphlet" ref={stageRef} {...stageProps}>
        <div
          className="pamphlet"
          tabIndex={0}
          aria-label="Drag to rotate. Use arrow keys to rotate and Home to reset."
          ref={pamphletRef}
          {...pamphletProps}
        >
          <TogglePanel side="left" folded={folds.left} onToggle={toggleLeft}>
            <div className="face face-front">
              <ContactPanel />
            </div>
            <div className="face face-back">
              <CoverPanel />
            </div>
          </TogglePanel>

          <div className="panel panel-center">
            <div className="face face-front">
              <AboutPanel />
            </div>
            <div className="face face-back">
              <ApproachPanel />
            </div>
          </div>

          <TogglePanel side="right" folded={folds.right} onToggle={toggleRight}>
            <div className="face face-front">
              <ServicesPanel />
            </div>
            <div className="face face-back">
              <WorkPanel />
            </div>
          </TogglePanel>
        </div>
      </div>

      <p className="hint">drag to rotate in 3D · click panels to fold · arrow keys rotate</p>
    </main>
  );
}
