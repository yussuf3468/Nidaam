import type { ReactNode } from 'react';
import { Breadcrumbs } from './page-hero';
import { Eyebrow } from './section';
import { formatDate } from '@/lib/utils';

export function LegalPage({ title, path, updated, intro, children }: { title: string; path: string; updated: string; intro: string; children: ReactNode }) {
  return (
    <article className="relative pt-24 pb-16 sm:pt-28">
      <div className="container-prose">
        <Breadcrumbs items={[{ name: title, path }]} />
        <div className="mt-8">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 text-[clamp(2rem,3vw,3rem)] leading-[1.1] font-bold tracking-[-0.035em]">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        </div>
        <div className="prose-nidaam mt-8 border-t border-border pt-8">{children}</div>
      </div>
    </article>
  );
}
