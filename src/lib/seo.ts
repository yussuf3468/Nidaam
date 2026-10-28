import type { Metadata } from 'next';
import { site } from '@/content/site';

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
};

/** Consistent metadata for inner pages: canonical URL, Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, type = 'website', publishedTime, keywords }: PageMeta): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path, languages: { 'en-KE': path, 'x-default': path } },
    openGraph: {
      type,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      ...(publishedTime && { publishedTime }),
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${site.name}`, description },
  };
}

export function absoluteUrl(path = '/') {
  return `${site.url}${path === '/' ? '' : path}`;
}
