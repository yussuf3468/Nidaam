import Link from 'next/link';
import type { ReactNode } from 'react';
import { Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { legalNav, mailUrl, site, whatsappUrl } from '@/content/site';
import { cn, formatDate } from '@/lib/utils';
import { Breadcrumbs } from './page-hero';
import { Eyebrow } from './section';

function ContactCard({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-2xl border border-border bg-card p-5', className)}>
      <p className="font-semibold">Questions about this page?</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Write to us and a person will reply.</p>
      <div className="mt-4 space-y-2 text-sm font-medium">
        <a href={mailUrl} className="flex items-center gap-2 hover:text-brand-ink">
          <Mail className="size-4 shrink-0" aria-hidden />
          {site.contact.email}
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-ink">
          <WhatsAppIcon className="size-4 shrink-0" />
          {site.contact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

/**
 * Legal pages: a full-width layout with the legal menu on the left, the text at a
 * comfortable reading width in the middle and a contact card on the right.
 */
export function LegalPage({ title, path, updated, intro, children }: { title: string; path: string; updated: string; intro: string; children: ReactNode }) {
  return (
    <article className="pt-24 pb-16 sm:pt-28">
      <div className="container-site">
        <Breadcrumbs items={[{ name: title, path }]} />
        <header className="mt-8 border-b border-border pb-8">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 text-[clamp(2rem,3vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em]">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="space-y-6 lg:sticky lg:top-24">
              <nav aria-label="Legal">
                <p className="eyebrow mb-3">Legal</p>
                <ul className="space-y-1 border-l border-border">
                  {legalNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={item.href === path ? 'page' : undefined}
                        className={cn(
                          '-ml-px block border-l py-1.5 pl-4 text-sm transition-colors',
                          item.href === path ? 'border-brand font-semibold text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ContactCard className="xl:hidden" />
            </div>
          </aside>

          <div className="prose-nidaam min-w-0 lg:col-span-9 xl:col-span-6">{children}</div>

          <aside className="hidden xl:col-span-3 xl:block">
            <ContactCard className="sticky top-24" />
          </aside>
        </div>
      </div>
    </article>
  );
}
