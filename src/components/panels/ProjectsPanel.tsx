import { ExternalLink, FolderOpen } from "lucide-react";
import { PanelEntryList } from "../PanelEntryList";
import type { PanelEntry } from "../PanelEntryList";
import { SectionHeader } from "../SectionHeader";

const projectEntries = [
  {
    title: "Timesheet System",
    badge: "Internship",
    bullets: [
      "Developed a comprehensive timesheet management application using React for the frontend with a C# .NET backend exposing REST APIs",
    ],
  },
  {
    title: "Vector DB Research",
    badge: "Research",
    href: `${import.meta.env.BASE_URL}pdf/report.pdf`,
    titleIcon: <ExternalLink size={9} strokeWidth={1.8} />,
    bullets: [
      "Optimized data querying for terabyte-scale datasets that exceed main memory capacity",
      "Researched and implemented novel techniques in C++ to achieve a 15% performance gain",
    ],
  },
  {
    title: "Cross-Platform Web Application",
    badge: "Capstone",
    bullets: [
      "Built a real-time EV monitoring system with React Next.js frontend and C# ASP .NET Core backend",
      "Delivered end-to-end features across data persistence, REST API design, and responsive UI",
    ],
  },
  {
    title: "Multiplayer Web Game",
    badge: "Personal",
    href: "https://chopsticks-online.vercel.app/",
    titleIcon: <ExternalLink size={9} strokeWidth={1.8} />,
    bullets: [
      "Created an interactive online multiplayer game based on the chopsticks hand game with React Next.js frontend and C# ASP .NET Core backend",
    ],
  },
  {
    title: "Custom Webshop",
    badge: "Personal",
    href: "https://tastyroast.co.nz/",
    titleIcon: <ExternalLink size={9} strokeWidth={1.8} />,
    bullets: [
      "Created an end-to-end custom e-commerce solution with React Next.js frontend and C# ASP .NET Core backend, integrating payment processing and inventory management",
    ],
  },
] as const satisfies readonly PanelEntry[];

export function ProjectsPanel() {
  return (
    <div className="panel-content">
      <SectionHeader icon={<FolderOpen size={10} strokeWidth={1.5} />}>
        Projects
      </SectionHeader>
      <PanelEntryList entries={projectEntries} layout="inline" />
    </div>
  );
}
