import { FolderOpen } from 'lucide-react';
import type { ReactNode } from 'react';

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-[10px] text-[clamp(11px,1vw,13px)] font-light leading-[1.5] text-ink/80">
      <span aria-hidden="true" className="absolute left-0 text-ink-secondary select-none">·</span>
      {children}
    </li>
  );
}

type ProjectProps = {
  name: string;
  type: string;
  isFirst?: boolean;
  isLast?: boolean;
  children: ReactNode;
};

function Project({ name, type, isFirst = false, isLast = false, children }: ProjectProps) {
  return (
    <div className={[
      'flex flex-col gap-1.5',
      isFirst ? 'pb-[clamp(8px,1vh,12px)]' : 'py-[clamp(8px,1vh,12px)]',
      isLast ? '' : 'border-b border-ink/10',
    ].filter(Boolean).join(' ')}>
      <div className="flex items-center gap-[6px]">
        <span className="text-[clamp(13px,1.2vw,15.5px)] font-semibold text-ink flex-1 min-w-0">{name}</span>
        <span className="text-[9px] tracking-[1.8px] uppercase text-ink-secondary ml-auto whitespace-nowrap">{type}</span>
      </div>
      <ul className="list-none flex flex-col gap-[3px]">
        {children}
      </ul>
    </div>
  );
}

export function ProjectsPanel() {
  return (
    <div className="panel-content">
      <div className="flex items-center gap-[5px] text-[9px] tracking-[2.5px] uppercase text-ink-secondary font-normal">
        <FolderOpen size={10} strokeWidth={1.5} />
        Projects
      </div>

      <div className="flex flex-col">
        <Project name="Timesheet System" type="Internship" isFirst>
          <Bullet>Developed a comprehensive timesheet management application using React for the frontend with a C# .NET backend exposing REST APIs</Bullet>
        </Project>

        <Project name="Vector DB Research" type="Research">
          <Bullet>Optimized data querying for terabyte-scale datasets that exceed main memory capacity</Bullet>
          <Bullet>Researched and implemented novel techniques in C++ to improve state-of-the-art external memory vector database querying, achieving a 15% performance gain</Bullet>
        </Project>

        <Project name="EV Energy Monitor" type="Capstone">
          <Bullet>Built a real-time energy monitoring system for electric vehicles with React TypeScript frontend and C# .NET CORS backend</Bullet>
          <Bullet>Implemented end-to-end features including data persistence, API endpoint design, and responsive UI components</Bullet>
        </Project>

        <Project name="Chopsticks Game" type="Personal" isLast>
          <Bullet>Created an interactive online multiplayer game based on the chopsticks hand game with React Next.js</Bullet>
          <Bullet>Developed real-time multiplayer functionality handling concurrent user sessions and game state management</Bullet>
        </Project>
      </div>
    </div>
  );
}
