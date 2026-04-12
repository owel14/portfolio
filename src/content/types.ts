export type Theme = 'ink' | 'chalk';

export type HeadingPanel = {
  label: string;
  title: string;
  emphasis: string;
};

export type Profile = {
  year: string;
  firstName: string;
  lastName: string;
  role: string;
  intro: string;
};

export type TextListPanel = HeadingPanel & {
  items: readonly string[];
  cta: string;
};

export type BodyListPanel = TextListPanel & {
  body: string;
};

export type ContactPanel = HeadingPanel & {
  body: string;
  items: readonly string[];
  footer: string;
};

export type AboutPanel = HeadingPanel & {
  body: string;
  tags: readonly string[];
  cta: string;
};
