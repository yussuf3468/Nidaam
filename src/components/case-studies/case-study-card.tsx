import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MockScreen } from '@/components/graphics/mock-screen';
import { ExampleLabel } from '@/components/ui/badge';
import type { CaseStudy } from '@/content/case-studies';
import { getIndustry } from '@/content/industries';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const industry = getIndustry(study.industry);
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,border-color] duration-300 hover:border-border-strong hover:shadow-soft"
    >
      {/* Fixed-height picture so cards in a row line up. */}
      <div className="h-52 overflow-hidden border-b border-border bg-background/70 px-6 pt-6 sm:h-56">
        <MockScreen variant={study.visual} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow">{industry?.name}</span>
          <ExampleLabel className="ml-auto" />
        </div>
        <h3 className="mt-3 text-lg leading-snug font-bold tracking-tight text-balance">{study.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{study.designedTo}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold">
          See the approach
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
