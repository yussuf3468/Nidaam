import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Minus } from 'lucide-react';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { icons } from '@/components/icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Eyebrow, Section, SectionHeading } from '@/components/sections/section';
import { ServiceCard } from '@/components/services/service-card';
import { IndustryCard } from '@/components/solutions/industry-card';
import { Tag } from '@/components/ui/badge';
import { Button, ButtonArrow } from '@/components/ui/button';
import { getCaseStudy } from '@/content/case-studies';
import { getIndustry, industries } from '@/content/industries';
import { getService, services, type Service } from '@/content/services';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: `Software for ${industry.name} in Kenya`,
    description: industry.summary,
    path: `/solutions/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const Icon = icons[industry.icon];
  const relatedServices = industry.relatedServices.map(getService).filter((s): s is Service => Boolean(s));
  const study = industry.caseStudy ? getCaseStudy(industry.caseStudy) : undefined;
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Solutions', path: '/solutions' },
          { name: industry.name, path: `/solutions/${industry.slug}` },
        ]}
        eyebrow={`Industry · ${industry.name}`}
        title={industry.headline}
        description={industry.summary}
        actions={
          <Button asChild size="lg">
            <Link href="/contact">
              Discuss your organisation
              <ButtonArrow />
            </Link>
          </Button>
        }
        aside={
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
            <span className="grid size-12 place-items-center rounded-2xl bg-brand/12 text-brand-ink">
              <Icon className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            <p className="eyebrow mt-8 mb-4">Typical modules</p>
            <ul className="flex flex-wrap gap-1.5">
              {industry.modules.map((mod) => (
                <li key={mod}>
                  <Tag className="px-2.5 py-1 text-xs">{mod}</Tag>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Section className="border-t border-border">
        <div className="container-site grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <Eyebrow index="01">The problem today</Eyebrow>
            <ul className="mt-8 space-y-5">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-4 text-lg leading-relaxed">
                  <Minus className="mt-1.5 size-4 shrink-0 text-faint" aria-hidden />
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="ink rounded-3xl p-8 sm:p-10" delay={0.08}>
            <Eyebrow index="02">What we build</Eyebrow>
            <ul className="mt-8 space-y-6">
              {industry.builds.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <Check className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                  <span>
                    <span className="block text-lg font-semibold">{b.title}</span>
                    <span className="mt-1 block leading-relaxed text-muted-foreground">{b.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-card/40">
        <div className="container-site">
          <SectionHeading index="03" eyebrow="Services involved" title={`How we deliver for ${industry.name.toLowerCase()}.`} />
          <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((s) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} index={services.indexOf(s) + 1} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {study && (
        <Section>
          <div className="container-site grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow index="04">Example engagement</Eyebrow>
              <h2 className="mt-5 text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-balance sm:text-5xl">{study.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.08}>
              <CaseStudyCard study={study} />
            </Reveal>
          </div>
        </Section>
      )}

      <Section className="border-t border-border">
        <div className="container-site">
          <SectionHeading eyebrow="Other industries" title="We also build for." />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {others.map((other) => (
              <RevealItem key={other.slug}>
                <IndustryCard industry={other} index={industries.indexOf(other) + 1} />
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            {pad2(industries.length)} industries ·{' '}
            <Link href="/solutions" className="text-brand-ink underline-offset-4 hover:underline">
              view all
            </Link>
          </p>
        </div>
      </Section>

      <CtaBand title={`Let’s build for your ${industry.name === 'Small & Medium Businesses' ? 'business' : 'organisation'}.`} />
      <div className="h-16 lg:h-24" />
    </>
  );
}
