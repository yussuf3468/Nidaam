import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { SampleLabel } from '@/components/ui/badge';
import { site } from '@/content/site';
import { testimonials } from '@/content/testimonials';

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container-site">
        <SectionHeading
          eyebrow="Client testimonials"
          title="What partnership feels like."
          description="We measure ourselves by whether clients would hire us again, and whether the systems we built are still running well years later."
        />
        <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealItem key={t.role + t.organisation}>
              <figure
                className={
                  i === 0
                    ? 'ink flex h-full flex-col rounded-3xl p-8 sm:p-10'
                    : 'flex h-full flex-col rounded-3xl border border-border bg-card p-8 sm:p-10'
                }
              >
                <svg viewBox="0 0 32 24" className="h-6 w-8 text-brand" fill="currentColor" aria-hidden>
                  <path d="M0 24V14.4C0 6.4 4.3 1.6 12 0l1.6 3.2C9.1 4.5 6.9 7.2 6.6 11.2H12V24H0Zm19.2 0V14.4c0-8 4.3-12.8 12-14.4l.8 3.2c-4.5 1.3-6.7 4-7 8H31V24H19.2Z" />
                </svg>
                <blockquote className="mt-8 flex-1 text-lg leading-snug font-semibold tracking-tight text-balance sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-6">
                  <span>
                    <span className="block font-semibold">{t.role}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{t.organisation}</span>
                  </span>
                  {site.labelSampleContent && <SampleLabel />}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
