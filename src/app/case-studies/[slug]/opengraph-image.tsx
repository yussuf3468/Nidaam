import { caseStudies, getCaseStudy } from '@/content/case-studies';
import { ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = 'Nidaam Solutions case study';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return renderOgImage({ eyebrow: 'Case study', title: study?.title ?? 'Case studies' });
}
