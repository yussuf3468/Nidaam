import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { testimonials } from '@/content/testimonials';

/** Real client testimonials. */
export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container-site">
        <SectionHeading eyebrow="What clients say" title="In our clients’ words." />
        <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {t.role}, {t.organisation}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
