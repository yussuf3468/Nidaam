import { founders } from '@/content/company';
import type { Insight } from '@/content/insights';
import { services, type Service } from '@/content/services';
import { fullAddress, site } from '@/content/site';
import { absoluteUrl } from './seo';

/*
 * schema.org structured data. Every page links back to one Organization node
 * (`@id` below), which gives search engines a single, consistent picture of
 * Nidaam Solutions, a Nairobi software company, and helps separate it from other
 * businesses that share the name "Nidaam".
 */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.name,
    alternateName: site.alternateNames,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${site.url}/#logo`,
      url: absoluteUrl('/icons/icon-512.png'),
      width: 512,
      height: 512,
      caption: site.name,
    },
    image: absoluteUrl('/opengraph-image'),
    description: site.description,
    disambiguatingDescription: site.identity,
    slogan: site.slogan,
    foundingDate: site.foundingDate,
    foundingLocation: { '@type': 'Place', name: 'Nairobi, Kenya' },
    founder: founders.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.role })),
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.street,
      addressLocality: `${site.contact.locality}, ${site.contact.city}`,
      addressRegion: 'Nairobi County',
      addressCountry: site.contact.countryCode,
    },
    hasMap: site.contact.mapsUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: 'KE',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: 'KE',
        availableLanguage: ['English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Nairobi' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Place', name: 'East Africa' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    currenciesAccepted: 'KES, USD',
    paymentAccepted: site.payment,
    knowsAbout: [
      ...services.map((s) => s.title),
      'M-Pesa integration',
      'School management software',
      'Business management software',
      'Software maintenance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nidaam Solutions services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
      })),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: site.name,
    alternateName: site.alternateNames,
    url: site.url,
    inLanguage: 'en-KE',
    publisher: { '@id': ORG_ID },
    about: { '@id': ORG_ID },
  };
}

type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

/** Describes a page and ties it to the site and organisation. */
export function webPageSchema({ type = 'WebPage', name, description, path }: { type?: PageType; name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: 'en-KE',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(type === 'ContactPage' && {
      mainEntity: { '@id': ORG_ID },
      contentLocation: { '@type': 'Place', address: fullAddress },
    }),
  };
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, url: absoluteUrl(item.path) })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@id': ORG_ID },
    brand: { '@type': 'Brand', name: site.name },
    areaServed: [
      { '@type': 'City', name: 'Nairobi' },
      { '@type': 'Country', name: 'Kenya' },
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'KES', description: service.pricing },
      seller: { '@id': ORG_ID },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.includes.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  };
}

export function articleSchema(post: Insight) {
  const url = absoluteUrl(`/insights/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    author: { '@type': 'Organization', name: post.author, url: site.url },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-KE',
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}
