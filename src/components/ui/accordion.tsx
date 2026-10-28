'use client';

import { Accordion as A } from 'radix-ui';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AccordionEntry = { question: string; answer: string };

/** FAQ-style accordion. Answers are plain text; blank lines start new paragraphs. */
export function Accordion({ items, className }: { items: AccordionEntry[]; className?: string }) {
  return (
    <A.Root type="single" collapsible className={cn('divide-y divide-border border-y border-border', className)}>
      {items.map((item, i) => (
        <A.Item key={item.question} value={`item-${i}`} className="group/item">
          <A.Header asChild>
            <h3>
              <A.Trigger className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left text-lg font-semibold tracking-tight transition-colors hover:text-foreground/80 sm:text-xl">
                <span>{item.question}</span>
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-border bg-card transition-[transform,background-color,color] duration-300 ease-out-expo group-data-[state=open]/item:rotate-45 group-data-[state=open]/item:bg-primary group-data-[state=open]/item:text-primary-foreground">
                  <Plus className="size-4" aria-hidden />
                </span>
              </A.Trigger>
            </h3>
          </A.Header>
          <A.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_300ms_var(--ease-out-expo)] data-[state=open]:animate-[accordion-down_400ms_var(--ease-out-expo)]">
            <div className="max-w-3xl space-y-3 pb-7 pr-14 text-muted-foreground">
              {item.answer.split('\n\n').map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </A.Content>
        </A.Item>
      ))}
    </A.Root>
  );
}
