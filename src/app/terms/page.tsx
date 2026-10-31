import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/sections/legal-page';
import { mailUrl, site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Terms governing the use of the Nidaam Solutions website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updated="2026-10-28"
      intro="These terms govern your use of this website. By using it, you agree to them. Our software and digital services are provided under separate written quotations and agreements."
    >
      <h2>1. About these terms</h2>
      <p>
        This website is operated by {site.name}, a business registered in Kenya. If you do not agree to these terms, please do not
        use the website.
      </p>

      <h2>2. Information on this website</h2>
      <p>
        We work to keep the information on this website accurate and current, but it is provided for general information only. It
        is not an offer, a quotation or professional advice for your specific situation. Every engagement is priced in a written
        quotation, and the services, deliverables and obligations of each engagement are defined in its written agreement.
      </p>
      <p>
        Projects marked “Example project” describe how we would approach common problems. They are not client case studies and do
        not report client results.
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        The content, design, logos and code of this website belong to {site.name} unless stated otherwise. You may view and share
        pages for personal or internal business purposes, but you may not copy, modify or republish them for commercial purposes
        without our written permission. Ownership of software we build for clients is set out in each client agreement.
      </p>

      <h2>4. Acceptable use</h2>
      <p>
        You agree not to misuse the website, including by attempting to gain unauthorised access, interfering with its operation,
        or submitting false, unlawful or malicious content through our forms.
      </p>

      <h2>5. Links to other websites</h2>
      <p>We are not responsible for the content or practices of websites we link to, such as social media platforms.</p>

      <h2>6. Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising from use of, or reliance on, this website. Nothing in
        these terms limits liability that cannot be limited under the laws of Kenya.
      </p>

      <h2>7. Privacy</h2>
      <p>
        How we handle personal data is explained in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>8. Governing law</h2>
      <p>These terms are governed by the laws of Kenya, and the courts of Kenya have jurisdiction over any dispute about them.</p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={mailUrl}>{site.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
