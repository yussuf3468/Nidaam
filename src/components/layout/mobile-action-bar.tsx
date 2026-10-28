'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'motion/react';
import { WhatsAppIcon } from '@/components/brand/social-icons';
import { ButtonArrow } from '@/components/ui/button';
import { whatsappUrl } from '@/content/site';

/** Floating glass bar on phones with the two most useful actions. Appears after the hero. */
export function MobileActionBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const nearBottom = window.innerHeight + y > document.documentElement.scrollHeight - 480;
    setVisible(y > 560 && !nearBottom);
  });

  if (pathname === '/contact') return null;

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
        >
          <div className="glass mx-auto flex max-w-md items-center gap-2 rounded-full p-1.5 shadow-lift">
            <Link
              href="/contact"
              className="group/button flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary text-[0.9375rem] font-semibold text-primary-foreground"
            >
              Start your project
              <ButtonArrow />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
