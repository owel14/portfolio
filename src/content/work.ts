export type Project = {
  name: string;
  description: string;
  stack: string;
  type: string;
};

export type WorkContent = {
  label: string;
  title: string;
  emphasis: string;
  items: readonly Project[];
  cta: string;
};

export const work: WorkContent = {
  label: 'Projects',
  title: 'Selected',
  emphasis: 'Work',
  items: [
    {
      name: 'Timesheet System',
      description: 'Timesheet management app with REST APIs',
      stack: 'React & C# .NET',
      type: 'Internship',
    },
    {
      name: 'Vector DB Research',
      description: 'TB-scale dataset querying — 15% perf. gain',
      stack: 'C++',
      type: 'Research',
    },
    {
      name: 'EV Energy Monitor',
      description: 'Real-time energy monitoring for electric vehicles',
      stack: 'React TS & C# .NET',
      type: 'Capstone',
    },
    {
      name: 'Chopsticks Game',
      description: 'Real-time multiplayer hand game with session state',
      stack: 'Next.js',
      type: 'Personal',
    },
  ],
  cta: 'Fold left for contact →',
};
