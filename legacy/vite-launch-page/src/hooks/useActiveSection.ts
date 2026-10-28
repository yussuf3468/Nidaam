import { useCallback, useEffect, useRef, useState } from 'react';

/** How long a tapped tab stays lit while the page smooth-scrolls to it. */
const TAP_LOCK_MS = 900;

/**
 * Tracks which section is under the top 40% of the viewport (scroll-spy).
 * `ids` must be a stable array (define it at module level).
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);
  const lockUntil = useRef(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;

      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;
      let current = ids[0];

      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        for (const id of ids) {
          const top = document.getElementById(id)?.getBoundingClientRect().top;
          if (top !== undefined && top <= window.innerHeight * 0.4) current = id;
        }
      }

      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  /** Light up a tab immediately on tap, before the scroll arrives. */
  const select = useCallback((id: string) => {
    lockUntil.current = Date.now() + TAP_LOCK_MS;
    setActive(id);
  }, []);

  return [active, select] as const;
}
