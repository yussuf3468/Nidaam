import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CodeSnippet } from '@/components/graphics/code-snippet';
import { icons } from '@/components/icons';
import { Tag } from '@/components/ui/badge';
import type { Service } from '@/content/services';
import { cn, pad2 } from '@/lib/utils';

type ServiceCardProps = {
  service: Service;
  index: number;
  size?: 'default' | 'feature';
  className?: string;
};

/** Linked service tile with a cursor spotlight. `feature` shows what the service includes. */
export function ServiceCard({ service, index, size = 'default', className }: ServiceCardProps) {
  const Icon = icons[service.icon];
  const flagship = service.flagship;
  return (
    <Link
      href={`/services/${service.slug}`}
      data-spotlight
      className={cn(
        'spotlight group flex h-full flex-col rounded-3xl border p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1 sm:p-7',
        flagship ? 'ink border-transparent hover:shadow-lift' : 'border-border bg-card hover:border-border-strong hover:shadow-lift',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            'grid size-12 place-items-center rounded-2xl border transition-colors duration-300',
            flagship ? 'border-brand/30 bg-brand/15 text-brand' : 'border-border bg-background group-hover:border-brand/40 group-hover:text-brand-ink',
          )}
        >
          <Icon className="size-5.5" strokeWidth={1.5} aria-hidden />
        </span>
        <span className="font-mono text-xs text-faint">{pad2(index)}</span>
      </div>

      {size === 'feature' && <CodeSnippet className="mt-8 hidden transition-transform duration-700 ease-out-expo group-hover:-translate-y-1 sm:block" />}

      <div className="mt-auto pt-10">
        {flagship && <p className="eyebrow mb-3 text-brand">Flagship · Monthly subscription</p>}
        <h3 className={cn('font-bold tracking-tight', size === 'feature' ? 'text-3xl sm:text-4xl' : 'text-xl')}>{service.title}</h3>
        <p className={cn('mt-3 leading-relaxed text-muted-foreground', size === 'feature' ? 'max-w-lg text-lg' : 'text-[0.9375rem]')}>
          {service.tagline}
        </p>
        {size === 'feature' && (
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {service.includes.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        )}
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
          Explore
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
