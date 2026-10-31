'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { Button } from '@/components/ui/button';
import { OPEN_SETTINGS_EVENT, openCookieSettings, readConsent, saveConsent } from '@/lib/consent';

/**
 * Cookie notice. Reject and Accept have equal weight, nothing is pre-selected, and
 * visitors whose browser sends Global Privacy Control are treated as having rejected.
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl;
    // Deciding after mount avoids a server/client mismatch; the banner is never server-rendered.
    const timer = window.setTimeout(() => {
      if (!readConsent() && !gpc) setOpen(true);
    }, 600);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
    };
  }, []);

  const choose = (analytics: boolean) => {
    saveConsent(analytics);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <m.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[70] rounded-2xl border border-border bg-popover p-5 text-popover-foreground shadow-lift sm:right-auto sm:bottom-5 sm:left-5 sm:max-w-md"
        >
          <p id="cookie-title" className="font-semibold">
            Cookies and privacy
          </p>
          <p id="cookie-text" className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We only use essential storage, such as remembering light or dark mode. We do not use advertising cookies. Optional analytics stay
            off unless you accept.{' '}
            <Link href="/cookies" className="font-medium text-foreground underline underline-offset-4">
              Cookie policy
            </Link>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="secondary" size="sm" onClick={() => choose(false)}>
              Reject optional
            </Button>
            <Button variant="secondary" size="sm" onClick={() => choose(true)}>
              Accept optional
            </Button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

/** Footer link that reopens the cookie choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className ?? 'cursor-pointer underline-offset-4 transition-colors hover:text-foreground hover:underline'}
    >
      Cookie settings
    </button>
  );
}
