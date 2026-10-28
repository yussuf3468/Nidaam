import Link from 'next/link';
import { Check } from 'lucide-react';
import { MockScreen, ParentPhone } from '@/components/graphics/mock-screen';
import { Parallax } from '@/components/motion/parallax';
import { Eyebrow } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';

const assurances = ['Written quotation before work starts', 'You own the code', '30-day warranty'];

export function Hero() {
  return (
    <section className="overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-28 lg:pb-16">
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow className="animate-fade-up">Software company in Nairobi, Kenya</Eyebrow>
          <h1 className="mt-4 animate-fade-up text-[clamp(2.25rem,3.6vw,3.75rem)] leading-[1.06] font-bold tracking-[-0.03em] text-balance [animation-delay:80ms]">
            Building software that moves businesses forward.
          </h1>
          <p className="mt-5 max-w-lg animate-fade-up text-base leading-relaxed text-pretty text-muted-foreground [animation-delay:160ms] sm:text-[1.0625rem]">
            Nidaam Solutions designs, develops and manages secure software systems that help organisations automate operations,
            improve efficiency and scale with confidence.
          </p>
          <div className="mt-7 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Button asChild>
              <Link href="/contact">
                Start your project
                <ButtonArrow />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/case-studies">View our work</Link>
            </Button>
          </div>
          <ul className="mt-7 flex animate-fade-up flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground [animation-delay:320ms]">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="size-4 text-brand-ink" strokeWidth={2.4} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* A system we build: school fees dashboard and the parent app. */}
        <div className="animate-fade-up [animation-delay:200ms] lg:col-span-7">
          <div className="relative mx-auto max-w-[760px] pb-8 pl-[12%] sm:pb-10">
            <MockScreen variant="school" />
            <Parallax offset={16} className="absolute bottom-0 left-0 w-[27%] min-w-[118px]">
              <ParentPhone />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
