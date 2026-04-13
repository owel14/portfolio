import { ExternalLink, FolderOpen } from 'lucide-react';
import { PanelEntryList } from '../PanelEntryList';
import type { PanelEntry } from '../PanelEntryList';
import { SectionHeader } from '../SectionHeader';

const projectEntries = [
  {
    title: 'Timesheet System',
    badge: 'Internship',
    bullets: [
      'Developed a comprehensive timesheet management application using React for the frontend with a C# .NET backend exposing REST APIs',
    ],
  },
  {
    title: 'Vector DB Research',
    badge: 'Research',
    bullets: [
      'Optimized data querying for terabyte-scale datasets that exceed main memory capacity',
      'Researched and implemented novel techniques in C++ to improve state-of-the-art external memory vector database querying, achieving a 15% performance gain',
    ],
  },
  {
    title: 'Cross-Platform Web Application',
    badge: 'Capstone',
    bullets: [
      'Built a real-time energy monitoring system for electric vehicles with React TypeScript frontend and C# ASP .NET Core backend',
      'Implemented end-to-end features including data persistence, API endpoint design, and responsive UI components',
    ],
  },
  {
    title: 'Multiplayer Web Game',
    badge: 'Personal',
    href: 'https://example.com/multiplayer-web-game',
    titleIcon: <ExternalLink size={9} strokeWidth={1.8} />,
    bullets: [
      'Created an interactive online multiplayer game based on the chopsticks hand game with React Next.js',
      'Developed real-time multiplayer functionality handling concurrent user sessions and game state management',
    ],
  },
] as const satisfies readonly PanelEntry[];

export function ProjectsPanel() {
  return (
    <div className="panel-content">
      <SectionHeader icon={<FolderOpen size={10} strokeWidth={1.5} />}>Projects</SectionHeader>
      <PanelEntryList entries={projectEntries} layout="inline" />
    </div>
  );
}
