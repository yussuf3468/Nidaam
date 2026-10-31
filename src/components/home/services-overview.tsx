import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { ServiceCard } from '@/components/services/service-card';
import { Button, ButtonArrow } from '@/components/ui/button';
import { getService, servicesInGroup } from '@/content/services';

// Bento order for four columns: the first card spans 2x2, managed services spans 2.
const layout: { slug: string; className?: string; feature?: boolean }[] = [
  { slug: 'custom-software-development', className: 'md:col-span-2 xl:row-span-2', feature: true },
  { slug: 'business-management-systems' },
  { slug: 'school-management-systems' },
  { slug: 'website-design-development' },
  { slug: 'mobile-applications' },
  { slug: 'business-automation' },
  { slug: 'ai-integration' },
  { slug: 'api-development' },
  { slug: 'cloud-solutions' },
  { slug: 'it-consulting-digital-setup' },
  { slug: 'managed-software-services', className: 'md:col-span-2' },
];

export function ServicesOverview() {
  const creative = servicesInGroup('creative');
  return (
    <Section id="services">
      <div className="container-site">
        <SectionHeading
          eyebrow="Services"
          title="We don’t sell websites. We build business systems."
          description="From the first workshop to years of managed support, one team designs, builds, integrates and runs the software your operations depend on."
          aside={
            <Button asChild variant="outline">
              <Link href="/services">
                All services
                <ButtonArrow />
              </Link>
            </Button>
          }
        />

        <RevealGroup className="mt-14 grid gap-4 xl:auto-rows-fr md:grid-cols-2 xl:grid-cols-4 xl:[grid-auto-flow:dense]">
          {layout.map(({ slug, className, feature }) => {
            const service = getService(slug)!;
            return (
              <RevealItem key={slug} className={className}>
                <ServiceCard service={service} size={feature ? 'feature' : 'default'} />
              </RevealItem>
            );
          })}
          <RevealItem>
            <div className="flex h-full flex-col rounded-3xl border border-dashed border-border-strong p-6 sm:p-7">
              <p className="eyebrow">Creative & marketing</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                Everything around the software, from the same team.
              </p>
              <ul className="mt-auto space-y-1 pt-6">
                {creative.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-lg py-1.5 text-[0.9375rem] font-semibold"
                    >
                      {service.title}
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </Section>
  );
}
