import type { ReactElement } from 'react';
import { Mail, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../BrandIcons';
import { PanelCta } from '../PanelCta';

type ContactItem = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: ReactElement;
};

export const contact = [
  { label: 'Email', value: 'oliverlin146@gmail.com', href: 'mailto:oliverlin146@gmail.com', icon: <Mail className="size-2.5" strokeWidth={1.5} /> },
  { label: 'Phone', value: '+64 20 4162 8840', href: 'tel:+642041628840', icon: <Phone className="size-2.5" strokeWidth={1.5} /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/oliver-k-lin', href: 'https://linkedin.com/in/oliver-k-lin/', icon: <LinkedInIcon className="size-2.5" /> },
  { label: 'GitHub', value: 'github.com/owel14', href: 'https://github.com/owel14', icon: <GitHubIcon className="size-2.5" /> },
] as const satisfies readonly ContactItem[];

export function CoverPanel() {
  return (
    <div className="panel-content">
      <div className="flex flex-col">
        <h1 className="font-serif text-4xl font-bold leading-[1.05] text-white">
          Oliver{' '}
          <em className="block not-italic font-normal text-[1.05em] text-white/90">Lin</em>
        </h1>
        <div className="w-9 h-0.5 bg-white/35 mt-3.5 mb-3 shrink-0" />
        <p className="text-[0.625rem] tracking-[0.3em] uppercase text-white/80">
          Software Engineer
        </p>
      </div>

      <p className="text-[0.6875rem] font-light leading-[1.7] text-white">
        Full-stack dev & user-focused software.
      </p>

      <div className="flex flex-col gap-1.75">
        {contact.map((item) => {
          const external = item.href.startsWith('http');

          return (
            <div key={item.label} className="flex items-center gap-1.75">
              <span className="text-white/70 shrink-0">
                {item.icon}
              </span>
              <a
                href={item.href}
                className="text-[0.625rem] font-light text-white break-all no-underline transition-colors duration-150 hover:text-blue-300"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                draggable={false}
                onClick={(event) => { event.stopPropagation(); }}
              >
                {item.value}
              </a>
            </div>
          );
        })}
      </div>

      <PanelCta theme="chalk-dim">Open to unfold ›</PanelCta>
    </div>
  );
}
