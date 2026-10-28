import Link from 'next/link';
import { Check } from 'lucide-react';
import { HeroSystem } from '@/components/graphics/hero-system';
import { Magnetic } from '@/components/motion/magnetic';
import { Parallax } from '@/components/motion/parallax';
import { Pill } from '@/components/ui/badge';
import { Button, ButtonArrow } from '@/components/ui/button';

const assurances = ['Written quotation before work starts', 'You own the code', '30-day warranty, then managed support'];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="bg-blueprint pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute top-[-20%] right-[-10%] -z-10 size-[60vw] max-h-225 max-w-225 rounded-full bg-brand/9 blur-[140px] motion-safe:animate-[drift_18s_ease-in-out_infinite_alternate]"
        aria-hidden
      />

      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="animate-fade-up">
            <Pill dot>Software engineering · Nairobi, Kenya</Pill>
          </div>
          <h1 className="mt-8 animate-fade-up text-[clamp(2.9rem,5.7vw,7.25rem)] leading-[0.94] font-bold tracking-[-0.055em] text-balance [animation-delay:80ms]">
            Building software that moves businesses forward<span className="text-brand">.</span>
          </h1>
          <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-pretty text-muted-foreground [animation-delay:160ms] sm:text-xl">
            Nidaam Solutions designs, develops and manages secure software systems that help organisations automate operations,
            improve efficiency and scale with confidence.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Magnetic>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start your project
                  <ButtonArrow />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="secondary">
              <Link href="/case-studies">View our work</Link>
            </Button>
          </div>
          <ul className="mt-12 flex animate-fade-up flex-col gap-3 text-sm text-muted-foreground [animation-delay:320ms] sm:flex-row sm:flex-wrap sm:gap-x-8">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-brand/12 text-brand-ink">
                  <Check className="size-3" strokeWidth={2.5} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5">
          <Parallax offset={36}>
            <div className="mx-auto max-w-160">
              <HeroSystem />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
