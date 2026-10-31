import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

/** Quiet tag for technologies and categories. */
export function Tag({ children, className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** Marks example projects, which describe our approach rather than a real client. */
export function ExampleLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border-strong px-1.5 py-0.5 text-xs font-medium text-muted-foreground',
        className,
      )}
    >
      Example project
    </span>
  );
}
