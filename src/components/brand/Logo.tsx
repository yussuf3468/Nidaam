import { site } from '../../config/site';
import { cn } from '../../lib/cn';

interface LogoMarkProps {
  /** Sets the height; the width follows the mark's proportions. */
  className?: string;
}

/** The Nidaam petal mark from /public/logo.svg. Swap that file to change it everywhere. */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <img
      src="/logo.svg"
      alt=""
      width={586}
      height={502}
      decoding="async"
      className={cn('w-auto shrink-0', className ?? 'h-7')}
    />
  );
}

const [firstWord, ...otherWords] = site.name.split(' ');

/** The company name split for the two-line wordmark: "Nidaam" / "Solutions". */
export const wordmark = { first: firstWord, rest: otherWords.join(' ') };

interface LogoProps {
  className?: string;
  markClassName?: string;
}

/**
 * Mark plus the stacked wordmark ("Nidaam" over "Solutions"). The words are
 * real text, so they follow the theme: dark on light pages, white in dark mode.
 */
export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col">
        <span className="text-[15px] font-bold leading-[1.1] tracking-tight text-foreground">{wordmark.first}</span>
        <span className="text-[13px] font-medium leading-[1.1] text-muted-foreground">{wordmark.rest}</span>
      </span>
    </span>
  );
}
