import type { Metadata } from 'next';
import { CategoryNav } from '@/components/insights/category-nav';
import { InsightCard } from '@/components/insights/insight-card';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHero } from '@/components/sections/page-hero';
import { Section } from '@/components/sections/section';
import { getCategories, getInsights } from '@/lib/cms';
import { JsonLd } from '@/components/seo/json-ld';
import { itemListSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Insights',
  description:
    'Practical writing from Nidaam Solutions on software, AI, M-Pesa integration, data protection and running business systems for organisations in Kenya.',
  path: '/insights',
});

export default async function InsightsPage() {
  const [posts, categories] = await Promise.all([getInsights(), getCategories()]);
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ type: 'CollectionPage', name: 'Insights from Nidaam Solutions', description: metadata.description as string, path: '/insights' }),
          itemListSchema('Insights', posts.map((p) => ({ name: p.title, path: `/insights/${p.slug}` }))),
        ]}
      />
      <PageHero
        crumbs={[{ name: 'Insights', path: '/insights' }]}
        eyebrow="Insights"
        title="Practical thinking on software and operations."
        description="Plain-language writing on building, buying and running software: what works, what does not, and how to decide."
      >
        <div className="mt-12 animate-fade-up [animation-delay:320ms]">
          <CategoryNav categories={categories} />
        </div>
      </PageHero>

      <Section className="border-t border-border pt-12! lg:pt-16!">
        <div className="container-site">
          {featured && (
            <Reveal className="mb-4 grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <InsightCard post={featured} large />
              </div>
              <div className="grid gap-4 lg:col-span-4">
                {rest.slice(0, 2).map((post) => (
                  <InsightCard key={post.slug} post={post} />
                ))}
              </div>
            </Reveal>
          )}
          <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rest.slice(2).map((post) => (
              <RevealItem key={post.slug}>
                <InsightCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand title="Have a question we have not written about?" description="Ask us. If it is useful to you, it is probably useful to others, and we may write about it next." />
      <div className="h-12 lg:h-16" />
    </>
  );
}
