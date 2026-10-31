import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { MockScreen } from '@/components/graphics/mock-screen';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';
import { solutions } from '@/content/solutions';

export function FeaturedSolutions({ showLink = true }: { showLink?: boolean }) {
  return (
    <Section id="solutions">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured solutions"
          title="Proven foundations, shaped to your operations."
          description="We build on reusable foundations such as sign-in, roles, payments and reports, so your budget goes into what makes your organisation different."
          aside={
            showLink && (
              <Button asChild variant="outline">
                <Link href="/solutions">
                  Solutions by industry
                  <ButtonArrow />
                </Link>
              </Button>
            )
          }
        />
        <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-2">
          {solutions.map((solution) => (
            <RevealItem key={solution.title}>
              <Link
                href={solution.href}
                data-spotlight
                className="spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[box-shadow,border-color] duration-500 hover:border-border-strong hover:shadow-lift"
              >
                {/* Fixed-height picture area, so every card's text starts at the same line. */}
                <div className="bg-dots relative h-56 overflow-hidden border-b border-border bg-background/60 px-6 pt-8 sm:h-72 sm:px-10 sm:pt-10 xl:h-80">
                  <div className="translate-y-2 transition-transform duration-700 ease-out-expo group-hover:translate-y-0">
                    <MockScreen variant={solution.visual} className="mx-auto max-w-155" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow">{solution.forIndustries.join(' · ')}</p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{solution.title}</h3>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{solution.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Check className="size-3.5 text-brand-ink" strokeWidth={2.5} aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
