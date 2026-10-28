import type { Metadata } from 'next';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { PageHero } from '@/components/sections/page-hero';
import { Eyebrow, Section, SectionHeading } from '@/components/sections/section';
import { Button } from '@/components/ui/button';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

export const metadata: Metadata = pageMetadata({
  title: 'Careers',
  description:
    'Careers at Nidaam Solutions in Nairobi, Kenya: our culture, how we hire, what we offer, and future roles for engineers, designers and creatives.',
  path: '/careers',
});

const careersMail = `mailto:${site.contact.email}?subject=${encodeURIComponent('Careers: expression of interest')}`;

const culture = [
  { title: 'Craft over speed', body: 'We would rather ship something solid a day later than something fragile today. Code review, tests and documentation are part of the job, not extras.' },
  { title: 'Ownership', body: 'Everyone owns outcomes. You will talk to clients, understand their operations and see the results of your work in the real world.' },
  { title: 'Candour and kindness', body: 'We give direct feedback, ask questions early and assume good intent. Nobody is above review, including the founders.' },
  { title: 'Learning every week', body: 'Technology moves fast. We share what we learn, review each other’s work and make time to get better.' },
];

const offer = [
  'Real responsibility on systems that organisations depend on',
  'Mentorship and code review from experienced engineers',
  'Time to learn, and a team that shares what it knows',
  'Modern tools and a disciplined engineering process',
  'Hybrid working from our Nairobi base',
  'Fair pay, discussed openly at offer stage',
];

const steps = [
  { title: 'Introduction', body: 'A short conversation about you, your work and what you are looking for.' },
  { title: 'Technical conversation', body: 'We talk through work you have done and how you approach problems. No trick questions.' },
  { title: 'Practical exercise', body: 'A small, realistic task scoped to a few hours, followed by a review together.' },
  { title: 'Meet the team', body: 'Meet the people you would work with and ask us anything.' },
  { title: 'Offer', body: 'A clear written offer. We aim to give you an answer quickly at every stage.' },
];

const roles = [
  { title: 'Full-stack engineers', detail: 'React, Next.js, Node.js, PostgreSQL' },
  { title: 'Backend engineers', detail: 'Java, Spring Boot, APIs, integrations' },
  { title: 'Mobile engineers', detail: 'Flutter for Android and iOS' },
  { title: 'Product designers', detail: 'UI/UX for web and mobile' },
  { title: 'Quality assurance', detail: 'Testing and release quality' },
  { title: 'Creative and marketing', detail: 'Design, video, content and digital marketing' },
  { title: 'Industrial attachment', detail: 'For students in computing and design' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Careers', path: '/careers' }]}
        eyebrow="Careers"
        title="Build systems that organisations depend on."
        description="We are a small team in Nairobi with high standards and a long view. If you care about doing the work properly, and about the people who rely on it, we would like to hear from you."
        actions={
          <Button asChild size="lg">
            <a href={careersMail}>
              <Mail className="size-4" aria-hidden />
              Register your interest
            </a>
          </Button>
        }
      />

      <Section className="border-t border-border">
        <div className="container-site">
          <SectionHeading index="01" eyebrow="Culture" title="How we work together." />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {culture.map((c, i) => (
              <RevealItem key={c.title} className="rounded-3xl border border-border bg-card p-7">
                <span className="font-mono text-xs text-brand-ink">{pad2(i + 1)}</span>
                <h3 className="mt-8 text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{c.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section className="bg-card/40">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="02">What we offer</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-balance sm:text-5xl">Work you can be proud of.</h2>
          </Reveal>
          <RevealGroup as="ul" className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {offer.map((o) => (
              <RevealItem as="li" key={o} className="flex items-start gap-3 bg-card p-6 font-semibold">
                <span className="mt-2 size-1.5 shrink-0 rounded-xs bg-brand" aria-hidden />
                {o}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section>
        <div className="container-site">
          <SectionHeading index="03" eyebrow="Hiring process" title="Five steps, no surprises." description="Respectful of your time, clear about where you stand, and the same for every candidate." />
          <RevealGroup as="ol" className="mt-12 grid gap-4 md:grid-cols-5">
            {steps.map((s, i) => (
              <RevealItem as="li" key={s.title} className="relative rounded-3xl border border-border bg-card p-6">
                <span className="text-4xl font-bold tracking-tight text-foreground/15">{pad2(i + 1)}</span>
                <h3 className="mt-6 font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section className="ink">
        <div className="container-site">
          <SectionHeading
            index="04"
            eyebrow="Future opportunities"
            title="No open roles right now. We are always glad to meet good people."
            description="As we grow, these are the roles we expect to hire for. Register your interest and we will contact you when a position opens."
          />
          <RevealGroup as="ul" className="mt-12 divide-y divide-border border-y border-border">
            {roles.map((r) => (
              <RevealItem as="li" key={r.title}>
                <a href={careersMail} className="group flex items-center justify-between gap-6 py-6">
                  <span>
                    <span className="block text-xl font-bold tracking-tight sm:text-2xl">{r.title}</span>
                    <span className="mt-1 block font-mono text-xs text-muted-foreground">{r.detail}</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                    <span className="hidden sm:inline">Register interest</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Send your CV and a short note about the work you are proudest of to{' '}
            <a href={careersMail} className="font-semibold text-foreground underline underline-offset-4">
              {site.contact.email}
            </a>
            . We read every application.
          </p>
        </div>
      </Section>
    </>
  );
}
