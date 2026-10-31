import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, Gauge, Minus } from 'lucide-react';
import { SampleNotice } from '@/components/case-studies/sample-notice';
import { MockScreen } from '@/components/graphics/mock-screen';
import { Reveal } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { Breadcrumbs } from '@/components/sections/page-hero';
import { Eyebrow, Section } from '@/components/sections/section';
import { ExampleLabel } from '@/components/ui/badge';
import { caseStudies, getCaseStudy } from '@/content/case-studies';
import { getIndustry } from '@/content/industries';
import { getService } from '@/content/services';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({ title: study.title, description: study.summary, path: `/case-studies/${study.slug}` });
}

/** Parses "3 weeks" into a number for the timeline bar. */
const weeks = (s: string) => Number.parseInt(s, 10) || 1;

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const industry = getIndustry(study.industry);
  const total = study.phases.reduce((sum, p) => sum + weeks(p.duration), 0);
  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <>
      <section className="pt-24 sm:pt-28">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { name: 'Projects', path: '/case-studies' },
              { name: industry?.name ?? 'Project', path: `/case-studies/${study.slug}` },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>{industry?.name}</Eyebrow>
                <ExampleLabel />
              </div>
              <h1 className="mt-3 text-[clamp(2rem,3vw,3.125rem)] leading-[1.1] font-bold tracking-[-0.03em] text-balance">{study.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{study.summary}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-border bg-card p-6 text-sm lg:col-span-4">
              <div className="col-span-2">
                <dt className="eyebrow">Written for</dt>
                <dd className="mt-1 font-semibold">{study.client}</dd>
              </div>
              <div>
                <dt className="eyebrow">Typical timeline</dt>
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
          <div className="mt-6">
            <SampleNotice />
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/60 px-4 pt-8 sm:px-10 sm:pt-12 lg:px-20 lg:pt-14">
            <MockScreen variant={study.visual} className="mx-auto max-w-5xl" />
          </div>
        </div>
      </section>

      {/* Challenge, solution, intent */}
      <Section>
        <div className="container-site space-y-4">
          {[
            { label: 'The challenge', block: study.challenge, Icon: Minus, tone: 'text-faint' },
            { label: 'Our approach', block: study.solution, Icon: Check, tone: 'text-brand-ink' },
          ].map(({ label, block, Icon, tone }) => (
            <Reveal key={label} className="grid gap-6 rounded-2xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <Eyebrow>{label}</Eyebrow>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg leading-snug font-medium tracking-tight text-pretty sm:text-xl">{block.intro}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
          <Reveal className="ink grid gap-6 rounded-2xl p-7 sm:p-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-brand">What it is designed to do</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-snug font-medium tracking-tight text-pretty sm:text-xl">{study.designedTo}</p>
              <p className="mt-6 text-sm font-semibold">How we would measure success with you</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {study.measures.map((m) => (
                  <li key={m} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <Gauge className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Timeline, technology, team */}
      <Section className="border-t border-border bg-card/40">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Typical timeline: {study.timeline.toLowerCase()}</Eyebrow>
            <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-border" aria-hidden>
              {study.phases.map((p, i) => (
                <span key={p.name} className={i % 2 ? 'bg-brand/45' : 'bg-brand'} style={{ width: `${(weeks(p.duration) / total) * 100}%` }} />
              ))}
            </div>
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {study.phases.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-6 py-4">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.duration}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="space-y-4 lg:col-span-5" delay={0.08}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow">Technology</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.technology.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow">Typical team</p>
              <p className="mt-2 leading-relaxed">{study.team}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border py-12! lg:py-14!">
        <div className="container-site">
          <Link href={`/case-studies/${next.slug}`} className="group flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <span>
              <span className="eyebrow">Next example project</span>
              <span className="mt-2 block max-w-3xl text-2xl leading-tight font-bold tracking-tight text-balance transition-colors group-hover:text-brand-ink">
                {next.title}
              </span>
            </span>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
              <ArrowRight className="size-5" aria-hidden />
            </span>
          </Link>
        </div>
      </Section>

      <CtaBand />
      <div className="h-12 lg:h-16" />
    </>
  );
}
