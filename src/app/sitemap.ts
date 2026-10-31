import type { MetadataRoute } from 'next';
import { caseStudies } from '@/content/case-studies';
import { industries } from '@/content/industries';
import { categorySlug, insightCategories, insights } from '@/content/insights';
import { services } from '@/content/services';
import { absoluteUrl } from '@/lib/seo';

const LAUNCH = new Date('2026-10-28');

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly', lastModified = LAUNCH) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page('/', 1, 'weekly'),
    page('/services', 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, s.group === 'creative' ? 0.6 : 0.8)),
    page('/solutions', 0.8),
    ...industries.map((i) => page(`/solutions/${i.slug}`, 0.7)),
    page('/case-studies', 0.7),
    ...caseStudies.map((c) => page(`/case-studies/${c.slug}`, 0.5)),
    page('/about', 0.7),
    page('/insights', 0.7, 'weekly'),
    ...insightCategories.map((c) => page(`/insights/category/${categorySlug(c)}`, 0.4, 'weekly')),
    ...insights.map((p) => page(`/insights/${p.slug}`, 0.6, 'yearly', new Date(p.date))),
    page('/careers', 0.5),
    page('/contact', 0.8),
    page('/privacy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
    page('/cookies', 0.2, 'yearly'),
  ];
}
