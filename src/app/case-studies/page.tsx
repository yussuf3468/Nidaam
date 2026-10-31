import type { Metadata } from 'next';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { SampleNotice } from '@/components/case-studies/sample-notice';
import { Testimonials } from '@/components/home/testimonials';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { ProjectCard } from '@/components/projects/project-card';
import { JsonLd } from '@/components/seo/json-ld';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Section, SectionHeading } from '@/components/sections/section';
import { caseStudies } from '@/content/case-studies';
import { projects } from '@/content/projects';
import { itemListSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description:
    'Projects by the Nidaam Solutions team: a car hire platform, the Islii Barista School, Anchor Point Initiative, the Mayo doctor booking platform and fleet management for Gam Oil Trading.',
  path: '/case-studies',
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ type: 'CollectionPage', name: 'Projects by Nidaam Solutions', description: metadata.description as string, path: '/case-studies' }),
          itemListSchema('Projects', projects.map((p) => ({ name: p.name, path: '/case-studies' }))),
        ]}
      />
      <PageHero
        crumbs={[{ name: 'Projects', path: '/case-studies' }]}
        eyebrow="Our work"
        title="Systems our team has built and launched."
        description="Platforms and websites for businesses, schools and organisations. Where a project is live, you can open it and look for yourself."
      />

      <Section className="border-t border-border pt-12! lg:pt-14!">
        <div className="container-site">
          <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} priority={i < 3} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <div className="border-t border-border">
        <Testimonials />
      </div>

      <Section className="border-t border-border bg-card/40">
        <div className="container-site">
          <SectionHeading
            eyebrow="Example projects"
            title="How we would approach other industries."
            description="Examples of systems we are set up to build, showing the problem, our approach and how success would be measured."
          />
          <div className="mt-6">
            <SampleNotice />
          </div>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand title="Have a project in mind?" />
      <div className="h-12 lg:h-16" />
    </>
  );
}
