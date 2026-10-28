import { ServiceCard } from '../components/ServiceCard';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services } from '../content/services';

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20 pt-16 sm:pt-20">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-title"
            title="What we build"
            description="Our name means system and order. That's how we build software for businesses."
            aside={
              <>
                <span className="font-medium tabular-nums text-foreground">{services.length}</span> services
              </>
            }
          />
        </Reveal>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.title}>
              <Reveal delay={i * 60} className="h-full">
                <ServiceCard service={service} index={i + 1} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
