import { Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { Reveal } from '@/components/motion/reveal';
import { JsonLd } from '@/components/seo/json-ld';
import { Accordion, type AccordionEntry } from '@/components/ui/accordion';
import { mailUrl, site, whatsappUrl } from '@/content/site';
import { faqSchema } from '@/lib/schema';
import { Eyebrow, Section } from './section';

export function FaqSection({ items, title = 'Questions, answered plainly.' }: { items: AccordionEntry[]; title?: string }) {
  return (
    <Section id="faq">
      <JsonLd data={faqSchema(items)} />
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,2.5vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.03em] text-balance">{title}</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Something we have not covered? Ask us directly. A person reads every message.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm font-semibold">
              <a href={mailUrl} className="inline-flex items-center gap-2 hover:text-brand-ink">
                <Mail className="size-4" aria-hidden />
                {site.contact.email}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand-ink">
                <WhatsAppIcon className="size-4" />
                {site.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </Section>
  );
}
