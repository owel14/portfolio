export type Profile = {
  year: string;
  firstName: string;
  lastName: string;
  role: string;
  intro: string;
  available: boolean;
  location: string;
  gpa: string;
};

export const profile: Profile = {
  year: '2025',
  firstName: 'Oliver',
  lastName: 'Lin',
  role: 'Software Engineer',
  intro: 'Full-stack dev & user-focused software.',
  available: true,
  location: 'NZ',
  gpa: '8.1',
};
