'use client';

import Link from 'next/link';
import { useState } from 'react';
import { m } from 'motion/react';
import { Tabs } from 'radix-ui';
import { ArrowRight, Check, Minus } from 'lucide-react';
import { icons } from '@/components/icons';
import { Tag } from '@/components/ui/badge';
import type { Industry } from '@/content/industries';
import { cn } from '@/lib/utils';

/** Industry list (tabs) with a detail panel. Hovering a tab previews it on desktop. */
export function IndustriesExplorer({ industries }: { industries: Industry[] }) {
  const [value, setValue] = useState(industries[0].slug);

  return (
    <Tabs.Root value={value} onValueChange={setValue} orientation="vertical" className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <Tabs.List
        aria-label="Industries"
        className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0"
      >
        {industries.map((industry) => {
          const Icon = icons[industry.icon];
          return (
            <Tabs.Trigger
              key={industry.slug}
              value={industry.slug}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setValue(industry.slug)}
              className={cn(
                'group flex shrink-0 cursor-pointer items-center gap-3 rounded-full border border-border px-4 py-2.5 text-left text-sm font-semibold whitespace-nowrap transition-colors',
                'data-[state=active]:border-foreground data-[state=active]:bg-foreground data-[state=active]:text-background',
                'lg:rounded-none lg:border-0 lg:border-b lg:px-1 lg:py-4 lg:text-lg lg:data-[state=active]:bg-transparent lg:data-[state=active]:text-foreground',
                'lg:text-muted-foreground lg:hover:text-foreground',
              )}
            >
              <Icon className="size-4 lg:size-5" strokeWidth={1.6} aria-hidden />
              <span className="flex-1">{industry.name}</span>
              <ArrowRight
                className="hidden size-4 -translate-x-2 opacity-0 transition-all duration-300 group-data-[state=active]:translate-x-0 group-data-[state=active]:text-brand-ink group-data-[state=active]:opacity-100 lg:block"
                aria-hidden
              />
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      <div className="lg:col-span-8">
        {industries.map((industry) => (
          <Tabs.Content key={industry.slug} value={industry.slug} tabIndex={-1} className="outline-none">
            <Panel industry={industry} />
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}

function Panel({ industry }: { industry: Industry }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10"
    >
      <h3 className="text-2xl leading-tight font-bold tracking-tight text-balance sm:text-[1.75rem]">{industry.headline}</h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{industry.summary}</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">The problem today</p>
          <ul className="space-y-3">
            {industry.challenges.map((c) => (
              <li key={c} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Minus className="mt-1 size-4 shrink-0 text-faint" aria-hidden />
                <span className="font-body text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">What we build</p>
          <ul className="space-y-3">
            {industry.builds.map((b) => (
              <li key={b.title} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Check className="mt-1 size-4 shrink-0 text-brand-ink" aria-hidden />
                <span className="font-body">
                  <strong className="font-sans font-semibold">{b.title}.</strong>{' '}
                  <span className="text-muted-foreground">{b.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-1.5">
          {industry.modules.map((mod) => (
            <li key={mod}>
              <Tag>{mod}</Tag>
            </li>
          ))}
        </ul>
        <Link
          href={`/solutions/${industry.slug}`}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-ink"
        >
          {industry.name} solutions
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </m.div>
  );
}
