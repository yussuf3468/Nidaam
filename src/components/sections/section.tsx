import type { ComponentProps, ReactNode } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

export function Section({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section className={cn('py-16 sm:py-20 lg:py-24', className)} {...props}>
      {children}
    </section>
  );
}

/** Short label shown above a heading, in the brand colour. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-sm font-semibold text-brand-ink', className)}>{children}</p>;
}

type HeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  align?: 'split' | 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
};

const titleClass = 'mt-3 text-[clamp(1.75rem,2.5vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.03em] text-balance';

/**
 * Section heading. `split` (default) puts the title left and the description right on
 * large screens, so wide layouts stay full without stretching line lengths.
 */
export function SectionHeading({ eyebrow, title, description, aside, align = 'split', className, as: H = 'h2' }: HeadingProps) {
  if (align === 'center') {
    return (
      <Reveal className={cn('mx-auto max-w-3xl text-center', className)}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <H className={titleClass}>{title}</H>
        {description && <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground">{description}</p>}
        {aside && <div className="mt-8 flex justify-center">{aside}</div>}
      </Reveal>
    );
  }
  return (
    <Reveal className={cn('grid gap-5', align === 'split' && 'lg:grid-cols-12 lg:items-end lg:gap-10', className)}>
      <div className={cn(align === 'split' && 'lg:col-span-7')}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <H className={titleClass}>{title}</H>
      </div>
      {(description || aside) && (
        <div className={cn('space-y-6', align === 'split' && 'lg:col-span-5 lg:pb-1', align === 'split' && !description && 'lg:justify-self-end')}>
          {description && <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">{description}</p>}
          {aside}
        </div>
      )}
    </Reveal>
  );
}
