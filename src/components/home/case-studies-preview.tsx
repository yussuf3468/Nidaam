import Link from 'next/link';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { ProjectCard } from '@/components/projects/project-card';
import { Section, SectionHeading } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';
import { projects } from '@/content/projects';

/** Selected real projects on the home page. */
export function CaseStudiesPreview() {
  return (
    <Section id="work" className="bg-card/40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems our team has built and launched."
          description="Platforms and websites for businesses, schools and organisations, several of them live today."
          aside={
            <Button asChild variant="outline">
              <Link href="/case-studies">
                All projects
                <ButtonArrow />
              </Link>
            </Button>
          }
        />
        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
