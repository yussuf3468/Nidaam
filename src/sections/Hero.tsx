import { ArrowDown } from 'lucide-react';
import { site } from '../config/site';
import { LaunchTicket } from '../components/LaunchTicket';
import { StatusPill, statusColors } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-20 pt-8 sm:pt-12 lg:pt-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <StatusPill color={statusColors.waiting} pulse>
              Coming soon
            </StatusPill>
          </Reveal>

          <Reveal delay={60}>
            <h1
              id="hero-title"
              className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl xl:text-[4.25rem] 2xl:text-[5rem]"
            >
              Building the future of software.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground 2xl:max-w-2xl 2xl:text-xl">
              {site.description}
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-8">
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <ButtonLink href="#updates" size="xl">
                Get notified
              </ButtonLink>
              <ButtonLink href="#services" size="xl" variant="outline">
                See what we build
                <ArrowDown aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <LaunchTicket />
        </Reveal>
      </Container>
    </section>
  );
}
