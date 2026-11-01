'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Adds `is-visible` to `[data-reveal]` elements and `[data-reveal-group]` items as they
 * scroll into view. One observer for the whole page; re-scans after client navigation.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const show = (el: Element) => {
      if (el.hasAttribute('data-reveal-group')) {
        const stagger = parseFloat(getComputedStyle(el).getPropertyValue('--reveal-stagger')) || 0.07;
        el.querySelectorAll<HTMLElement>(':scope > [data-reveal-item]').forEach((item, i) => {
          item.style.setProperty('--reveal-delay', `${Math.min(i, 8) * stagger}s`);
          item.classList.add('is-visible');
        });
      } else el.classList.add('is-visible');
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('[data-reveal]:not(.is-visible), [data-reveal-group]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
