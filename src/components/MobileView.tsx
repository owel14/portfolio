import { Briefcase, Code2, FolderOpen, GraduationCap, Users } from 'lucide-react';
import { Bullet } from './Bullet';
import { PanelCard } from './PanelCard';
import { PanelEntryList } from './PanelEntryList';
import { SectionHeader } from './SectionHeader';
import { contact } from './panels/CoverPanel';
import { experienceEntries } from './panels/ExperiencePanel';
import { projectEntries } from './panels/ProjectsPanel';
import { references, skillGroups } from './panels/SkillsPanel';

export function MobileView() {
  return (
    <div className="mobile-view">

      {/* ── Hero ── */}
      <div className="bg-navy px-6 pt-14 pb-10 flex flex-col items-center gap-5">
        <img
          src={`${import.meta.env.BASE_URL}img/profile.jpg`}
          alt="Profile"
          className="size-28 rounded-full object-cover object-[center_40%] border-2 border-white/20"
        />

        <div className="text-center">
          <h1 className="font-serif text-[2.2rem] font-bold leading-tight text-white">
            Oliver Lin
          </h1>
          <p className="text-[10px] tracking-[3px] uppercase text-white/70 mt-2">
            Software Engineer
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 w-full max-w-xs">
          {contact.map((item) => {
            const external = item.href.startsWith('http');
            return (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-white/60 shrink-0">{item.icon}</span>
                <a
                  href={item.href}
                  className="text-[11px] font-light text-white/85 no-underline hover:text-blue-300 transition-colors duration-150 truncate"
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="bg-paper flex-1 flex flex-col">

        <section className="px-6 py-5 border-b border-rule flex flex-col gap-3">
          <SectionHeader icon={<GraduationCap size={10} strokeWidth={1.5} />}>
            Career Objective
          </SectionHeader>
          <p className="text-xs font-light leading-[1.82] text-ink">
            I am a recent Software Engineering graduate with a strong interest in full-stack development
            and building user-focused software. Through my internship and university projects, I have
            gained experience collaborating in agile teams, working with existing codebases, and applying
            clean coding practices. I'm looking for an opportunity where I can continue learning while
            contributing to meaningful applications.
          </p>
        </section>

        <section className="px-6 py-5 border-b border-rule flex flex-col gap-3">
          <SectionHeader icon={<Briefcase size={10} strokeWidth={1.5} />}>Experience</SectionHeader>
          <PanelEntryList entries={experienceEntries} layout="stacked" />
        </section>

        <section className="px-6 py-5 border-b border-rule flex flex-col gap-3">
          <SectionHeader icon={<FolderOpen size={10} strokeWidth={1.5} />}>Projects</SectionHeader>
          <PanelEntryList entries={projectEntries} layout="inline" />
        </section>

        <section className="px-6 py-5 border-b border-rule flex flex-col gap-3">
          <SectionHeader icon={<GraduationCap size={10} strokeWidth={1.5} />}>Education</SectionHeader>
          <PanelCard
            title="University of Auckland"
            subtitle="BE(Hons) Software Engineering"
            badge="2022 - 2025"
            layout="stacked"
            isFirst
            isLast
          >
            <Bullet>8.1 GPA</Bullet>
          </PanelCard>
        </section>

        <section className="px-6 py-5 border-b border-rule flex flex-col gap-3">
          <SectionHeader icon={<Code2 size={10} strokeWidth={1.5} />}>Skills</SectionHeader>
          <div className="flex flex-col gap-3.5">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-ink">{group.label}</span>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-medium text-ink bg-white/70 border border-ink/10 rounded px-1.5 py-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-5 flex flex-col gap-3">
          <SectionHeader icon={<Users size={10} strokeWidth={1.5} />}>References</SectionHeader>
          <div className="flex flex-col gap-3">
            {references.map((ref, index) => (
              <div
                key={ref.email}
                className={`flex flex-col gap-0.5 ${index < references.length - 1 ? 'pb-3 border-b border-ink/10' : ''}`}
              >
                <span className="text-xs font-semibold text-ink">{ref.name}</span>
                <span className="text-xs font-light text-ink">{ref.role}</span>
                <span className="text-[11px] font-light text-ink-secondary break-all">{ref.email}</span>
                {ref.phone !== undefined && (
                  <span className="text-[11px] font-light text-ink-secondary">{ref.phone}</span>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
