import type { Metadata } from 'next';
import Link from 'next/link';
import { LogoMark } from '@/components/brand/logo';
import { Button, ButtonArrow } from '@/components/ui/button';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } };

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center overflow-hidden pt-28 pb-20">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-6 text-[clamp(2.125rem,3.3vw,3.375rem)] leading-[1.08] font-bold tracking-[-0.035em] text-balance">This page is out of order.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            The page you are looking for has moved or never existed. Here are some places to start instead.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/">
                Back to home
                <ButtonArrow />
              </Link>
            </Button>
            {links.map((l) => (
              <Button key={l.href} asChild size="lg" variant="ghost">
                <Link href={l.href}>{l.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="hidden justify-center lg:col-span-5 lg:flex">
          <LogoMark className="h-72 w-auto rotate-180 opacity-90" />
        </div>
      </div>
    </section>
  );
}
