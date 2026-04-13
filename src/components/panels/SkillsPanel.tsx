import { Code2, GraduationCap, Users } from 'lucide-react';
import { Bullet } from '../Bullet';
import { PanelCard } from '../PanelCard';
import { SectionHeader } from '../SectionHeader';

type SkillGroup = {
  readonly label: string;
  readonly items: readonly string[];
};

type Reference = {
  readonly name: string;
  readonly role: string;
  readonly email: string;
  readonly phone?: string;
};

const skillGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'SQL', 'C++', 'C#', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Vite', '.NET', 'PyTorch', 'TensorFlow', 'Boost'],
  },
  {
    label: 'Tools',
    items: ['Git', 'VS Code', 'Visual Studio', 'Linux', 'Azure DevOps', 'Azure', 'Cloudflare', 'Docker'],
  },
] as const satisfies readonly SkillGroup[];

const references: readonly Reference[] = [
  {
    name: 'Winston Chow',
    role: 'Chief Talent Officer · CodeHQ',
    email: 'winston.chow@codehq.nz',
  },
  {
    name: 'Kate Manning',
    role: 'Customer Services Lead · Jackson Allison',
    email: 'kate.manning@jackson-allison.co.nz',
    phone: '+64 27 819 8312',
  },
];

export function SkillsPanel() {
  return (
    <div className="panel-content">
      <SectionHeader icon={<Code2 size={10} strokeWidth={1.5} />}>Skills</SectionHeader>

      <div className="flex flex-col gap-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.75">
            <span className="text-sm font-semibold text-ink">{group.label}</span>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <span key={item} className="text-[10px] font-medium text-ink bg-white/70 border border-ink/10 rounded px-1.5 py-0.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-rule">
        <SectionHeader icon={<GraduationCap size={10} strokeWidth={1.5} />}>Education</SectionHeader>
        <PanelCard title="University of Auckland" subtitle="BE(Hons) Software Engineering" badge="2022 – 2025" layout="stacked" isFirst isLast>
          <Bullet>8.1 GPA</Bullet>
        </PanelCard>
      </div>

      <div className="flex flex-col gap-2 pt-2 border-t border-rule">
        <SectionHeader icon={<Users size={10} strokeWidth={1.5} />}>References</SectionHeader>

        {references.map((reference, index) => (
          <div key={reference.email} className={`flex flex-col gap-px ${index < references.length - 1 ? 'pb-1.5 border-b border-ink/7' : ''}`}>
            <span className="text-sm font-semibold text-ink">{reference.name}</span>
            <span className="text-xs font-light text-ink">{reference.role}</span>
            <span className="text-[11px] font-light text-ink-secondary break-all">{reference.email}</span>
            {reference.phone === undefined ? null : (
              <span className="text-[11px] font-light text-ink-secondary break-all">{reference.phone}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
