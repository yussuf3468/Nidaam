import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Small pill used as a section eyebrow: optional status dot, mono text. */
export function Pill({
  children,
  dot = false,
  className,
  ...props
}: ComponentProps<'span'> & { children: ReactNode; dot?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted-foreground backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 animate-pulse-soft rounded-full bg-brand" />
          <span className="relative size-1.5 rounded-full bg-brand" />
        </span>
      )}
      {children}
    </span>
  );
}

/** Quiet tag for technologies and categories. */
export function Tag({ children, className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[0.6875rem] tracking-wide text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** Marks sample content (see `site.labelSampleContent`). */
export function SampleLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-dashed border-border-strong px-1.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-faint',
        className,
      )}
      title="An illustrative example of the systems we build"
    >
      Illustrative
    </span>
  );
}
