import { getIndustry, industries } from '@/content/industries';
import { ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = 'Nidaam Solutions industry solutions';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return renderOgImage({ eyebrow: industry?.name ?? 'Solutions', title: industry?.headline ?? 'Solutions by industry' });
}
