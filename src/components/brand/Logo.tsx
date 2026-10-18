import { cn } from '../../lib/cn';

interface LogoMarkProps {
  /** Set the height (and a matching corner radius); width follows the 56:32 badge. */
  className?: string;
}

/**
 * NSC badge: the lettermark from /public/logo.svg on a black rounded badge.
 * Swap /public/logo-mark.svg to change it everywhere.
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <img
      src="/logo-mark.svg"
      alt=""
      width={56}
      height={32}
      decoding="async"
      className={cn('w-auto shrink-0 dark:ring-1 dark:ring-white/15', className ?? 'h-7 rounded-[7px]')}
    />
  );
}
