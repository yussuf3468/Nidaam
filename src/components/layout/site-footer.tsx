import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { Logo, LogoMark } from '@/components/brand/logo';
import { InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon } from '@/components/brand/social-icons';
import { fullAddress, legalNav, mailUrl, site, telUrl, whatsappUrl } from '@/content/site';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import { NairobiClock } from './nairobi-clock';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="eyebrow mb-4">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[0.9375rem] text-foreground/80 transition-colors hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const socials = [
    { label: 'Instagram', href: site.social.instagram, Icon: InstagramIcon },
    { label: 'TikTok', href: site.social.tiktok, Icon: TikTokIcon },
    { label: 'LinkedIn', href: site.social.linkedin, Icon: LinkedInIcon },
    { label: 'WhatsApp', href: whatsappUrl, Icon: WhatsAppIcon },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="container-site grid gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-4">
          <Logo className="h-10" />
          <p className="mt-6 max-w-sm text-lg leading-snug font-semibold tracking-tight">{site.slogan}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.identity}</p>
          <ul className="mt-8 space-y-3 text-[0.9375rem] text-muted-foreground">
            <li>
              <a href={mailUrl} className="inline-flex items-center gap-3 transition-colors hover:text-foreground">
                <Mail className="size-4 shrink-0" aria-hidden />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={telUrl} className="inline-flex items-center gap-3 transition-colors hover:text-foreground">
                <Phone className="size-4 shrink-0" aria-hidden />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <address className="not-italic">{fullAddress}</address>
            </li>
          </ul>
          <ul className="mt-8 flex gap-2" aria-label="Social media">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Nidaam Solutions on ${label}`}
                  className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8" aria-label="Footer">
          <FooterColumn
            title="Services"
            links={[
              ...services.filter((s) => s.group !== 'creative').slice(0, 7).map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
              { label: 'All services', href: '/services' },
            ]}
          />
          <FooterColumn
            title="Solutions"
            links={[
              ...industries.slice(0, 7).map((i) => ({ label: i.name, href: `/solutions/${i.slug}` })),
              { label: 'All industries', href: '/solutions' },
            ]}
          />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalNav} />
        </nav>
      </div>

      <div className="container-site" aria-hidden>
        <div className="flex items-end gap-[2vw] border-t border-border pt-10 text-foreground/[0.055]">
          <LogoMark mono className="h-[10.2vw] max-h-44 w-auto" />
          <span className="text-[13vw] leading-[0.78] font-bold tracking-[-0.06em] select-none 2xl:text-[12rem]">Nidaam</span>
        </div>
      </div>

      <div className="container-site flex flex-col gap-4 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved. Registered in Kenya.
        </p>
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs uppercase tracking-wider">
            Nairobi <NairobiClock />
          </span>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            Back to top
            <ArrowUp className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
