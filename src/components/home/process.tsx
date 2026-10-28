'use client';

import { useEffect, useRef, useState } from 'react';
import { m, useScroll, useSpring } from 'motion/react';
import { icons } from '@/components/icons';
import { Eyebrow } from '@/components/sections/section';
import { processSteps } from '@/content/company';
import { cn, pad2 } from '@/lib/utils';

/**
 * Delivery process: the heading and current step stay pinned on the left while the
 * steps scroll past on the right, with a progress rail that fills as you read.
 */
export function Process({ index = '06' }: { index?: string }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>('[data-step]');
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(Number(entry.target.getAttribute('data-step')));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index={index}>Development process</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
              Eight steps. No surprises.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Every project follows the same disciplined path, from the first workshop to long-term support. You approve
              each stage before the next begins.
            </p>
            <div className="mt-12 hidden items-end gap-5 lg:flex" aria-hidden>
              <span className="text-[7rem] leading-[0.8] font-bold tracking-[-0.06em] text-foreground tabular-nums">
                {pad2(active + 1)}
              </span>
              <span className="pb-2">
                <span className="block font-mono text-xs text-muted-foreground">/ {pad2(processSteps.length)}</span>
                <span className="mt-1 block text-lg font-semibold">{processSteps[active].title}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="absolute top-2 bottom-2 left-[1.375rem] w-px bg-border" aria-hidden />
          <m.div
            className="absolute top-2 bottom-2 left-[1.375rem] w-px origin-top bg-brand"
            style={{ scaleY: progress }}
            aria-hidden
          />
          <ol ref={listRef} className="space-y-4">
            {processSteps.map((step, i) => {
              const Icon = icons[step.icon];
              const on = i <= active;
              return (
                <li key={step.title} data-step={i} className="relative pl-16">
                  <span
                    className={cn(
                      'absolute top-6 left-0 grid size-11 place-items-center rounded-full border bg-background transition-colors duration-500',
                      on ? 'border-brand text-brand-ink' : 'border-border text-muted-foreground',
                    )}
                  >
                    <Icon className="size-[18px]" strokeWidth={1.6} aria-hidden />
                  </span>
                  <div
                    className={cn(
                      'rounded-3xl border p-6 transition-[background-color,border-color,box-shadow] duration-500 sm:p-8',
                      i === active ? 'border-border-strong bg-card shadow-soft' : 'border-border bg-card/50',
                    )}
                  >
                    <p className="font-mono text-xs text-muted-foreground">Step {pad2(i + 1)}</p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 font-semibold text-foreground/80">{step.body}</p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
