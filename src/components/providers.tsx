'use client';

import { useEffect, type ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import Lenis from 'lenis';

/** Inertial smooth scrolling on desktop; off for touch and reduced-motion users. */
function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.12, anchors: { offset: -96 } });
    return () => lenis.destroy();
  }, []);
  return null;
}

/** Feeds the cursor position to `[data-spotlight]` cards for the hover glow. */
function PointerEffects() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('[data-spotlight]') as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <SmoothScroll />
          <PointerEffects />
          {children}
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
