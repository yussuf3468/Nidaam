import 'server-only';
import { insights, insightCategories, categorySlug, type Insight } from '@/content/insights';

/*
 * Data access for Insights. Pages only call these functions, so the content source
 * can be swapped for a headless CMS (fetch from Sanity, Payload, Contentful...) by
 * changing this file alone. The functions are async for that reason.
 */

const byNewest = (a: Insight, b: Insight) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title);

export async function getInsights() {
  return [...insights].sort(byNewest);
}

export async function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export async function getInsightsByCategory(slug: string) {
  return (await getInsights()).filter((i) => categorySlug(i.category) === slug);
}

export async function getCategories() {
  return insightCategories.map((name) => ({ name, slug: categorySlug(name), count: insights.filter((i) => i.category === name).length }));
}

export async function getRelatedInsights(insight: Insight, limit = 3) {
  const all = await getInsights();
  const same = all.filter((i) => i.slug !== insight.slug && i.category === insight.category);
  const rest = all.filter((i) => i.slug !== insight.slug && i.category !== insight.category);
  return [...same, ...rest].slice(0, limit);
}
