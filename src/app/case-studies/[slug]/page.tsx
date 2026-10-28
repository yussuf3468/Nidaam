import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, ImageIcon, Minus } from 'lucide-react';
import { SampleNotice } from '@/components/case-studies/sample-notice';
import { MockScreen } from '@/components/graphics/mock-screen';
import { Counter } from '@/components/motion/counter';
import { Parallax } from '@/components/motion/parallax';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { Breadcrumbs } from '@/components/sections/page-hero';
import { Eyebrow, Section } from '@/components/sections/section';
import { SampleLabel } from '@/components/ui/badge';
import { caseStudies, getCaseStudy } from '@/content/case-studies';
import { getIndustry } from '@/content/industries';
import { getService } from '@/content/services';
import { site } from '@/content/site';
import { testimonials } from '@/content/testimonials';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({ title: study.title, description: study.summary, path: `/case-studies/${study.slug}`, type: 'article' });
}

/** Parses "16 weeks" / "3 weeks" into a number for the timeline bar. */
const weeks = (s: string) => Number.parseInt(s, 10) || 1;

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const industry = getIndustry(study.industry);
  const quote = testimonials.find((t) => t.caseStudy === study.slug);
  const total = study.phases.reduce((sum, p) => sum + weeks(p.duration), 0);
  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="bg-blueprint pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="container-site">
          <div className="animate-fade-up">
            <Breadcrumbs
              items={[
                { name: 'Case Studies', path: '/case-studies' },
                { name: industry?.name ?? 'Case study', path: `/case-studies/${study.slug}` },
              ]}
            />
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:60ms]">
                <Eyebrow>{industry?.name}</Eyebrow>
                {site.labelSampleContent && <SampleLabel />}
              </div>
              <h1 className="mt-6 animate-fade-up text-4xl leading-[1.02] font-bold tracking-[-0.045em] text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl">
                {study.title}
              </h1>
              <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:200ms] sm:text-xl">
                {study.summary}
              </p>
            </div>
            <dl className="grid animate-fade-up grid-cols-2 gap-x-6 gap-y-5 rounded-3xl border border-border bg-card p-6 text-sm [animation-delay:260ms] lg:col-span-4">
              <div className="col-span-2">
                <dt className="eyebrow">Client</dt>
                <dd className="mt-1 font-semibold">{study.client}</dd>
              </div>
              <div>
                <dt className="eyebrow">Timeline</dt>
                <dd className="mt-1 font-semibold">{study.timeline}</dd>
              </div>
              <div>
                <dt className="eyebrow">Industry</dt>
                <dd className="mt-1 font-semibold">{industry?.name}</dd>
              </div>
              <div className="col-span-2">
                <dt className="eyebrow">Services</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  {study.services.map((s) => {
                    const service = getService(s);
                    return service ? (
                      <Link key={s} href={`/services/${s}`} className="font-semibold text-brand-ink underline-offset-4 hover:underline">
                        {service.title}
                      </Link>
                    ) : null;
                  })}
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 animate-fade-up [animation-delay:300ms]">
            <SampleNotice />
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-border bg-card/60 px-4 pt-10 sm:px-12 sm:pt-14 lg:mt-20 lg:px-24 lg:pt-20">
            <div className="bg-dots absolute inset-0" aria-hidden />
            <Parallax offset={24} className="relative mx-auto max-w-5xl">
              <MockScreen variant={study.visual} />
            </Parallax>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="pb-0!">
        <div className="container-site">
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="flex flex-col bg-card p-7 sm:p-9">
                <dt className="order-2 mt-3 text-sm leading-relaxed text-muted-foreground">{m.label}</dt>
                <dd className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
                  <Counter value={m.value} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Challenge / solution / outcome */}
      <Section>
        <div className="container-site space-y-4">
          {[
            { label: 'The challenge', block: study.challenge, Icon: Minus, tone: 'text-faint' },
            { label: 'The solution', block: study.solution, Icon: Check, tone: 'text-brand-ink' },
          ].map(({ label, block, Icon, tone }, i) => (
            <Reveal key={label} className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <Eyebrow index={pad2(i + 1)}>{label}</Eyebrow>
              </div>
              <div className="lg:col-span-8">
                <p className="text-2xl leading-snug font-medium tracking-tight text-pretty sm:text-3xl">{block.intro}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {block.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <Icon className={`mt-1 size-4 shrink-0 ${tone}`} strokeWidth={2.2} aria-hidden />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal className="ink grid gap-8 rounded-3xl p-8 sm:p-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Eyebrow index="03">The outcome</Eyebrow>
            </div>
            <p className="text-2xl leading-snug font-medium tracking-tight text-pretty sm:text-3xl lg:col-span-8">{study.outcome}</p>
          </Reveal>
        </div>
      </Section>

      {/* Timeline, technology, team */}
      <Section className="border-t border-border bg-card/40">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow index="04">Timeline · {study.timeline}</Eyebrow>
            <div className="mt-8 flex h-3 overflow-hidden rounded-full bg-border" aria-hidden>
              {study.phases.map((p, i) => (
                <span
                  key={p.name}
                  className={i % 2 ? 'bg-brand/45' : 'bg-brand'}
                  style={{ width: `${(weeks(p.duration) / total) * 100}%` }}
                />
              ))}
            </div>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {study.phases.map((p, i) => (
                <li key={p.name} className="flex items-center justify-between gap-6 py-4">
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-faint">{pad2(i + 1)}</span>
                    <span className="font-semibold">{p.name}</span>
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">{p.duration}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="space-y-4 lg:col-span-5" delay={0.08}>
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="eyebrow">Technology</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {study.technology.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3.5 py-1.5 text-sm font-semibold">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7">
              <p className="eyebrow">Team</p>
              <p className="mt-3 leading-relaxed">{study.team}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Screenshot placeholders */}
      <Section>
        <div className="container-site">
          <Eyebrow index="05">Screens</Eyebrow>
          <RevealGroup className="mt-8 grid gap-4 md:grid-cols-3">
            {['Dashboard', 'Mobile app', 'Reports'].map((label) => (
              <RevealItem
                key={label}
                className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border-strong bg-card/50 text-center"
              >
                <ImageIcon className="size-6 text-faint" strokeWidth={1.5} aria-hidden />
                <span className="font-semibold">{label}</span>
                <span className="font-mono text-xs text-muted-foreground">Screenshot placeholder</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {quote && (
        <Section className="pt-0!">
          <div className="container-site">
            <Reveal>
              <figure className="mx-auto max-w-4xl text-center">
                <blockquote className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">“{quote.quote}”</blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center justify-center gap-3 text-muted-foreground">
                  <span>
                    <span className="font-semibold text-foreground">{quote.role}</span>, {quote.organisation}
                  </span>
                  {site.labelSampleContent && <SampleLabel />}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Section>
      )}

      <Section className="border-t border-border py-12! lg:py-16!">
        <div className="container-site">
          <Link href={`/case-studies/${next.slug}`} className="group flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <span>
              <span className="eyebrow">Next case study</span>
              <span className="mt-3 block max-w-3xl text-3xl leading-tight font-bold tracking-tight text-balance transition-colors group-hover:text-brand-ink sm:text-4xl">
                {next.title}
              </span>
            </span>
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
              <ArrowRight className="size-5" aria-hidden />
            </span>
          </Link>
        </div>
      </Section>

      <CtaBand />
      <div className="h-16 lg:h-24" />
    </>
  );
}
