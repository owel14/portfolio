import { Code2, Globe, Wrench, Users } from 'lucide-react';
import type { ReactElement } from 'react';
import { PanelCta } from '../PanelCta';
import { SectionHeader } from '../SectionHeader';

type SkillGroup = {
  readonly icon: ReactElement;
  readonly label: string;
  readonly items: string;
};

const skillGroups: readonly SkillGroup[] = [
  { icon: <Code2  size={10} strokeWidth={1.5} />, label: 'Languages',       items: 'Java · Python · C++ · C · JavaScript · TypeScript' },
  { icon: <Globe  size={10} strokeWidth={1.5} />, label: 'Web & Frameworks', items: 'React · Next.js · C# .NET · PyTorch · TensorFlow' },
  { icon: <Wrench size={10} strokeWidth={1.5} />, label: 'Tools',            items: 'Git · Azure DevOps · Linux · SQL · VS Code' },
];

export function SkillsPanel() {
  return (
    <div className="panel-content">
      <div className="flex flex-col gap-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.75">
            <span className="flex items-center gap-1 text-[9.5px] tracking-[2.5px] uppercase text-ink-secondary">
              {group.icon}
              {group.label}
            </span>
            <p className="text-sm font-light leading-[1.55] text-ink">
              {group.items}
            </p>
          </div>
        ))}
      </div>

      <PanelCta>Flip to see projects →</PanelCta>

      <div className="flex flex-col gap-1.5 pt-1.5 border-t border-rule">
        <SectionHeader icon={<Users size={10} strokeWidth={1.5} />}>References</SectionHeader>

        <div className="flex flex-col gap-px pb-1.5 border-b border-ink/7">
          <span className="text-sm font-semibold text-ink">Winston Chow</span>
          <span className="text-xs font-light text-ink">Chief Talent Officer · CodeHQ</span>
          <span className="text-[11px] font-light text-ink-secondary break-all">winston.chow@codehq.nz</span>
        </div>

        <div className="flex flex-col gap-px">
          <span className="text-sm font-semibold text-ink">Kate Manning</span>
          <span className="text-xs font-light text-ink">Customer Services Lead · Jackson Allison</span>
          <span className="text-[11px] font-light text-ink-secondary break-all">kate.manning@jackson-allison.co.nz</span>
          <span className="text-[11px] font-light text-ink-secondary break-all">+64 27 819 8312</span>
        </div>
      </div>
    </div>
  );
}
