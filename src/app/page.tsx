import { BuiltFor } from '@/components/home/built-for';
import { CaseStudiesPreview } from '@/components/home/case-studies-preview';
import { FeaturedSolutions } from '@/components/home/featured-solutions';
import { Hero } from '@/components/home/hero';
import { Industries } from '@/components/home/industries';
import { ManagedServices } from '@/components/home/managed-services';
import { PricingApproach } from '@/components/home/pricing-approach';
import { Process } from '@/components/home/process';
import { ServicesOverview } from '@/components/home/services-overview';
import { TechStack } from '@/components/home/tech-stack';
import { Testimonials } from '@/components/home/testimonials';
import { WhyNidaam } from '@/components/home/why-nidaam';
import { CtaBand } from '@/components/sections/cta-band';
import { FaqSection } from '@/components/sections/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { homeFaqs } from '@/content/company';
import { site } from '@/content/site';
import { webPageSchema, websiteSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      {/* WebSite data on the home page tells Google the site name to show in results. */}
      <JsonLd data={[websiteSchema(), webPageSchema({ name: site.name, description: site.description, path: '/' })]} />
      <Hero />
      <BuiltFor />
      <ServicesOverview />
      <Industries />
      <WhyNidaam />
      <FeaturedSolutions />
      <CaseStudiesPreview />
      <Process />
      <TechStack />
      <ManagedServices />
      <Testimonials />
      <PricingApproach />
      <FaqSection items={homeFaqs} index="11" />
      <CtaBand />
      <div className="h-16 lg:h-24" />
    </>
  );
}
