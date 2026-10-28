import { icons } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { reasons } from '@/content/company';
import { pad2 } from '@/lib/utils';

export function WhyNidaam() {
  return (
    <Section id="why-nidaam">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Why Nidaam"
          title="Engineers, not freelancers."
          description="Nidaam means system and order. It is how we run every engagement: written scope, disciplined engineering, honest communication and support that continues long after launch."
        />
        <RevealGroup className="mt-14 grid overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4" stagger={0.05}>
          {reasons.map((reason, i) => {
            const Icon = icons[reason.icon];
            return (
              <RevealItem key={reason.title} className="group bg-card p-7 transition-colors duration-500 hover:bg-background sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-foreground transition-colors duration-300 group-hover:text-brand-ink" strokeWidth={1.4} aria-hidden />
                  <span className="font-mono text-xs text-faint">{pad2(i + 1)}</span>
                </div>
                <h3 className="mt-12 text-lg font-bold tracking-tight">{reason.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{reason.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
