import { Briefcase } from 'lucide-react';
import { Bullet } from '../Bullet';
import { PanelCard } from '../PanelCard';
import { SectionHeader } from '../SectionHeader';

export function ExperiencePanel() {
  return (
    <div className="panel-content">
      <SectionHeader icon={<Briefcase size={10} strokeWidth={1.5} />}>Experience</SectionHeader>

      <div className="flex flex-col">
        <PanelCard title="CodeHQ" badge="Dec 2024 – Feb 2025" subtitle="Software Intern" layout="stacked" isFirst>
          <Bullet>Gained practical experience in full-stack development workflow, version control, and working within an established codebase</Bullet>
          <Bullet>Worked closely with a product manager and development team to deliver project tasks within agile sprints, following established company processes and best practices</Bullet>
          <Bullet>Collaborated with overseas leadership on enhancing a timesheet application's user interface, contributing to improved usability and user satisfaction</Bullet>
        </PanelCard>

        <PanelCard title="Jackson Allison Med. & Surgical" badge="Nov 2022 – Feb 2024" subtitle="Customer Services" layout="stacked">
          <Bullet>Resolved customer issues and coordinated with logistics to ensure timely delivery of medical equipment</Bullet>
          <Bullet>Collaborated with the sales team to ensure accurate order processing and timely delivery of medical supplies to various healthcare facilities</Bullet>
        </PanelCard>

        <PanelCard title="Tasty Roast" badge="Nov 2021 – Feb 2022" subtitle="Cashier" layout="stacked" isLast>
          <Bullet>Managed cash register operations, processed customer transactions, and maintained accurate records of sales and payments in a fast-paced environment</Bullet>
        </PanelCard>
      </div>
    </div>
  );
}
