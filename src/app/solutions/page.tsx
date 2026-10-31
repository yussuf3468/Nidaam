import type { Metadata } from 'next';
import Link from 'next/link';
import { FeaturedSolutions } from '@/components/home/featured-solutions';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Section, SectionHeading } from '@/components/sections/section';
import { IndustryCard } from '@/components/solutions/industry-card';
import { Button, ButtonArrow } from '@/components/ui/button';
import { industries } from '@/content/industries';
import { JsonLd } from '@/components/seo/json-ld';
import { itemListSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Solutions',
  description:
    'Nidaam Solutions builds software for schools, clinics, retailers, logistics firms, tour operators, hotels, NGOs and SMEs across Kenya. Find the solutions for your industry.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ type: 'CollectionPage', name: 'Software solutions by industry', description: metadata.description as string, path: '/solutions' }),
          itemListSchema('Industries', industries.map((i) => ({ name: i.name, path: `/solutions/${i.slug}` }))),
        ]}
      />
      <PageHero
        crumbs={[{ name: 'Solutions', path: '/solutions' }]}
        eyebrow={`${industries.length} industries`}
        title="Solutions shaped by how your industry works."
        description="Every sector has its own rhythm: school terms, insurance claims, delivery routes, tour seasons. We learn how your industry works and shape the system around your organisation."
        actions={
          <Button asChild size="lg">
            <Link href="/contact">
              Talk to us about your sector
              <ButtonArrow />
            </Link>
          </Button>
        }
      />

      <Section className="border-t border-border">
        <div className="container-site">
          <SectionHeading eyebrow="Industries" title="Find your sector." description="Each page explains the problems we see most often, what we build, and the services involved." />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" stagger={0.05}>
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IndustryCard industry={industry} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <div className="border-t border-border bg-card/40">
        <FeaturedSolutions showLink={false} />
      </div>
      <div className="pt-16 lg:pt-24">
        <CtaBand />
      </div>
      <div className="h-12 lg:h-16" />
    </>
  );
}
