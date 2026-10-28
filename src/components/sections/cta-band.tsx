import Link from 'next/link';
import { Mail } from 'lucide-react';
import { LogoMark } from '@/components/brand/logo';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { Magnetic } from '@/components/motion/magnetic';
import { Reveal } from '@/components/motion/reveal';
import { Button, ButtonArrow } from '@/components/ui/button';
import { mailUrl, site, whatsappUrl } from '@/content/site';

type CtaBandProps = {
  title?: string;
  description?: string;
};

/** Closing call to action, shown at the end of most pages. */
export function CtaBand({
  title = 'Tell us what is slowing your business down.',
  description = 'Share a few details about your organisation and the problem you want solved. We will come back with next steps, and a written quotation once we understand the requirements.',
}: CtaBandProps) {
  return (
    <section className="container-site py-6 lg:py-10">
      <Reveal>
        <div className="ink relative isolate overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-28">
          <div className="bg-blueprint pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden />
          <div
            className="pointer-events-none absolute -top-40 -right-40 -z-10 size-144 rounded-full bg-brand/20 blur-[120px]"
            aria-hidden
          />
          <LogoMark className="pointer-events-none absolute -right-10 -bottom-16 -z-10 h-88 w-auto opacity-[0.07] sm:h-112" />

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                Start a project
              </p>
              <h2 className="mt-6 text-4xl leading-[1.02] font-bold tracking-[-0.04em] text-balance sm:text-5xl lg:text-7xl">{title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Magnetic>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start your project
                    <ButtonArrow />
                  </Link>
                </Button>
              </Magnetic>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground lg:justify-end">
                <a href={mailUrl} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                  <Mail className="size-4" aria-hidden />
                  {site.contact.email}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
