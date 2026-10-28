'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { m, useMotionValueEvent, useScroll } from 'motion/react';
import { NavigationMenu } from 'radix-ui';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { icons } from '@/components/icons';
import { Button, ButtonArrow } from '@/components/ui/button';
import { mainNav } from '@/content/site';
import { flagshipService, groupOrder, serviceGroups, servicesInGroup } from '@/content/services';
import { cn, isActivePath } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState('');

  // Hide on scroll down, reveal on scroll up. Never hide while a menu is open.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    if (menu) return;
    if (y > prev + 4 && y > 180) setHidden(true);
    else if (y < prev - 4 || y < 180) setHidden(false);
  });

  return (
    <m.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{ y: hidden ? '-110%' : '0%' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          'border-b transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled || menu
            ? 'border-border bg-background/75 backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent',
        )}
      >
        <div className="container-site relative flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Link href="/" className="relative z-10 shrink-0 rounded-md" aria-label="Nidaam Solutions, home">
            <Logo className="h-8 lg:h-9" />
          </Link>

          <NavigationMenu.Root
            value={menu}
            onValueChange={setMenu}
            delayDuration={60}
            className="absolute inset-x-0 top-0 hidden h-full justify-center xl:flex"
            aria-label="Main"
          >
            <NavigationMenu.List className="flex h-full items-center gap-0.5">
              {mainNav.map((item) =>
                item.href === '/services' ? (
                  <NavigationMenu.Item key={item.href} value="services">
                    <NavigationMenu.Trigger
                      className={cn(
                        'group flex h-9 cursor-pointer items-center gap-1 rounded-full px-3.5 text-sm font-medium transition-colors hover:bg-foreground/[0.05] hover:text-foreground data-[state=open]:bg-foreground/[0.05] data-[state=open]:text-foreground',
                        isActivePath(pathname, item.href) ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="w-[min(1240px,calc(100vw-4rem))]">
                      <ServicesMegaMenu onNavigate={() => setMenu('')} />
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={item.href}>
                    <NavigationMenu.Link asChild active={isActivePath(pathname, item.href)}>
                      <Link
                        href={item.href}
                        className={cn(
                          'relative flex h-9 items-center rounded-full px-3.5 text-sm font-medium transition-colors hover:bg-foreground/[0.05] hover:text-foreground',
                          isActivePath(pathname, item.href) ? 'text-foreground' : 'text-muted-foreground',
                        )}
                      >
                        {item.label}
                        {isActivePath(pathname, item.href) && (
                          <span className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand" aria-hidden />
                        )}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ),
              )}
            </NavigationMenu.List>

            <div className="absolute inset-x-0 top-full flex justify-center pt-2">
              <NavigationMenu.Viewport className="relative h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) origin-top overflow-hidden rounded-3xl border border-border bg-popover text-popover-foreground shadow-lift transition-[height] duration-300 ease-out-expo data-[state=closed]:animate-[menu-out_200ms_ease-in] data-[state=open]:animate-[menu-in_350ms_var(--ease-out-expo)]" />
            </div>
          </NavigationMenu.Root>

          <div className="relative z-10 flex items-center gap-1.5">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">
                Get started
                <ButtonArrow />
              </Link>
            </Button>
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
    </m.header>
  );
}

function ServicesMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const Flagship = icons[flagshipService.icon];
  return (
    <div className="grid grid-cols-[1fr_300px]">
      <div className="grid grid-cols-4 gap-x-6 gap-y-2 p-7">
        {groupOrder.map((group) => (
          <div key={group}>
            <p className="eyebrow mb-3 px-3">{serviceGroups[group].label}</p>
            <ul className="space-y-0.5">
              {servicesInGroup(group).map((service) => {
                const Icon = icons[service.icon];
                return (
                  <li key={service.slug}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={onNavigate}
                        className="group/item flex gap-3 rounded-xl p-3 transition-colors hover:bg-foreground/[0.04]"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground transition-colors group-hover/item:border-brand/40 group-hover/item:text-brand-ink">
                          <Icon className="size-[18px]" strokeWidth={1.6} aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm leading-tight font-semibold">{service.title}</span>
                          <span className="mt-1 line-clamp-2 block font-body text-[0.8125rem] leading-snug text-muted-foreground">
                            {service.tagline}
                          </span>
                        </span>
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="ink relative m-2 flex flex-col overflow-hidden rounded-2xl p-6">
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative">
          <span className="grid size-10 place-items-center rounded-xl bg-brand/15 text-brand">
            <Flagship className="size-5" strokeWidth={1.6} aria-hidden />
          </span>
          <p className="eyebrow mt-5">Flagship service</p>
          <p className="mt-2 text-lg leading-snug font-semibold">{flagshipService.title}</p>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{flagshipService.tagline}</p>
        </div>
        <div className="relative mt-auto space-y-2 pt-6">
          <NavigationMenu.Link asChild>
            <Link
              href={`/services/${flagshipService.slug}`}
              onClick={onNavigate}
              className="group/link flex items-center justify-between rounded-xl bg-foreground/[0.06] px-4 py-3 text-sm font-semibold transition-colors hover:bg-foreground/[0.1]"
            >
              Plans and response times
              <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden />
            </Link>
          </NavigationMenu.Link>
          <NavigationMenu.Link asChild>
            <Link
              href="/services"
              onClick={onNavigate}
              className="group/link flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              All services
              <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden />
            </Link>
          </NavigationMenu.Link>
        </div>
      </div>
    </div>
  );
}
