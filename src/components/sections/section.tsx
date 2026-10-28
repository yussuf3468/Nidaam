import type { ComponentProps, ReactNode } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

export function Section({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section className={cn('py-16 sm:py-20 lg:py-28', className)} {...props}>
      {children}
    </section>
  );
}

/** Mono label shown above a heading: "02 — Services". */
export function Eyebrow({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn('eyebrow flex items-center gap-3', className)}>
      {index && <span className="text-brand-ink">{index}</span>}
      {index && <span className="h-px w-6 bg-border-strong" aria-hidden />}
      <span>{children}</span>
    </p>
  );
}

type HeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  align?: 'split' | 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
};

/**
 * Section heading. `split` (default) puts the title left and the description right on
 * large screens, so wide layouts stay full without stretching line lengths.
 */
export function SectionHeading({ index, eyebrow, title, description, aside, align = 'split', className, as: H = 'h2' }: HeadingProps) {
  if (align === 'center') {
    return (
      <Reveal className={cn('mx-auto max-w-3xl text-center', className)}>
        <Eyebrow index={index} className="justify-center">
          {eyebrow}
        </Eyebrow>
        <H className="mt-5 text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">{title}</H>
        {description && <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">{description}</p>}
        {aside && <div className="mt-8 flex justify-center">{aside}</div>}
      </Reveal>
    );
  }
  return (
    <Reveal
      className={cn(
        'grid gap-6',
        align === 'split' && 'lg:grid-cols-12 lg:items-end lg:gap-10',
        className,
      )}
    >
      <div className={cn(align === 'split' && 'lg:col-span-7')}>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <H className="mt-5 text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">{title}</H>
      </div>
      {(description || aside) && (
        <div className={cn('space-y-6', align === 'split' && 'lg:col-span-5 lg:pb-2')}>
          {description && <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">{description}</p>}
          {aside}
        </div>
      )}
    </Reveal>
  );
}
