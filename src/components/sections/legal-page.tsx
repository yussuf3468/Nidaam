import type { ReactNode } from 'react';
import { Breadcrumbs } from './page-hero';
import { Eyebrow } from './section';
import { formatDate } from '@/lib/utils';

export function LegalPage({ title, path, updated, intro, children }: { title: string; path: string; updated: string; intro: string; children: ReactNode }) {
  return (
    <article className="relative pt-28 pb-24 sm:pt-32 lg:pt-40">
      <div className="bg-blueprint pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]" aria-hidden />
      <div className="container-prose">
        <Breadcrumbs items={[{ name: title, path }]} />
        <div className="mt-10">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 text-5xl leading-[1] font-bold tracking-[-0.045em] sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Last updated <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        </div>
        <div className="prose-nidaam mt-12 border-t border-border pt-4">{children}</div>
      </div>
    </article>
  );
}
