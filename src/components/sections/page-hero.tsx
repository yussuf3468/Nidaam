import Link from 'next/link';
import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbSchema } from '@/lib/schema';
import { Eyebrow } from './section';

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {trail.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3 text-faint" aria-hidden />}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-foreground">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

type PageHeroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
};

/** Hero for inner pages: breadcrumb, eyebrow, large title, intro and optional side panel. */
export function PageHero({ crumbs, eyebrow, title, description, actions, aside, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 lg:pb-16">
      <div className="container-site">
        <div className="animate-fade-up">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className={aside ? 'mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10' : 'mt-8'}>
          <div className={aside ? 'lg:col-span-7' : 'max-w-5xl'}>
            <div className="animate-fade-up [animation-delay:60ms]">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-3 animate-fade-up text-[clamp(2.125rem,3.3vw,3.375rem)] leading-[1.08] font-bold tracking-[-0.035em] text-balance [animation-delay:120ms]">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-pretty text-muted-foreground [animation-delay:200ms] sm:text-lg">
                {description}
              </p>
            )}
            {actions && <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:280ms]">{actions}</div>}
          </div>
          {aside && <div className="animate-fade-up [animation-delay:300ms] lg:col-span-5">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
