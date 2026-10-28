import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { technologies } from '@/content/company';

export function TechStack() {
  return (
    <Section id="technology" className="bg-card/40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Technology stack"
          title="Proven tools, chosen for the long run."
          description="We build on mainstream, well-supported technologies with large talent pools, so your system is never hostage to an obscure framework or a single developer."
        />
        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6" stagger={0.05}>
          {technologies.map((group) => (
            <RevealItem key={group.group} className="bg-card p-6 sm:p-7">
              <p className="eyebrow">{group.group}</p>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                    <span className="size-1.5 rounded-[2px] bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
