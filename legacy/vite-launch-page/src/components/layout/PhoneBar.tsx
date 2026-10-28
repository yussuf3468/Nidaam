import type { ComponentType } from 'react';
import { Bell, House, LayoutGrid, Mail } from 'lucide-react';
import { whatsappUrl } from '../../config/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { WhatsAppIcon } from '../brand/SocialIcons';

interface Tab {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

const tabs: Tab[] = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'services', label: 'Services', icon: LayoutGrid },
  { id: 'updates', label: 'Updates', icon: Bell },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const sectionIds = tabs.map((tab) => tab.id);

/**
 * Phone-only floating glass bottom bar: section tabs with a sliding active pill,
 * plus a round glass WhatsApp button. Hidden from md up.
 */
export function PhoneBar() {
  const [active, select] = useActiveSection(sectionIds);
  const activeIndex = Math.max(0, sectionIds.indexOf(active));

  return (
    <div className="md:hidden">
      {/* The bottom of the screen fades into a blur behind the bar. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-32 bg-linear-to-t from-background via-background/60 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,#000_45%,transparent)]"
      />

      <div className="fixed inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-40 flex items-center gap-3">
        <nav aria-label="Sections" className="glass relative flex-1 rounded-[30px] p-1.5">
          <span
            aria-hidden="true"
            className="absolute inset-y-1.5 left-1.5 w-[calc((100%-0.75rem)/4)] rounded-full bg-black/7 transition-transform duration-[260ms] ease-pill dark:bg-white/15"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          <ul className="relative grid grid-cols-4">
            {tabs.map(({ id, label, icon: Icon }) => {
              const isActive = id === active;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => select(id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'flex h-12 flex-col items-center justify-center gap-0.5 rounded-full text-[11px] font-medium outline-none transition-colors duration-200 focus-visible:ring-3 focus-visible:ring-ring/50',
                      isActive ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp (opens in a new tab)"
          className="glass grid size-15 shrink-0 place-items-center rounded-full text-foreground outline-none transition-transform active:scale-95 focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <WhatsAppIcon className="size-6" />
        </a>
      </div>
    </div>
  );
}
