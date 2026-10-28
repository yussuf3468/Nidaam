import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MockScreen } from '@/components/graphics/mock-screen';
import { SampleLabel } from '@/components/ui/badge';
import type { CaseStudy } from '@/content/case-studies';
import { getIndustry } from '@/content/industries';
import { site } from '@/content/site';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const industry = getIndustry(study.industry);
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[box-shadow,border-color,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:border-border-strong hover:shadow-lift"
    >
      <div className="relative overflow-hidden border-b border-border bg-background/70 px-6 pt-7">
        <div className="relative translate-y-2 transition-transform duration-700 ease-out-expo group-hover:translate-y-0 group-hover:scale-[1.015]">
          <MockScreen variant={study.visual} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow">{industry?.name}</span>
          <span className="text-faint" aria-hidden>
            ·
          </span>
          <span className="eyebrow">{study.timeline}</span>
          {site.labelSampleContent && <SampleLabel className="ml-auto" />}
        </div>
        <h3 className="mt-3 text-xl leading-snug font-bold tracking-tight text-balance">{study.title}</h3>
        <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{study.client}</p>
        <div className="min-h-6 flex-1" aria-hidden />
        <dl className="grid grid-cols-2 gap-4 border-t border-border pt-5">
          {study.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd className="text-2xl font-bold tracking-tight tabular-nums">
                {metric.prefix}
                {metric.value}
                {metric.suffix}
              </dd>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">{metric.label}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
          Read the case study
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
