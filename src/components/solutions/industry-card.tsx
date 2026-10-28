import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { icons } from '@/components/icons';
import type { Industry } from '@/content/industries';
import { pad2 } from '@/lib/utils';

export function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = icons[industry.icon];
  return (
    <Link
      href={`/solutions/${industry.slug}`}
      data-spotlight
      className="spotlight group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-border-strong hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl border border-border bg-background transition-colors group-hover:border-brand/40 group-hover:text-brand-ink">
          <Icon className="size-5.5" strokeWidth={1.5} aria-hidden />
        </span>
        <span className="font-mono text-xs text-faint">{pad2(index)}</span>
      </div>
      <h3 className="mt-10 text-xl font-bold tracking-tight">{industry.name}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{industry.headline}</p>
      <p className="mt-auto pt-6 font-mono text-xs text-muted-foreground">{industry.modules.slice(0, 4).join(' · ')}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
        Explore
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </span>
    </Link>
  );
}
