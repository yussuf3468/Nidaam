import Image from 'next/image';
import type { MockVariant } from '@/content/case-studies';
import { cn } from '@/lib/utils';

/*
 * The product illustrations as pre-rendered images (exported from <MockScreen> via
 * /mock-preview in development). Images keep the page light: the live HTML versions
 * added hundreds of elements for the browser to lay out on every visit.
 */

type Variant = MockVariant | 'parent';

const images: Record<Variant, { width: number; height: number; alt: string }> = {
  school: { width: 1520, height: 580, alt: 'School management dashboard showing fee collections and M-Pesa payments matched automatically' },
  ops: { width: 1520, height: 790, alt: 'Business operations dashboard with sales, stock and branch performance' },
  clinic: { width: 1520, height: 580, alt: 'Clinic front desk screen with the patient queue and claims ready to submit' },
  booking: { width: 1520, height: 926, alt: 'Booking calendar with upcoming safari departures and deposits' },
  dispatch: { width: 1520, height: 843, alt: 'Dispatch board with a delivery route, vehicles on the road and live jobs' },
  field: { width: 836, height: 1054, alt: 'Field data app recording a household visit while offline, ready to sync' },
  parent: { width: 720, height: 1053, alt: 'Parent app showing a fee balance paid in full and an M-Pesa receipt' },
};

export function MockImage({
  variant,
  className,
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: {
  variant: Variant;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const img = images[variant];
  return (
    <Image
      src={`/mocks/${variant}.webp`}
      width={img.width}
      height={img.height}
      alt={img.alt}
      sizes={sizes}
      // Next 16 replaced `priority` with `preload`; above-the-fold images also fetch eagerly at high priority.
      preload={priority}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      // The field app is a phone, shown narrower than the desktop screens.
      className={cn('h-auto w-full drop-shadow-[0_18px_28px_rgb(30_20_10/0.12)]', variant === 'field' && 'mx-auto w-[58%]', className)}
    />
  );
}
