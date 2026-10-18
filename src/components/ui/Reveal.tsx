import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/cn';

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before the element fades in. */
  delay?: number;
  className?: string;
}

/** Fades and lifts its content in once it enters the viewport. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-visible={inView}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
