'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog } from 'radix-ui';
import { ChevronDown, Mail, Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { icons } from '@/components/icons';
import { Button, ButtonArrow } from '@/components/ui/button';
import { mailUrl, mainNav, site, whatsappUrl } from '@/content/site';
import { groupOrder, serviceGroups, servicesInGroup } from '@/content/services';
import { cn, isActivePath as isActive, pad2 } from '@/lib/utils';

/** Full-screen navigation for phones and tablets (below the xl breakpoint). */
export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="grid size-10 cursor-pointer place-items-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.06] xl:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm data-[state=open]:animate-[fade-in_200ms_ease-out]" />
        <Dialog.Content
          data-lenis-prevent
          className="fixed inset-0 z-[61] flex flex-col overflow-y-auto bg-background data-[state=open]:animate-[sheet-in_450ms_var(--ease-out-expo)]"
        >
          <div className="container-site flex h-16 shrink-0 items-center justify-between">
            <Link href="/" onClick={close} aria-label="Nidaam Solutions, home">
              <Logo className="h-8" />
            </Link>
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid size-10 cursor-pointer place-items-center rounded-full transition-colors hover:bg-foreground/[0.06]"
                aria-label="Close menu"
              >
                <X className="size-5" aria-hidden />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Site navigation</Dialog.Description>

          <nav className="container-site flex-1 pt-4 pb-8" aria-label="Mobile">
            <ul className="divide-y divide-border border-y border-border">
              {mainNav.map((item, i) =>
                item.href === '/services' ? (
                  <li key={item.href}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-faint">{pad2(i + 1)}</span>
                          {item.label}
                        </span>
                        <ChevronDown className="size-5 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                      </summary>
                      <div className="space-y-5 pb-6">
                        {groupOrder.map((group) => (
                          <div key={group}>
                            <p className="eyebrow mb-2">{serviceGroups[group].label}</p>
                            <ul className="grid gap-1 sm:grid-cols-2">
                              {servicesInGroup(group).map((service) => {
                                const Icon = icons[service.icon];
                                return (
                                  <li key={service.slug}>
                                    <Link
                                      href={`/services/${service.slug}`}
                                      onClick={close}
                                      className="flex items-center gap-3 rounded-xl py-2 text-[0.9375rem] font-medium"
                                    >
                                      <span className="grid size-8 place-items-center rounded-lg border border-border bg-card">
                                        <Icon className="size-4" strokeWidth={1.6} aria-hidden />
                                      </span>
                                      {service.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                        <Link href="/services" onClick={close} className="inline-flex text-sm font-semibold text-brand-ink">
                          View all services
                        </Link>
                      </div>
                    </details>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                      className={cn(
                        'flex items-baseline gap-3 py-4 text-2xl font-semibold tracking-tight',
                        isActive(pathname, item.href) ? 'text-foreground' : 'text-foreground/80',
                      )}
                    >
                      <span className="font-mono text-xs text-faint">{pad2(i + 1)}</span>
                      {item.label}
                      {isActive(pathname, item.href) && <span className="size-1.5 self-center rounded-full bg-brand" aria-hidden />}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg">
                <Link href="/contact" onClick={close}>
                  Start your project
                  <ButtonArrow />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  WhatsApp us
                </a>
              </Button>
            </div>
            <a href={mailUrl} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4" aria-hidden />
              {site.contact.email}
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
