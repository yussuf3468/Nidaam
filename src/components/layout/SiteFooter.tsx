import type { ComponentType } from 'react';
import { Globe, Mail, MapPin } from 'lucide-react';
import { site, whatsappUrl } from '../../config/site';
import { LogoMark } from '../brand/Logo';
import { InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon } from '../brand/SocialIcons';
import { buttonStyles } from '../ui/Button';
import { Container } from '../ui/Container';

interface FooterLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const footerLinks: FooterLink[] = [
  { label: 'Website', href: site.social.website, icon: Globe },
  { label: 'LinkedIn', href: site.social.linkedin, icon: LinkedInIcon },
  { label: 'TikTok', href: site.social.tiktok, icon: TikTokIcon },
  { label: 'Instagram', href: site.social.instagram, icon: InstagramIcon },
  { label: 'WhatsApp', href: whatsappUrl, icon: WhatsAppIcon },
  { label: 'Email', href: `mailto:${site.contact.email}`, icon: Mail },
].filter((link) => link.href);

export function SiteFooter() {
  return (
    <footer id="contact" aria-label="Contact" className="scroll-mt-20 pb-[calc(env(safe-area-inset-bottom)+7rem)] md:pb-10">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <LogoMark className="h-9 rounded-[9px]" />
            <div>
              <div className="text-[15px] font-semibold tracking-tight">{site.name}</div>
              <address className="mt-0.5 flex items-start gap-1.5 text-[13px] not-italic text-muted-foreground">
                <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>
                  {site.contact.address}, {site.contact.country}
                </span>
              </address>
            </div>
          </div>

          <nav aria-label="Social and contact">
            <ul className="-mx-3 flex flex-wrap items-center gap-1 lg:mx-0">
              {footerLinks.map(({ label, href, icon: Icon }) => {
                const external = href.startsWith('http');
                return (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                      className={buttonStyles({ variant: 'ghost', size: 'toolbar' })}
                    >
                      <Icon className="size-4" />
                      {label}
                      {external && <span className="sr-only">(opens in a new tab)</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-dashed border-border pt-5 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            {site.name} © {site.copyrightYear}
          </span>
          <span>Engineered in Africa. Built for the world.</span>
        </div>
      </Container>
    </footer>
  );
}
