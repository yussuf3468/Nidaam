import { Section, SectionHeading } from '@/components/sections/section';
import { Reveal } from '@/components/motion/reveal';
import { industries } from '@/content/industries';
import { IndustriesExplorer } from './industries-explorer';

export function Industries() {
  return (
    <Section id="industries" className="bg-card/40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Industries"
          title="Built around how your sector actually works."
          description="Schools reconcile fees, clinics file claims, distributors prove deliveries. We bring patterns that work in each industry, then shape them to your operations."
        />
        <Reveal className="mt-14">
          <IndustriesExplorer industries={industries} />
        </Reveal>
      </div>
    </Section>
  );
}
