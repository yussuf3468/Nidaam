import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CodeSnippet } from '@/components/graphics/code-snippet';
import { icons } from '@/components/icons';
import { Tag } from '@/components/ui/badge';
import type { Service } from '@/content/services';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  service: Service;
  size?: 'default' | 'feature';
  className?: string;
};

/** Linked service tile. `feature` adds a code panel and what the service includes. */
export function ServiceCard({ service, size = 'default', className }: ServiceCardProps) {
  const Icon = icons[service.icon];
  const flagship = service.flagship;
  return (
    <Link
      href={`/services/${service.slug}`}
      data-spotlight
      className={cn(
        'spotlight group flex h-full flex-col rounded-2xl border p-6 transition-[box-shadow,border-color] duration-300 sm:p-7',
        flagship ? 'ink border-transparent hover:shadow-lift' : 'border-border bg-card hover:border-border-strong hover:shadow-soft',
        className,
      )}
    >
      <span
        className={cn(
          'grid size-11 place-items-center rounded-xl border transition-colors duration-300',
          flagship ? 'border-brand/30 bg-brand/15 text-brand' : 'border-border bg-background group-hover:text-brand-ink',
        )}
      >
        <Icon className="size-5" strokeWidth={1.6} aria-hidden />
      </span>

      {size === 'feature' && <CodeSnippet className="mt-8 hidden sm:block" />}

      <div className="mt-auto pt-8">
        {flagship && <p className="mb-2 text-sm font-semibold text-brand">Monthly subscription</p>}
        <h3 className={cn('font-bold tracking-tight', size === 'feature' ? 'text-2xl sm:text-3xl' : 'text-lg')}>{service.title}</h3>
        <p className={cn('mt-2 leading-relaxed text-muted-foreground', size === 'feature' ? 'max-w-lg text-base sm:text-lg' : 'text-[0.9375rem]')}>
          {service.tagline}
        </p>
        {size === 'feature' && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {service.includes.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        )}
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold">
          Learn more
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
