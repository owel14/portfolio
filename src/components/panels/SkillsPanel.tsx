import { Code2, Globe, Wrench, Users } from 'lucide-react';
import type { ReactElement } from 'react';

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
      <div className="flex flex-col gap-[clamp(10px,1.2vh,14px)]">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.75">
            <span className="flex items-center gap-1 text-[9.5px] tracking-[2.5px] uppercase text-ink-secondary">
              {group.icon}
              {group.label}
            </span>
            <p className="text-[clamp(12px,1.1vw,14.5px)] font-light leading-[1.55] text-ink/80">
              {group.items}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-auto text-[clamp(8px,0.78vw,10px)] tracking-[2px] uppercase text-ink-secondary">
        Flip to see projects →
      </p>

      <div className="flex flex-col gap-1.5 pt-1.5 border-t border-rule">
        <div className="flex items-center gap-1.25 text-ink-secondary">
          <Users size={10} strokeWidth={1.5} />
          <span className="text-[9px] tracking-[2.5px] uppercase font-normal">References</span>
        </div>

        <div className="flex flex-col gap-px pb-1.5 border-b border-ink/7">
          <span className="text-[clamp(12px,1.1vw,14.5px)] font-semibold text-ink">Winston Chow</span>
          <span className="text-[clamp(11px,0.98vw,13px)] font-light text-ink/75">Chief Talent Officer · CodeHQ</span>
          <span className="text-[clamp(10px,0.9vw,12px)] font-light text-ink-secondary break-all">winston.chow@codehq.nz</span>
        </div>

        <div className="flex flex-col gap-px">
          <span className="text-[clamp(12px,1.1vw,14.5px)] font-semibold text-ink">Kate Manning</span>
          <span className="text-[clamp(11px,0.98vw,13px)] font-light text-ink/75">Customer Services Lead · Jackson Allison</span>
          <span className="text-[clamp(10px,0.9vw,12px)] font-light text-ink-secondary break-all">kate.manning@jackson-allison.co.nz</span>
          <span className="text-[clamp(10px,0.9vw,12px)] font-light text-ink-secondary break-all">+64 27 819 8312</span>
        </div>
      </div>
    </div>
  );
}
