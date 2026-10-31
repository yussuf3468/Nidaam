import type { Metadata } from 'next';
import Link from 'next/link';
import { CookieSettingsButton } from '@/components/layout/cookie-banner';
import { LegalPage } from '@/components/sections/legal-page';
import { mailUrl, site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description: 'Nidaam Solutions uses only essential browser storage and no advertising or tracking cookies. See exactly what is stored and how to change it.',
  path: '/cookies',
});

const storage = [
  { name: 'theme', type: 'Local storage', purpose: 'Remembers whether you chose light or dark mode.', category: 'Essential', duration: 'Until you clear it' },
  { name: 'nidaam-consent', type: 'Local storage', purpose: 'Remembers your cookie choice so we do not ask again.', category: 'Essential', duration: 'Until you clear it' },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      updated="2026-10-31"
      intro="This policy explains what this website stores in your browser, why, and how you can change your choice. In short: we keep only what the site needs to work, and we do not track you."
    >
      <h2>1. What we store</h2>
      <p>
        This website does not set advertising, social media or tracking cookies. It stores two small items in your browser’s local
        storage, both essential to how the site works:
      </p>
      <div className="not-prose overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-semibold text-muted-foreground">
              <th scope="col" className="px-4 py-3">Name</th>
              <th scope="col" className="px-4 py-3">Purpose</th>
              <th scope="col" className="px-4 py-3">Category</th>
              <th scope="col" className="px-4 py-3">Kept</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {storage.map((s) => (
              <tr key={s.name}>
                <td className="px-4 py-3 font-mono text-xs">{s.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.purpose}</td>
                <td className="px-4 py-3">{s.category}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>2. Optional analytics</h2>
      <p>
        We do not currently run any analytics. If we add privacy-friendly analytics in future, they will only load after you choose
        “Accept optional”, and this policy will list them. If your browser sends a Global Privacy Control signal, we treat it as a
        rejection.
      </p>

      <h2>3. Third-party services</h2>
      <p>
        Pages on this site load no third-party scripts, trackers or embedded maps, and our fonts are served from our own website. Some
        links take you to other services, such as WhatsApp, Instagram, TikTok, LinkedIn and Google Maps. Those services apply their own
        cookie and privacy policies once you open them.
      </p>

      <h2>4. Changing your choice</h2>
      <p>
        You can change your choice at any time: <CookieSettingsButton className="cursor-pointer font-medium text-brand-ink underline underline-offset-4" />. You can
        also clear this site’s data in your browser settings, which removes everything listed above.
      </p>

      <h2>5. More information</h2>
      <p>
        How we handle personal data is explained in our <Link href="/privacy">Privacy Policy</Link>. Questions can be sent to{' '}
        <a href={mailUrl}>{site.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
