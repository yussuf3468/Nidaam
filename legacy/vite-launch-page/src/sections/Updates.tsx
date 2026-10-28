import { Mail } from 'lucide-react';
import { site, whatsappUrl } from '../config/site';
import { useTheme } from '../hooks/useTheme';
import { NewsletterForm } from '../components/NewsletterForm';
import { WhatsAppIcon } from '../components/brand/SocialIcons';
import { ButtonLink } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';

/** Launch sign-up, shown as an inverse panel (dark on the light page, light on the dark page). */
export function Updates() {
  const theme = useTheme();
  const inverse = theme === 'dark' ? 'light' : 'dark';

  return (
    <section id="updates" aria-labelledby="updates-title" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className={`${inverse} rounded-2xl bg-background p-6 text-foreground sm:p-10 lg:p-14`}>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
              <div>
                <div className="text-[13px] font-medium text-muted-foreground">Launch updates</div>
                <h2
                  id="updates-title"
                  className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Something powerful is being built.
                </h2>
                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted-foreground">
                  Be the first to know when {site.shortName} opens its doors. Leave your email and we'll tell you the day
                  we launch.
                </p>
              </div>

              <div>
                <NewsletterForm />

                <div className="mt-6 border-t border-dashed border-border pt-6">
                  <p className="text-[15px] text-muted-foreground">Have a project in mind? Talk to us today.</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <ButtonLink
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="quiet"
                      size="lg"
                    >
                      <WhatsAppIcon className="size-4" />
                      WhatsApp
                      <span className="sr-only">(opens in a new tab)</span>
                    </ButtonLink>
                    <ButtonLink href={`mailto:${site.contact.email}`} variant="quiet" size="lg">
                      <Mail aria-hidden="true" />
                      Email
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
