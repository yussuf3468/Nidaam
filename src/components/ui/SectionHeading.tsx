import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  /** Right-hand slot, e.g. a count ("4 services"). */
  aside?: ReactNode;
  className?: string;
}

/** Page-anatomy heading: title, one muted line under it, optional count on the right. */
export function SectionHeading({ id, title, description, aside, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-x-6 gap-y-3', className)}>
      <div className="min-w-0">
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {description && <p className="mt-2 max-w-3xl text-[15px] text-muted-foreground">{description}</p>}
      </div>
      {aside && <div className="text-sm text-muted-foreground">{aside}</div>}
    </div>
  );
}
