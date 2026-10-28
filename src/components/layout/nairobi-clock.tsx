'use client';

import { useSyncExternalStore } from 'react';

const formatter = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Nairobi' });

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

/** Current time in Nairobi. Renders a placeholder on the server to avoid a hydration mismatch. */
export function NairobiClock({ className }: { className?: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => '--:--',
  );
  return (
    <span className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      <time suppressHydrationWarning>{time}</time> EAT
    </span>
  );
}
