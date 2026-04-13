import { Mail, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../BrandIcons';
import type { ReactElement } from 'react';

type ContactItem = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: ReactElement;
};

const contact: readonly ContactItem[] = [
  { label: 'Email',    value: 'oliverlin146@gmail.com',       href: 'mailto:oliverlin146@gmail.com',         icon: <Mail         size={10} strokeWidth={1.5} /> },
  { label: 'Phone',    value: '+64 20 4162 8840',             href: 'tel:+642041628840',                     icon: <Phone        size={10} strokeWidth={1.5} /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/oliver-k-lin', href: 'https://linkedin.com/in/oliver-k-lin/', icon: <LinkedInIcon size={10} /> },
  { label: 'GitHub',   value: 'github.com/owel14',            href: 'https://github.com/owel14',             icon: <GitHubIcon   size={10} /> },
];

export function CoverPanel() {
  return (
    <div className="panel-content">
      <div className="flex flex-col">
        <h1 className="font-serif text-[clamp(26px,3.2vw,48px)] font-bold leading-[1.05] text-chalk">
          Oliver
          <em className="block not-italic font-normal text-[1.05em] text-chalk/90">Lin</em>
        </h1>
        <div className="w-9 h-0.5 bg-chalk/35 mt-[14px] mb-3 shrink-0" />
        <p className="text-[clamp(9px,0.9vw,11px)] tracking-[3px] uppercase text-chalk/80">
          Software Engineer
        </p>
      </div>

      <p className="text-[clamp(10px,0.95vw,12px)] font-light leading-[1.7] text-chalk/75">
        Full-stack dev & user-focused software.
      </p>

      <div className="flex flex-col gap-[7px]">
        {contact.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-[7px] no-underline group"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            draggable={false}
            onClick={(e) => { e.stopPropagation(); }}
          >
            <span className="text-chalk/70 shrink-0 transition-colors duration-150 group-hover:text-chalk">
              {item.icon}
            </span>
            <span className="text-[clamp(9px,0.88vw,11px)] font-light text-chalk/80 break-all transition-colors duration-150 group-hover:text-chalk">
              {item.value}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-auto text-[9px] tracking-[2.5px] uppercase text-chalk/50">
        Open to unfold ›
      </p>
    </div>
  );
}
