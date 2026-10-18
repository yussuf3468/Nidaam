import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { site } from '../../config/site';
import { setTheme, useTheme } from '../../hooks/useTheme';
import { LogoMark } from '../brand/Logo';
import { Button, ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

const kenyaTime = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Africa/Nairobi',
});

/** Live clock in East Africa Time, refreshed on the minute. */
function KenyaClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(() => {
        setNow(new Date());
        schedule();
      }, 60_000 - (Date.now() % 60_000));
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <span className="hidden items-baseline gap-1.5 text-base font-medium tabular-nums lg:inline-flex">
      <span className="text-[13px] text-muted-foreground">{site.contact.country}</span>
      <time dateTime={now.toISOString()}>{kenyaTime.format(now)}</time>
    </span>
  );
}

export function SiteHeader() {
  const theme = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#home"
          aria-label={`${site.name}, back to top`}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-black/5 pl-1 pr-3 outline-none transition-colors hover:bg-black/8 focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-white/10 dark:hover:bg-white/15"
        >
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">
            {site.shortName}
            <span className="hidden font-medium text-muted-foreground sm:inline"> Software Company</span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <KenyaClock />
          <span aria-hidden="true" className="mx-2 hidden h-4 w-px bg-border lg:block" />
          <Button variant="ghost" size="icon" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`}>
            {theme === 'dark' ? (
              <Sun className="size-4.5" aria-hidden="true" />
            ) : (
              <Moon className="size-4.5" aria-hidden="true" />
            )}
          </Button>
          <div className="ml-1 hidden sm:block">
            <ButtonLink href="#updates" size="lg">
              Get notified
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
