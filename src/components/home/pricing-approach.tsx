import Link from 'next/link';
import { Check } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';
import { engagementModels, paymentTerms, priceFactors } from '@/content/company';
import { pad2 } from '@/lib/utils';

export function PricingApproach({ index = '10' }: { index?: string }) {
  return (
    <Section id="pricing" className="bg-card/40">
      <div className="container-site">
        <SectionHeading
          index={index}
          eyebrow="Pricing approach"
          title="Clear prices, agreed in writing."
          description="Every project is priced in a written quotation after we understand the requirements. No hourly surprises, no hidden licences, and changes are priced and approved before they are built."
        />

        <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3">
          {engagementModels.map((model, i) => (
            <RevealItem key={model.title}>
              <div className={i === 2 ? 'ink flex h-full flex-col rounded-3xl p-8' : 'flex h-full flex-col rounded-3xl border border-border bg-card p-8'}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{pad2(i + 1)}</span>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.6875rem] tracking-wider text-muted-foreground uppercase">
                    {model.label}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-bold tracking-tight">{model.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{model.body}</p>
                <div className="min-h-8 flex-1" aria-hidden />
                <ul className="space-y-2.5 border-t border-border pt-6">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.9375rem]">
                      <Check className="mt-1 size-3.5 shrink-0 text-brand-ink" strokeWidth={2.5} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold tracking-tight">What shapes the price</h3>
            <ul className="mt-5 space-y-3">
              {priceFactors.map((f) => (
                <li key={f} className="flex gap-3 text-[0.9375rem] text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-brand" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold tracking-tight">Payment terms</h3>
            <ul className="mt-5 space-y-3">
              {paymentTerms.map((t) => (
                <li key={t} className="flex gap-3 text-[0.9375rem] text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-brand" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button asChild variant="outline">
                <Link href="/contact">
                  Request a quotation
                  <ButtonArrow />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
