import type { CSSProperties, ReactNode } from 'react';

/*
 * Scroll reveals in plain CSS (see `[data-reveal]` in globals.css). These are server
 * components: one small observer (<RevealObserver>) adds `is-visible` as elements enter
 * the viewport, so dozens of reveals cost almost no JavaScript. Without JavaScript,
 * content is simply shown.
 */

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds. */
  delay?: number;
};

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div data-reveal="" className={className} style={delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined}>
      {children}
    </div>
  );
}

/** Staggers the reveal of its <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.07,
  as: Comp = 'div',
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: 'div' | 'ul' | 'ol';
}) {
  return (
    <Comp data-reveal-group="" className={className} style={{ '--reveal-stagger': `${stagger}s` } as CSSProperties}>
      {children}
    </Comp>
  );
}

export function RevealItem({ children, className, as: Comp = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'li' | 'article' }) {
  return (
    <Comp data-reveal-item="" className={className}>
      {children}
    </Comp>
  );
}
