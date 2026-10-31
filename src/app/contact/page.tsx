import type { Metadata } from 'next';
import { Clock, CreditCard, Mail, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { MapCard } from '@/components/contact/map-card';
import { Breadcrumbs } from '@/components/sections/page-hero';
import { Eyebrow } from '@/components/sections/section';
import { mailUrl, site, telUrl, whatsappUrl } from '@/content/site';
import { JsonLd } from '@/components/seo/json-ld';
import { webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { pad2 } from '@/lib/utils';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Call Nidaam Solutions on +254 722 261 776, WhatsApp us or email info@nidaam.co.ke to request a quotation or a discovery call. Eastleigh, Nairobi, Kenya.',
  path: '/contact',
});

const channels = [
  { label: 'Email', value: site.contact.email, href: mailUrl, Icon: Mail },
  { label: 'Phone', value: site.contact.phoneDisplay, href: telUrl, Icon: Phone },
  { label: 'WhatsApp', value: 'Chat with us', href: whatsappUrl, Icon: WhatsAppIcon, external: true },
];

const nextSteps = [
  { title: 'We review your enquiry', body: 'A member of the team reads it and, if helpful, arranges a discovery call.' },
  { title: 'We understand the requirements', body: 'Workshops or a call to learn how your organisation works and what success looks like.' },
  { title: 'You receive a written quotation', body: 'Scope, milestones and price in writing, valid for 30 days, in KES or USD.' },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pb-20">
      <JsonLd
        data={webPageSchema({
          type: 'ContactPage',
          name: 'Contact Nidaam Solutions',
          description: `Contact Nidaam Solutions in ${site.contact.locality}, ${site.contact.city}: ${site.contact.email}, ${site.contact.phoneDisplay}.`,
          path: '/contact',
        })}
      />
      <div className="container-site">
        <div className="animate-fade-up">
          <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-10 lg:col-span-5">
            <div className="animate-fade-up [animation-delay:60ms]">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-6 text-[clamp(2.125rem,3.3vw,3.375rem)] leading-[1.08] font-bold tracking-[-0.035em] text-balance">
                Let’s build something that lasts.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Tell us about your organisation and what you want to achieve. Prefer to talk? Call, email or WhatsApp us directly.
              </p>
            </div>

            <ul className="grid animate-fade-up gap-3 [animation-delay:140ms] sm:grid-cols-3 lg:grid-cols-1 2xl:grid-cols-3">
              {channels.map(({ label, value, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-border-strong sm:flex-col sm:items-start lg:flex-row lg:items-center 2xl:flex-col 2xl:items-start"
                  >
                    <Icon className="size-5 shrink-0 text-brand-ink" aria-hidden />
                    <span>
                      <span className="eyebrow block">{label}</span>
                      <span className="mt-1 block font-semibold wrap-break-word">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="animate-fade-up [animation-delay:200ms]">
              <MapCard />
            </div>

            <dl className="grid animate-fade-up gap-4 rounded-3xl border border-border bg-card p-6 text-sm [animation-delay:240ms] sm:grid-cols-2">
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                <div>
                  <dt className="eyebrow">Office hours</dt>
                  <dd className="mt-1 font-semibold">{site.contact.hours}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <CreditCard className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                <div>
                  <dt className="eyebrow">Pricing & payment</dt>
                  <dd className="mt-1 font-semibold">
                    Quoted in {site.pricesIn}. {site.payment}.
                  </dd>
                </div>
              </div>
            </dl>

            <div className="animate-fade-up [animation-delay:280ms]">
              <p className="eyebrow">What happens next</p>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-card font-mono text-xs">{pad2(i + 1)}</span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">{s.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:160ms] lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
