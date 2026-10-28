import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { CaseStudyCard } from '@/components/case-studies/case-study-card';
import { icons } from '@/components/icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { JsonLd } from '@/components/seo/json-ld';
import { CtaBand } from '@/components/sections/cta-band';
import { FaqSection } from '@/components/sections/faq-section';
import { PageHero } from '@/components/sections/page-hero';
import { Eyebrow, Section, SectionHeading } from '@/components/sections/section';
import { ResponseTargets } from '@/components/services/response-targets';
import { ServiceCard } from '@/components/services/service-card';
import { Tag } from '@/components/ui/badge';
import { Button, ButtonArrow } from '@/components/ui/button';
import { getCaseStudy, type CaseStudy } from '@/content/case-studies';
import { protections, subscriptions } from '@/content/company';
import { commonFaqs, getService, serviceGroups, services } from '@/content/services';
import { whatsappUrl } from '@/content/site';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} in Kenya`,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = icons[service.icon];
  const related = service.relatedCaseStudies.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));
  const siblings = services.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 3);
  const isManaged = service.slug === 'managed-software-services';

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        crumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        eyebrow={`${serviceGroups[service.group].label} · ${service.pricing}`}
        title={service.headline}
        description={service.summary}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                Discuss your project
                <ButtonArrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" />
                WhatsApp us
              </a>
            </Button>
          </>
        }
        aside={
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand/12 text-brand-ink">
                <Icon className="size-6" strokeWidth={1.5} aria-hidden />
              </span>
              <div>
                <p className="font-bold tracking-tight">{service.title}</p>
                <p className="font-mono text-xs text-muted-foreground">{service.pricing}</p>
              </div>
            </div>
            <p className="eyebrow mt-8 mb-4">{service.slug.includes('managed') ? 'Included' : 'Services include'}</p>
            <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9375rem]">
                  <Check className="mt-1 size-3.5 shrink-0 text-brand-ink" strokeWidth={2.5} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Overview */}
      <Section className="border-t border-border">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Overview</Eyebrow>
            <div className="mt-6 space-y-6">
              {service.overview.map((p, i) => (
                <p key={p.slice(0, 20)} className={i === 0 ? 'text-xl leading-snug font-medium tracking-tight text-pretty sm:text-2xl' : 'text-base leading-relaxed text-muted-foreground'}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
              <p className="eyebrow">What you receive</p>
              <ol className="mt-6 space-y-4">
                {service.deliverables.map((d, i) => (
                  <li key={d} className="flex gap-4">
                    <span className="font-mono text-xs leading-6 text-brand-ink">{pad2(i + 1)}</span>
                    <span className="font-semibold">{d}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-card/40">
        <div className="container-site">
          <SectionHeading eyebrow="Capabilities" title="What we deliver." />
          <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {service.features.map((f, i) => (
              <RevealItem key={f.title} className="bg-card p-7 sm:p-8">
                <h3 className="mt-8 text-xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="container-site">
          <SectionHeading eyebrow="Benefits" title="What changes for your organisation." />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {service.benefits.map((b) => (
              <RevealItem key={b.title} className="rounded-3xl border border-border bg-card p-7">
                <span className="grid size-9 place-items-center rounded-full bg-brand/12 text-brand-ink">
                  <Check className="size-4" strokeWidth={2.5} aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-bold tracking-tight">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {isManaged && (
        <Section className="ink">
          <div className="container-site">
            <SectionHeading
              eyebrow="Service level agreement"
              title="Written response times. Monthly reports."
              description="Clients on a managed services plan get support with these response targets. Every month you receive a report of what was done, what we found and what we recommend."
            />
            <Reveal className="mt-12">
              <ResponseTargets />
            </Reveal>
            <Reveal className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                <h3 className="text-lg font-bold tracking-tight">Subscriptions</h3>
                <p className="mt-2 text-muted-foreground">Take the full managed service, or subscribe to individual services. All are invoiced monthly in advance.</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {subscriptions.map((s) => (
                    <li key={s}>
                      <Tag className="px-3 py-1 text-xs">{s}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                <h3 className="text-lg font-bold tracking-tight">How we protect you</h3>
                <ul className="mt-4 space-y-3">
                  {protections.slice(0, 4).map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
                      <span>
                        <strong className="font-semibold">{p.title}.</strong> <span className="text-muted-foreground">{p.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Stack */}
      <Section className="border-b border-border py-14! lg:py-16!">
        <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16">
          <p className="eyebrow shrink-0 lg:w-60">{service.group === 'creative' ? 'Tools we use' : 'Technology we use'}</p>
          <ul className="flex flex-wrap gap-2">
            {service.stack.map((t) => (
              <li key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <div className="container-site">
            <SectionHeading eyebrow="Related work" title="Systems like this in practice." />
            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {related.map((study) => (
                <RevealItem key={study.slug}>
                  <CaseStudyCard study={study} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>
      )}

      <FaqSection items={[...service.faqs, commonFaqs.warranty]} title={`${service.title}: common questions.`} />

      {siblings.length > 0 && (
        <Section className="border-t border-border bg-card/40">
          <div className="container-site">
            <SectionHeading eyebrow={`More in ${serviceGroups[service.group].label}`} title="Related services." />
            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siblings.map((s) => (
                <RevealItem key={s.slug}>
                  <ServiceCard service={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>
      )}

      <div className="pt-16 lg:pt-24">
        <CtaBand title={`Ready to talk about ${service.title}?`} />
      </div>
      <div className="h-16 lg:h-24" />
    </>
  );
}
