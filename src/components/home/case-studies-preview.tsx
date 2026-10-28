import Link from 'next/link';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';
import { featuredCaseStudies } from '@/content/case-studies';

export function CaseStudiesPreview() {
  return (
    <Section id="work" className="bg-card/40">
      <div className="container-site">
        <SectionHeading
          index="05"
          eyebrow="Case studies"
          title="Measured in outcomes, not features."
          description="Every engagement starts with a business problem and ends with a number that moved: hours saved, errors removed, money reconciled."
          aside={
            <Button asChild variant="outline">
              <Link href="/case-studies">
                All case studies
                <ButtonArrow />
              </Link>
            </Button>
          }
        />
        <RevealGroup className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredCaseStudies.map((study) => (
            <RevealItem key={study.slug}>
              <CaseStudyCard study={study} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
