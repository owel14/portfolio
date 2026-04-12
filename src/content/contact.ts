export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type Reference = {
  name: string;
  role: string;
  company: string;
  email?: string;
  phone?: string;
};

export type ContactContent = {
  label: string;
  title: string;
  emphasis: string;
  body: string;
  items: readonly ContactItem[];
  references: readonly Reference[];
  footer: string;
};

export const contact: ContactContent = {
  label: 'Get in Touch',
  title: "Let's",
  emphasis: 'Connect',
  body: 'Based in New Zealand. Open to full-stack development opportunities.',
  items: [
    { label: 'Email',    value: 'oliverlin146@gmail.com',                        href: 'mailto:oliverlin146@gmail.com' },
    { label: 'Phone',    value: '+64 20 4162 8840',                              href: 'tel:+642041628840' },
    { label: 'LinkedIn', value: 'linkedin.com/in/oliver-k-lin',                  href: 'https://linkedin.com/in/oliver-k-lin/' },
    { label: 'GitHub',   value: 'github.com/owel14',                             href: 'https://github.com/owel14' },
  ],
  references: [
    {
      name: 'Winston Chow',
      role: 'Chief Talent Officer',
      company: 'CodeHQ',
      email: 'wintson.chow@codehq.nz',
    },
    {
      name: 'Kate Manning',
      role: 'Customer Services Lead',
      company: 'Jackson Allison',
      email: 'kate.manning@jackson-allison.co.nz',
      phone: '+64 27 819 8312',
    },
  ],
  footer: '© 2025 Oliver Lin',
};
