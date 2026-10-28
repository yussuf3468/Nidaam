import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleBody, slugifyHeading } from '@/components/insights/article-body';
import { InsightCard } from '@/components/insights/insight-card';
import { LinkedInIcon, WhatsAppIcon } from '@/components/brand/social-icons';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { JsonLd } from '@/components/seo/json-ld';
import { CtaBand } from '@/components/sections/cta-band';
import { Breadcrumbs } from '@/components/sections/page-hero';
import { Section, SectionHeading } from '@/components/sections/section';
import { categorySlug, readingMinutes } from '@/content/insights';
import { getInsight, getInsights, getRelatedInsights } from '@/lib/cms';
import { articleSchema } from '@/lib/schema';
import { absoluteUrl, pageMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getInsights()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsight(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/insights/${post.slug}`, type: 'article', publishedTime: post.date });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = await getInsight(slug);
  if (!post) notFound();

  const related = await getRelatedInsights(post);
  const headings = post.body.filter((b) => b.type === 'h2').map((b) => ('text' in b ? b.text : ''));
  const url = absoluteUrl(`/insights/${post.slug}`);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article>
        <header className="relative overflow-hidden pt-28 pb-12 sm:pt-32 lg:pt-40 lg:pb-16">
          <div className="container-site">
            <div className="animate-fade-up">
              <Breadcrumbs
                items={[
                  { name: 'Insights', path: '/insights' },
                  { name: post.category, path: `/insights/category/${categorySlug(post.category)}` },
                ]}
              />
            </div>
            <div className="mt-10 max-w-5xl">
              <p className="animate-fade-up font-mono text-xs text-muted-foreground [animation-delay:60ms]">
                <Link href={`/insights/category/${categorySlug(post.category)}`} className="text-brand-ink uppercase hover:underline">
                  {post.category}
                </Link>{' '}
                · <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingMinutes(post.body)} min read
              </p>
              <h1 className="mt-6 animate-fade-up text-[clamp(2rem,3vw,3.125rem)] leading-[1.1] font-bold tracking-[-0.035em] text-balance [animation-delay:120ms]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl animate-fade-up text-base leading-relaxed text-muted-foreground [animation-delay:200ms] sm:text-lg">
                {post.excerpt}
              </p>
              <p className="mt-8 animate-fade-up text-sm [animation-delay:260ms]">
                By <span className="font-semibold">{post.author}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="container-site grid gap-12 border-t border-border pt-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-16">
          <aside className="order-2 lg:order-1 lg:col-span-3">
            <div className="space-y-8 lg:sticky lg:top-28">
              {headings.length > 0 && (
                <nav aria-label="On this page" className="hidden lg:block">
                  <p className="eyebrow mb-4">On this page</p>
                  <ul className="space-y-2.5 border-l border-border">
                    {headings.map((h) => (
                      <li key={h}>
                        <a href={`#${slugifyHeading(h)}`} className="-ml-px block border-l border-transparent pl-4 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">
                          {h}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              <div>
                <p className="eyebrow mb-3">Share</p>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <WhatsAppIcon className="size-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LinkedInIcon className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-7 lg:col-start-4">
            <ArticleBody blocks={post.body} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <Section className="border-t border-border bg-card/40">
          <div className="container-site">
            <SectionHeading eyebrow="Keep reading" title="Related insights." />
            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <InsightCard post={p} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>
      )}

      <div className="pt-16 lg:pt-24">
        <CtaBand />
      </div>
      <div className="h-16 lg:h-24" />
    </>
  );
}
