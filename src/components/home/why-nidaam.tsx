import { icons } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { reasons } from '@/content/company';

export function WhyNidaam() {
  return (
    <Section id="why-nidaam">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Nidaam"
          title="Engineers, not freelancers."
          description="Nidaam means system and order. It is how we run every engagement: written scope, disciplined engineering, honest communication and support that continues long after launch."
        />
        <RevealGroup className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-4" stagger={0.05}>
          {reasons.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <RevealItem key={reason.title} className="border-t border-border-strong pt-6">
                <Icon className="size-6 text-brand-ink" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 text-lg font-bold tracking-tight">{reason.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{reason.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
