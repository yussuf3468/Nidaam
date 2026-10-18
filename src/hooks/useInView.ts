import { useEffect, useRef, useState } from 'react';

/** Becomes true once the element scrolls into view, then stays true. */
export function useInView<T extends Element>(options: IntersectionObserverInit = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, inView };
}
