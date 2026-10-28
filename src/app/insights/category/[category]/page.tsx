import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryNav } from '@/components/insights/category-nav';
import { InsightCard } from '@/components/insights/insight-card';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Section } from '@/components/sections/section';
import { getCategories, getInsightsByCategory } from '@/lib/cms';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getCategories()).map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const match = (await getCategories()).find((c) => c.slug === category);
  if (!match) return {};
  return pageMetadata({
    title: `${match.name} Insights`,
    description: `Articles on ${match.name.toLowerCase()} from Nidaam Solutions, a software company in Nairobi, Kenya.`,
    path: `/insights/category/${match.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categories = await getCategories();
  const match = categories.find((c) => c.slug === category);
  if (!match) notFound();
  const posts = await getInsightsByCategory(category);

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Insights', path: '/insights' },
          { name: match.name, path: `/insights/category/${match.slug}` },
        ]}
        eyebrow={`${posts.length} ${posts.length === 1 ? 'article' : 'articles'}`}
        title={match.name}
      >
        <div className="mt-12 animate-fade-up [animation-delay:240ms]">
          <CategoryNav categories={categories} active={match.slug} />
        </div>
      </PageHero>

      <Section className="border-t border-border pt-12! lg:pt-16!">
        <div className="container-site">
          {posts.length > 0 ? (
            <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <RevealItem key={post.slug}>
                  <InsightCard post={post} />
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <p className="text-muted-foreground">No articles in this category yet.</p>
          )}
        </div>
      </Section>

      <CtaBand />
      <div className="h-16 lg:h-24" />
    </>
  );
}
