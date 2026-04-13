import { Briefcase } from 'lucide-react';
import type { ReactNode } from 'react';

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-[10px] text-[clamp(11px,1vw,13px)] font-light leading-[1.5] text-ink/80">
      <span aria-hidden="true" className="absolute left-0 text-ink-secondary select-none">·</span>
      {children}
    </li>
  );
}

type EntryProps = {
  company: string;
  role: string;
  period: string;
  isLast?: boolean;
  children: ReactNode;
};

function Entry({ company, role, period, isLast = false, children }: EntryProps) {
  return (
    <div className={`flex flex-col gap-0.5 ${isLast ? '' : 'pb-[clamp(8px,1vh,11px)] border-b border-ink/10'}`}>
      <div className="flex flex-col gap-px">
        <span className="text-[clamp(12px,1.1vw,15px)] font-semibold text-ink leading-[1.2]">{company}</span>
        <span className="text-[clamp(11px,1vw,13px)] font-light italic text-ink/75">{role}</span>
      </div>
      <span className="text-[9.5px] tracking-[1.5px] uppercase text-ink-secondary pl-[17px]">{period}</span>
      <ul className="list-none flex flex-col gap-[3px] mt-[3px] pl-[17px]">
        {children}
      </ul>
    </div>
  );
}

export function ExperiencePanel() {
  return (
    <div className="panel-content">
      <div className="flex items-center gap-[5px] text-[9px] tracking-[2.5px] uppercase text-ink-secondary font-normal">
        <Briefcase size={10} strokeWidth={1.5} />
        Experience
      </div>

      <div className="flex flex-col gap-[clamp(8px,1vh,12px)]">
        <Entry company="CodeHQ" role="Software Intern" period="Dec 2024 – Feb 2025">
          <Bullet>Gained practical experience in full-stack development workflow, version control, and working within an established codebase</Bullet>
          <Bullet>Worked closely with a product manager and development team to deliver project tasks within agile sprints, following established company processes and best practices</Bullet>
          <Bullet>Collaborated with overseas leadership on enhancing a timesheet application's user interface, contributing to improved usability and user satisfaction</Bullet>
        </Entry>

        <Entry company="Jackson Allison Med. & Surgical" role="Customer Services" period="Nov 2022 – Feb 2024">
          <Bullet>Resolved customer issues and coordinated with logistics to ensure timely delivery of medical equipment</Bullet>
          <Bullet>Collaborated with the sales team to ensure accurate order processing and timely delivery of medical supplies to various healthcare facilities</Bullet>
        </Entry>

        <Entry company="Tasty Roast" role="Cashier" period="Nov 2021 – Feb 2022" isLast>
          <Bullet>Managed cash register operations, processed customer transactions, and maintained accurate records of sales and payments in a fast-paced environment</Bullet>
        </Entry>
      </div>
    </div>
  );
}
