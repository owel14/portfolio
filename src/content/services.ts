export type SkillGroup = {
  category: string;
  skills: readonly string[];
};

export type ServicesContent = {
  label: string;
  title: string;
  emphasis: string;
  groups: readonly SkillGroup[];
  cta: string;
};

export const services: ServicesContent = {
  label: 'Skills',
  title: 'Technical',
  emphasis: 'Stack',
  groups: [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Web & Frameworks',
      skills: ['React', 'Next.js', 'C# .NET', 'PyTorch', 'TensorFlow'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'Azure DevOps', 'Linux', 'SQL', 'VS Code'],
    },
  ],
  cta: 'Flip to see projects →',
};
