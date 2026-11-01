import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MockScreen, ParentPhone } from '@/components/graphics/mock-screen';
import type { MockVariant } from '@/content/case-studies';

/*
 * Development-only page that renders one illustration on a transparent background, so it
 * can be exported to /public/mocks as a lightweight image. Returns 404 in production.
 * To re-export after editing an illustration: run `npm run dev`, then screenshot
 * #mock at /mock-preview/<variant> (school, ops, clinic, booking, dispatch, field, parent).
 */

export const metadata: Metadata = { robots: { index: false, follow: false } };

const dashboards: MockVariant[] = ['school', 'ops', 'clinic', 'booking', 'dispatch', 'field'];

export default async function MockPreview({ params }: { params: Promise<{ variant: string }> }) {
  if (process.env.NODE_ENV === 'production') notFound();
  const { variant } = await params;
  const isPhone = variant === 'parent' || variant === 'field';
  if (variant !== 'parent' && !dashboards.includes(variant as MockVariant)) notFound();

  return (
    <>
      <style>{'html,body{background:transparent!important}header,footer,.noise,[role=dialog]{display:none!important}#mock .shadow-lift{box-shadow:none!important}'}</style>
      {/* Widths stay below each illustration's text-size cap, so proportions match the site. */}
      <div id="mock" style={{ width: variant === 'parent' ? 240 : isPhone ? 720 : 760 }}>
        {variant === 'parent' ? <ParentPhone /> : <MockScreen variant={variant as MockVariant} />}
      </div>
    </>
  );
}
