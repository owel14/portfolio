import { useCallback, useState } from 'react';
import { cx } from './components/cx';
import { TogglePanel } from './components/TogglePanel';
import type { PanelSide } from './components/TogglePanel';
import {
  CoverPanel,
  ExperiencePanel,
  ProjectsPanel,
  EducationPanel,
  SkillsPanel,
  ProfilePanel,
} from './components/panels';
import { usePamphletRotation } from './usePamphletRotation';

type FoldState = Record<PanelSide, boolean> & {
  top: PanelSide;
};

export default function App() {
  const [folds, setFolds] = useState<FoldState>({ left: true, right: true, top: 'left' });
  const { stageRef, pamphletRef, stageProps, pamphletProps } = usePamphletRotation();

  const togglePanel = useCallback((side: PanelSide): void => {
    setFolds((current) => {
      const nextFolded = !current[side];
      const oppositeSide = side === 'left' ? 'right' : 'left';

      return {
        ...current,
        [side]: nextFolded,
        top: nextFolded ? side : current[oppositeSide] ? oppositeSide : current.top,
      };
    });
  }, []);

  const toggleLeft = useCallback((): void => { togglePanel('left'); }, [togglePanel]);
  const toggleRight = useCallback((): void => { togglePanel('right'); }, [togglePanel]);

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
              <ExperiencePanel />
            </div>
            <div className="face face-back">
              <CoverPanel />
            </div>
          </TogglePanel>

          <div className="panel panel-center">
            <div className="face face-front">
              <ProjectsPanel />
            </div>
            <div className="face face-back">
              <EducationPanel />
            </div>
          </div>

          <TogglePanel side="right" folded={folds.right} onToggle={toggleRight}>
            <div className="face face-front">
              <SkillsPanel />
            </div>
            <div className="face face-back">
              <ProfilePanel />
            </div>
          </TogglePanel>
        </div>
      </div>

      <p className="hint text-[10px] font-light tracking-[2.5px] uppercase text-white/15 select-none transition-opacity duration-[400ms]">drag to rotate in 3D · click panels to fold · arrow keys rotate</p>

    </main>
  );
}
