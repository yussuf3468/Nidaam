import Link from 'next/link';
import { Check } from 'lucide-react';
import { Counter } from '@/components/motion/counter';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Eyebrow } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';
import { flagshipService } from '@/content/services';

const stats = [
  { value: 2, suffix: ' hrs', label: 'Response to critical issues during support hours' },
  { value: 1, suffix: ' day', label: 'Target to fix or work around a critical issue' },
  { value: 30, suffix: ' days', label: 'Written warranty after acceptance on every project' },
  { value: 12, label: 'Services included in one monthly plan' },
];

export function ManagedServices() {
  return (
    <section id="managed-services" className="ink relative isolate overflow-hidden py-16 sm:py-20 lg:py-28">

      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Managed software services</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,2.5vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.03em] text-balance">
              Launch is day one. We stay for the years after.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">{flagshipService.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`/services/${flagshipService.slug}`}>
                  Explore managed services
                  <ButtonArrow />
                </Link>
              </Button>
            </div>
          </Reveal>

          <RevealGroup as="ul" className="grid content-start gap-px self-start overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:col-span-7 xl:grid-cols-3" stagger={0.04}>
            {flagshipService.includes.map((item) => (
              <RevealItem as="li" key={item} className="flex items-center gap-3 bg-background p-5 font-semibold">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                  <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                {item}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-background p-7 sm:p-8">
              <dt className="order-2 mt-3 block text-sm leading-relaxed text-muted-foreground">{stat.label}</dt>
              <dd className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
