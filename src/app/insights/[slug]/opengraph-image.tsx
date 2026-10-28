import { insights } from '@/content/insights';
import { ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = 'Nidaam Solutions insight';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  return renderOgImage({ eyebrow: post ? `Insights · ${post.category}` : 'Insights', title: post?.title ?? 'Insights' });
}
