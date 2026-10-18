import { ArrowUpRight } from 'lucide-react';
import { site } from '../config/site';
import type { Service } from '../content/services';
import { cn } from '../lib/cn';

interface ServiceCardProps {
  service: Service;
  index: number;
}

/** Borderless white record card. The whole card opens an enquiry email for that service. */
export function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, description, examples, tile } = service;
  const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`${title} enquiry`)}`;

  return (
    <a
      href={href}
      className="group flex h-full flex-col rounded-xl bg-card p-5 text-card-foreground outline-none transition-[box-shadow,transform] duration-200 ease-pill hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn('grid size-12 place-items-center rounded-2xl text-white', tile)}>
          <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="text-xs font-medium tabular-nums text-muted-foreground" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-[15px] leading-snug text-muted-foreground">{description}</p>

      <div className="mt-auto pt-5">
        <div className="border-t border-dashed border-border" />
        <div className="mt-3 flex items-center justify-between gap-3 text-xs">
          <span className="truncate text-muted-foreground">{examples}</span>
          <span className="inline-flex shrink-0 items-center gap-0.5 font-semibold text-foreground">
            Enquire
            <ArrowUpRight
              className="size-3.5 transition-transform duration-200 ease-pill group-hover:-translate-y-px group-hover:translate-x-px"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </a>
  );
}
