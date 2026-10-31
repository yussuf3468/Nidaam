import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Manrope, Outfit } from 'next/font/google';
import { CookieBanner } from '@/components/layout/cookie-banner';
import { MobileActionBar } from '@/components/layout/mobile-action-bar';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { Providers } from '@/components/providers';
import { JsonLd } from '@/components/seo/json-ld';
import { site } from '@/content/site';
import { organizationSchema } from '@/lib/schema';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap', preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // The home page title is the bare brand name, which is what Google shows above sitelinks.
  // Inner pages use short names ("Services", "About us"), which become the sitelink labels.
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    'Nidaam Solutions',
    'Nidaam Solutions Kenya',
    'Nidaam Nairobi',
    'software company Nairobi',
    'software company Eastleigh',
    'software development company Kenya',
    'custom software Kenya',
    'school management system Kenya',
    'business management system Kenya',
    'website design Nairobi',
    'mobile app development Kenya',
    'managed software services Kenya',
    'M-Pesa integration',
  ],
  alternates: { canonical: '/', languages: { 'en-KE': '/', 'x-default': '/' } },
  // Search engine ownership checks: set these in your hosting dashboard (see .env.example).
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION && { google: process.env.GOOGLE_SITE_VERIFICATION }),
    ...(process.env.BING_SITE_VERIFICATION && { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } }),
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: '/',
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  formatDetection: { telephone: false },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f5f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" suppressHydrationWarning className={`${manrope.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body id="top">
        <Providers>
          <a
            href="#main"
            className="fixed top-3 left-3 z-100 -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <MobileActionBar />
          <CookieBanner />
          <div className="noise" aria-hidden />
        </Providers>
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
