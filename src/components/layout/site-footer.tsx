import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon } from '@/components/brand/social-icons';
import { fullAddress, legalNav, mailUrl, site, telUrl, whatsappUrl } from '@/content/site';
import { getService } from '@/content/services';
import { CookieSettingsButton } from './cookie-banner';
import { NairobiClock } from './nairobi-clock';

const serviceLinks = [
  'custom-software-development',
  'school-management-systems',
  'business-management-systems',
  'website-design-development',
  'mobile-applications',
  'managed-software-services',
].map((slug) => ({ label: getService(slug)!.title, href: `/services/${slug}` }));

const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
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
    <footer className="border-t border-border">
      <div className="container-site grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-5">
          <Logo className="h-9" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.identity}</p>
          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
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
          <ul className="mt-6 flex gap-2" aria-label="Social media">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Nidaam Solutions on ${label}`}
                  className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7" aria-label="Footer">
          <FooterColumn title="Services" links={[...serviceLinks, { label: 'All services', href: '/services' }]} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalNav} />
        </nav>
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Registered in Kenya.
        </p>
        <div className="flex items-center gap-6">
          <CookieSettingsButton />
          <p>
            Nairobi <NairobiClock />
          </p>
        </div>
      </div>
    </footer>
  );
}
