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
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
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
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="bg-blueprint pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="container-site">
        <div className="animate-fade-up">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className={aside ? 'mt-10 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10' : 'mt-10'}>
          <div className={aside ? 'lg:col-span-7' : 'max-w-5xl'}>
            <div className="animate-fade-up [animation-delay:60ms]">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-6 animate-fade-up text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-pretty text-muted-foreground [animation-delay:200ms] sm:text-xl">
                {description}
              </p>
            )}
            {actions && <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:280ms]">{actions}</div>}
          </div>
          {aside && <div className="animate-fade-up [animation-delay:300ms] lg:col-span-5">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
