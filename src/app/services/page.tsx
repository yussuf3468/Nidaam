import type { Metadata } from 'next';
import Link from 'next/link';
import { Process } from '@/components/home/process';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Section, SectionHeading } from '@/components/sections/section';
import { ServiceCard } from '@/components/services/service-card';
import { Button, ButtonArrow } from '@/components/ui/button';
import { groupOrder, serviceGroups, services, servicesInGroup } from '@/content/services';
import { JsonLd } from '@/components/seo/json-ld';
import { itemListSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Nidaam Solutions builds custom software, school and business management systems, websites, mobile apps and automation in Nairobi, Kenya, then supports them with managed services.',
  path: '/services',
});

const groupIntro: Record<string, string> = {
  build: 'Systems, platforms and apps designed around how your organisation works.',
  connect: 'Workflows, AI and integrations that remove manual work between systems.',
  run: 'The foundations and long-term care that keep everything secure and current.',
  creative: 'Brand, video, content and marketing that make the work visible.',
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ type: 'CollectionPage', name: 'Nidaam Solutions services', description: metadata.description as string, path: '/services' }),
          itemListSchema('Services', services.map((s) => ({ name: s.title, path: `/services/${s.slug}` }))),
        ]}
      />
      <PageHero
        crumbs={[{ name: 'Services', path: '/services' }]}
        eyebrow={`${services.length} services · One accountable team`}
        title="Everything your systems need, from one team."
        description="We design, build, integrate and run software for organisations across Kenya, then support it for the long term. Every engagement is priced in a written quotation, and you own what we build."
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                Start your project
                <ButtonArrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services/managed-software-services">Managed services</Link>
            </Button>
          </>
        }
      />

      {groupOrder.map((group, gi) => (
        <Section key={group} id={group} className={gi % 2 === 0 ? 'border-t border-border' : 'border-t border-border bg-card/40'}>
          <div className="container-site">
            <SectionHeading index={pad2(gi + 1)} eyebrow={serviceGroups[group].label} title={serviceGroups[group].description} description={groupIntro[group]} />
            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {servicesInGroup(group).map((service) => (
                <RevealItem key={service.slug}>
                  <ServiceCard service={service} index={services.indexOf(service) + 1} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>
      ))}

      <div className="border-t border-border">
        <Process index="05" />
      </div>
      <CtaBand />
      <div className="h-16 lg:h-24" />
    </>
  );
}
