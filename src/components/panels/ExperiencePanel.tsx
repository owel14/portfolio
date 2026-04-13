import { Briefcase } from 'lucide-react';
import { PanelEntryList } from '../PanelEntryList';
import type { PanelEntry } from '../PanelEntryList';
import { SectionHeader } from '../SectionHeader';

const experienceEntries = [
  {
    title: 'CodeHQ',
    badge: 'Dec 2024 – Feb 2025',
    subtitle: 'Software Intern',
    bullets: [
      'Gained practical experience in full-stack development workflow, version control, and working within an established codebase',
      'Worked closely with a product manager and development team to deliver project tasks within agile sprints, following established company processes and best practices',
      "Collaborated with overseas leadership on enhancing a timesheet application's user interface, contributing to improved usability and user satisfaction",
    ],
  },
  {
    title: 'Jackson Allison Med. & Surgical',
    badge: 'Nov 2022 – Feb 2024',
    subtitle: 'Customer Services',
    bullets: [
      'Resolved customer issues and coordinated with logistics to ensure timely delivery of medical equipment',
      'Collaborated with the sales team to ensure accurate order processing and timely delivery of medical supplies to various healthcare facilities',
    ],
  },
  {
    title: 'Tasty Roast',
    badge: 'Nov 2021 – Feb 2022',
    subtitle: 'Cashier',
    bullets: [
      'Managed cash register operations, processed customer transactions, and maintained accurate records of sales and payments in a fast-paced environment',
    ],
  },
] as const satisfies readonly PanelEntry[];

export function ExperiencePanel() {
  return (
    <div className="panel-content">
      <SectionHeader icon={<Briefcase size={10} strokeWidth={1.5} />}>Experience</SectionHeader>
      <PanelEntryList entries={experienceEntries} layout="stacked" />
    </div>
  );
}
