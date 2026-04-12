export type ApproachContent = {
  label: string;
  title: string;
  emphasis: string;
  degree: string;
  gpa: string;
  period: string;
  coursesLabel: string;
  items: readonly string[];
  cta: string;
};

export const approach: ApproachContent = {
  label: 'Education',
  title: 'University',
  emphasis: 'of Auckland',
  degree: 'BE(Hons) Software Engineering',
  gpa: '8.1',
  period: '2022 – 2025',
  coursesLabel: 'Relevant Courses',
  items: [
    'Soft. Eng. Design',
    'Software Architecture',
    'AI & Machine Learning',
    'Networks & Security',
    'Object-Oriented Prog.',
    'Database Systems',
  ],
  cta: 'Flip for summary →',
};
