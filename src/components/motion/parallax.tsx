'use client';

import { useRef, type ReactNode } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * Moves its content slower than the page as it scrolls through the viewport.
 * Reduced-motion users get no movement (CSS override, so server and client markup match).
 */
export function Parallax({ children, offset = 48, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <m.div ref={ref} className={cn('motion-reduce:transform-none!', className)} style={{ y }}>
      {children}
    </m.div>
  );
}
