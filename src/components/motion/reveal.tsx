'use client';

import type { ReactNode } from 'react';
import { m, type Variants } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: '0px 0px -10% 0px' } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

const group: Variants = {
  hidden: {},
  show: (stagger: number = 0.07) => ({ transition: { staggerChildren: stagger } }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Staggers the reveal of its <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: 'div' | 'ul' | 'ol';
}) {
  const Comp = as === 'ul' ? m.ul : as === 'ol' ? m.ol : m.div;
  return (
    <Comp className={className} variants={group} custom={stagger} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}) {
  const Comp = as === 'li' ? m.li : as === 'article' ? m.article : m.div;
  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  );
}
