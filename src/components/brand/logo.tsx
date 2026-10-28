import { cn } from '@/lib/utils';
import { MARK_PATH, WORDMARK, WORDMARK_PATH } from './logo-paths';

/** Brand blue from the supplied logo. */
export const BRAND_BLUE = '#00AEFF';

/** The geometric "n" mark on its own. `mono` draws it in the current text colour. */
export function LogoMark({ className, title, mono = false }: { className?: string; title?: string; mono?: boolean }) {
  return (
    <svg
      viewBox="0 0 131 131"
      className={cn('shrink-0', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path d={MARK_PATH} fill={mono ? 'currentColor' : BRAND_BLUE} />
    </svg>
  );
}

// Mark scaled to the wordmark's height, then a gap, then the wordmark.
const GAP = 26;
const LOCKUP_W = WORDMARK.height + GAP + WORDMARK.width;
const MARK_SCALE = WORDMARK.height / 131;

/**
 * Full "Nidaam Solutions" lockup. The wordmark uses `currentColor`, so it follows
 * the theme (near-black on light, white on dark) while the mark stays blue.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${LOCKUP_W} ${WORDMARK.height}`}
      className={cn('h-9 w-auto', className)}
      role="img"
      aria-label="Nidaam Solutions"
    >
      <path d={MARK_PATH} fill={BRAND_BLUE} transform={`scale(${MARK_SCALE})`} />
      <path d={WORDMARK_PATH} fill="currentColor" transform={`translate(${WORDMARK.height + GAP} 0)`} />
    </svg>
  );
}
