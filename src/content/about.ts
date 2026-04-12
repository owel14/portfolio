export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: readonly string[];
};

export type ExperienceContent = {
  label: string;
  title: string;
  emphasis: string;
  intro: string;
  entries: readonly ExperienceEntry[];
};

export const about: ExperienceContent = {
  label: 'Experience',
  title: 'Work',
  emphasis: 'History',
  intro: 'Internship and part-time experience in agile delivery, full-stack dev, and customer service.',
  entries: [
    {
      company: 'CodeHQ',
      role: 'Software Intern',
      period: 'Dec 2024 – Feb 2025',
      bullets: [
        'Full-stack workflow, version control & codebase practices',
        'Agile sprint delivery alongside PM and dev team',
        'Improved timesheet UI with overseas leadership',
      ],
    },
    {
      company: 'Jackson Allison Med. & Surgical',
      role: 'Customer Services',
      period: 'Nov 2022 – Feb 2024',
      bullets: [
        'Customer issue resolution & medical logistics',
        'Order processing for healthcare facilities',
      ],
    },
    {
      company: 'Tasty Roast',
      role: 'Cashier',
      period: 'Nov 2021 – Feb 2022',
      bullets: [
        'Cash register operations & transaction records',
      ],
    },
  ],
};
