import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { icons } from '@/components/icons';
import type { Industry } from '@/content/industries';

export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = icons[industry.icon];
  return (
    <Link
      href={`/solutions/${industry.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[box-shadow,border-color] duration-300 hover:border-border-strong hover:shadow-soft sm:p-7"
    >
      <span className="grid size-11 place-items-center rounded-xl border border-border bg-background transition-colors group-hover:text-brand-ink">
        <Icon className="size-5" strokeWidth={1.6} aria-hidden />
      </span>
      <h3 className="mt-8 text-lg font-bold tracking-tight">{industry.name}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{industry.headline}</p>
      <p className="mt-auto pt-5 text-sm text-muted-foreground">{industry.modules.slice(0, 4).join(' · ')}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
        Learn more
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </span>
    </Link>
  );
}
