import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { LogoMark } from '@/components/brand/logo';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Eyebrow, Section, SectionHeading } from '@/components/sections/section';
import { Button, ButtonArrow } from '@/components/ui/button';
import { founders, mission, protections, qualityAndSecurity, vision } from '@/content/company';
import { site } from '@/content/site';
import { JsonLd } from '@/components/seo/json-ld';
import { webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

export const metadata: Metadata = pageMetadata({
  title: 'About us',
  description:
    'Nidaam Solutions is a Kenyan software company in Eastleigh, Nairobi. Meet the founders and see how we design, build and support reliable software for organisations.',
  path: '/about',
});

const values = [
  { title: 'Order', body: 'Clear scope, clear ownership, clear communication. Structure is how good software and good partnerships are built.' },
  { title: 'Craft', body: 'We care about the parts nobody sees: the data model, the error handling, the documentation.' },
  { title: 'Candour', body: 'We say what we think, including when the answer is a cheaper tool or no software at all.' },
  { title: 'Ownership', body: 'We take responsibility for outcomes, not just tasks. If it is broken, it is ours to fix.' },
  { title: 'Partnership', body: 'We plan for years, not projects. Our best measure is clients who stay.' },
  { title: 'Security by default', body: 'Protecting your data is a design requirement from the first workshop, never an afterthought.' },
];

const philosophy = [
  {
    title: 'Engineering philosophy',
    body: 'Understand the process before writing code. Choose boring, proven technology over fashionable tools. Keep systems simple enough that another competent team could maintain them. Measure the result.',
  },
  {
    title: 'Development standards',
    body: 'Every change lives in version control and is peer reviewed before it merges. Code follows agreed conventions, is tested before release and is deployed through a repeatable process, never by hand on a live server.',
  },
  {
    title: 'Quality assurance',
    body: 'We test every release against the agreed scope, then you test it. Nothing goes live without your acceptance, and every project carries a written 30-day warranty from acceptance.',
  },
  {
    title: 'Security approach',
    body: 'Encrypted connections everywhere, least-privilege access, daily backups stored separately and restore-tested, and security patches applied promptly, critical ones within two business days. Personal data is handled under Kenya’s Data Protection Act, 2019.',
  },
  {
    title: 'Long-term support',
    body: 'Software is never finished. Our managed services keep systems secure, current and improving, with written response targets and a monthly report, delivered by the people who know the system best.',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ type: 'AboutPage', name: 'About Nidaam Solutions', description: site.identity, path: '/about' })} />
      <PageHero
        crumbs={[{ name: 'About', path: '/about' }]}
        eyebrow="About Nidaam Solutions"
        title="We bring order to how organisations run."
        description="Nidaam Solutions is a Kenyan software and digital services company. We design, develop and support software, websites and apps for businesses, schools and organisations, and we stay with them long after launch."
      />

      {/* Story */}
      <Section className="border-t border-border">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Our story</Eyebrow>
            <div className="mt-8 flex items-center gap-6">
              <LogoMark className="h-24 w-auto" />
              <div>
                <p className="text-3xl font-bold tracking-tight">Nidaam</p>
                <p className="mt-1 font-mono text-sm text-muted-foreground">noun · system, order, structure</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="space-y-6 lg:col-span-7" delay={0.08}>
            <p className="text-xl leading-snug font-medium tracking-tight text-pretty sm:text-2xl">
              Our name means system and order. It describes what we build and how we work.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Nidaam Solutions was founded in Eastleigh, Nairobi, by five people who kept seeing the same thing: capable organisations
              held back by scattered spreadsheets, disconnected tools and software nobody looked after once it launched.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We set out to be the partner we would want ourselves: engineers who understand the business first, document what they
              build, price work in writing and stay accountable after go-live. Officially registered in {new Date(site.foundingDate).getFullYear()}, we
              work with businesses, schools and organisations across Kenya.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Mission & vision */}
      <Section className="pt-0!">
        <div className="container-site grid gap-4 lg:grid-cols-2">
          <Reveal className="ink rounded-3xl p-8 sm:p-12">
            <p className="eyebrow">Our mission</p>
            <p className="mt-8 text-lg leading-snug font-semibold tracking-tight text-balance sm:text-xl">{mission}</p>
          </Reveal>
          <Reveal className="rounded-3xl border border-border bg-card p-8 sm:p-12" delay={0.08}>
            <p className="eyebrow">Our vision</p>
            <p className="mt-8 text-lg leading-snug font-semibold tracking-tight text-balance sm:text-xl">{vision}</p>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-card/40">
        <div className="container-site">
          <SectionHeading eyebrow="Values" title="What we hold ourselves to." />
          <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
            {values.map((v, i) => (
              <RevealItem key={v.title} className="bg-card p-7 sm:p-9">
                <h3 className="mt-6 text-xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* How we work */}
      <Section>
        <div className="container-site">
          <SectionHeading
            eyebrow="How we work"
            title="Standards we do not negotiate."
            description="The practices behind every system we deliver, from the first line of code to years of support."
          />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
                <div className="flex items-baseline gap-4 lg:col-span-4">
                  <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground lg:col-span-8">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality + protections */}
      <Section className="ink">
        <div className="container-site">
          <SectionHeading
            eyebrow="Quality, security and client protection"
            title="Commitments, in writing."
            description="These are part of every engagement, not optional extras."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <Reveal className="rounded-3xl border border-border bg-card p-8 lg:col-span-5">
              <p className="eyebrow">Quality and security</p>
              <ul className="mt-6 space-y-4">
                {qualityAndSecurity.map((q) => (
                  <li key={q} className="flex gap-3 leading-relaxed">
                    <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>
            <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {protections.map((p) => (
                <RevealItem key={p.title} className="rounded-3xl border border-border bg-card p-7">
                  <h3 className="font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{p.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="container-site">
          <SectionHeading
            eyebrow="Founding team"
            title="The people accountable for your system."
            aside={
              <Button asChild variant="outline">
                <Link href="/careers">
                  Join us
                  <ButtonArrow />
                </Link>
              </Button>
            }
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            {founders.map((f) => (
              <RevealItem key={f.name} className="flex flex-col rounded-3xl border border-border bg-card p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-foreground font-mono text-lg font-semibold text-background">
                  {initials(f.name)}
                </span>
                <h3 className="mt-10 text-lg leading-snug font-bold tracking-tight">{f.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Founder · {f.role}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand title="Work with a team that stays." />
      <div className="h-16 lg:h-24" />
    </>
  );
}
