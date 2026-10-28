'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'motion/react';

type CounterProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

function formatNumber(n: number, decimals: number, prefix: string, suffix: string) {
  const num = n.toLocaleString('en-KE', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return `${prefix}${num}${suffix}`;
}

/**
 * Counts up to `value` when scrolled into view. The final number is rendered on the
 * server, so it is correct without JavaScript and for search engines; the count-up only
 * runs for counters that start below the fold.
 */
export function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    const write = (n: number) => {
      el.textContent = formatNumber(n, decimals, prefix, suffix);
    };
    write(0);
    let stop: (() => void) | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const controls = animate(0, value, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: write });
        stop = () => controls.stop();
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop?.();
      write(value);
    };
  }, [value, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {formatNumber(value, decimals, prefix, suffix)}
    </span>
  );
}
