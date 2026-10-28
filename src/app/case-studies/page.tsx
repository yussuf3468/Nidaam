import type { Metadata } from 'next';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { SampleNotice } from '@/components/case-studies/sample-notice';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Section } from '@/components/sections/section';
import { caseStudies } from '@/content/case-studies';
import { JsonLd } from '@/components/seo/json-ld';
import { webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Case studies',
  description:
    'How Nidaam Solutions approaches school platforms, retail operations, logistics, healthcare, travel booking and NGO field data systems: challenge, solution and outcome.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({ type: 'CollectionPage', name: 'Nidaam Solutions case studies', description: metadata.description as string, path: '/case-studies' })}
      />
      <PageHero
        crumbs={[{ name: 'Case Studies', path: '/case-studies' }]}
        eyebrow="Our work"
        title="Problems solved, in numbers."
        description="Each engagement starts with a specific operational problem and ends with a measurable change. Here is how we approach them: the challenge, the system we build, the outcome and the technology behind it."
      >
        <div className="mt-10 animate-fade-up [animation-delay:320ms]">
          <SampleNotice />
        </div>
      </PageHero>

      <Section className="border-t border-border pt-12! lg:pt-16!">
        <div className="container-site">
          <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand title="Have a problem like these?" />
      <div className="h-16 lg:h-24" />
    </>
  );
}
