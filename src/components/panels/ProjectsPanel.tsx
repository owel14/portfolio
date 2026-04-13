import { FolderOpen } from 'lucide-react';
import { Bullet } from '../Bullet';
import { PanelCard } from '../PanelCard';
import { SectionHeader } from '../SectionHeader';

export function ProjectsPanel() {
  return (
    <div className="panel-content">
      <SectionHeader icon={<FolderOpen size={10} strokeWidth={1.5} />}>Projects</SectionHeader>

      <div className="flex flex-col">
        <PanelCard title="Timesheet System" badge="Internship" layout="inline" isFirst>
          <Bullet>Developed a comprehensive timesheet management application using React for the frontend with a C# .NET backend exposing REST APIs</Bullet>
        </PanelCard>

        <PanelCard title="Vector DB Research" badge="Research" layout="inline">
          <Bullet>Optimized data querying for terabyte-scale datasets that exceed main memory capacity</Bullet>
          <Bullet>Researched and implemented novel techniques in C++ to improve state-of-the-art external memory vector database querying, achieving a 15% performance gain</Bullet>
        </PanelCard>

        <PanelCard title="Cross-Platform Web Application" badge="Capstone" layout="inline">
          <Bullet>Built a real-time energy monitoring system for electric vehicles with React TypeScript frontend and C# .NET CORS backend</Bullet>
          <Bullet>Implemented end-to-end features including data persistence, API endpoint design, and responsive UI components</Bullet>
        </PanelCard>

        <PanelCard title="Multiplayer Web Game" badge="Personal" layout="inline" isLast>
          <Bullet>Created an interactive online multiplayer game based on the chopsticks hand game with React Next.js</Bullet>
          <Bullet>Developed real-time multiplayer functionality handling concurrent user sessions and game state management</Bullet>
        </PanelCard>
      </div>
    </div>
  );
}
