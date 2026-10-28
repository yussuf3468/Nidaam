import { ArrowUpRight, MapPin } from 'lucide-react';
import { fullAddress, site } from '@/content/site';

/**
 * Map placeholder: a light, static illustration that links to Google Maps.
 * Avoids loading a third-party map embed (and its cookies) on every visit.
 * To embed a live map later, replace the SVG with a Google Maps iframe.
 */
export function MapCard() {
  return (
    <a
      href={site.contact.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card"
      aria-label={`Open ${fullAddress} in Google Maps`}
    >
      <svg viewBox="0 0 600 300" className="h-56 w-full text-foreground sm:h-64" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="600" height="300" fill="currentColor" fillOpacity="0.025" />
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" stroke="currentColor" strokeOpacity="0.05" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="currentColor" strokeOpacity="0.05" />
        ))}
        <path d="M-10 210 C120 190 180 120 300 140 S480 90 610 60" fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="14" strokeLinecap="round" />
        <path d="M-10 210 C120 190 180 120 300 140 S480 90 610 60" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="2" strokeDasharray="8 8" />
        <path d="M170 -10 L230 310" stroke="currentColor" strokeOpacity="0.1" strokeWidth="8" />
        <path d="M400 -10 C380 100 420 200 380 310" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="6" />
        <path d="M-10 90 L610 120" stroke="currentColor" strokeOpacity="0.07" strokeWidth="5" />
        <rect x="250" y="160" width="70" height="40" rx="6" fill="currentColor" fillOpacity="0.06" />
        <rect x="440" y="150" width="90" height="60" rx="6" fill="currentColor" fillOpacity="0.05" />
        <rect x="60" y="40" width="80" height="34" rx="6" fill="currentColor" fillOpacity="0.05" />
        <circle cx="300" cy="140" r="34" fill="#00AEFF" fillOpacity="0.12" className="origin-[300px_140px] animate-pulse-soft motion-reduce:animate-none" />
        <circle cx="300" cy="140" r="9" fill="#00AEFF" stroke="white" strokeWidth="3" />
      </svg>
      <div className="flex items-center justify-between gap-4 border-t border-border p-5">
        <span className="flex items-start gap-3">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand-ink" aria-hidden />
          <span>
            <span className="block font-semibold">{site.contact.street}</span>
            <span className="block text-sm text-muted-foreground">
              {site.contact.locality}, {site.contact.city}, {site.contact.country}
            </span>
          </span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold">
          Directions
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </a>
  );
}
