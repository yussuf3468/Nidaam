import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/sections/legal-page';
import { fullAddress, mailUrl, site } from '@/content/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Nidaam Solutions collects, uses and protects personal data under Kenya’s Data Protection Act, 2019.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="2026-10-31"
      intro="This policy explains what personal data Nidaam Solutions collects through this website and in the course of our work, why we collect it, how we protect it, and the rights you have under Kenya’s Data Protection Act, 2019."
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} (“Nidaam”, “we”, “us”) is a software and digital services company located at {fullAddress}. For personal data
        collected through this website and our own business dealings, we are the data controller. You can contact us about
        privacy at <a href={mailUrl}>{site.contact.email}</a>.
      </p>

      <h2>2. What we collect</h2>
      <ul>
        <li>
          <strong>Enquiries.</strong> When you use our contact form or write to us: your name, email address and message, plus
          anything optional you choose to add, such as your phone number, organisation, project type, budget range or timeline. Only
          your name, email address and message are required.
        </li>
        <li>
          <strong>Client relationships.</strong> Contact details of the people we work with, and records of quotations,
          agreements, invoices and support requests.
        </li>
        <li>
          <strong>Technical data.</strong> Our hosting provider records standard server logs, such as IP address, browser type and
          the pages requested, to keep the website secure and working.
        </li>
        <li>
          <strong>Preferences.</strong> Your light or dark mode choice and your cookie choice are stored in your own browser. We do
          not use advertising or tracking cookies, and we run no analytics. See our <Link href="/cookies">Cookie Policy</Link>.
        </li>
      </ul>

      <h2>3. How we use it, and why</h2>
      <ul>
        <li>To respond to your enquiry and prepare quotations, with your consent and in preparation for a possible contract.</li>
        <li>To deliver, support and invoice the services we provide, to perform our contract with you.</li>
        <li>To keep our website and systems secure, in our legitimate interests.</li>
        <li>To meet legal, tax and accounting obligations.</li>
      </ul>
      <p>We do not sell personal data, and we do not use it for purposes unrelated to the reason it was collected.</p>

      <h2>4. Who we share it with</h2>
      <p>
        We share personal data only with service providers who help us operate, under agreements that require them to protect it,
        and with authorities where the law requires. These are:
      </p>
      <ul>
        <li>
          <strong>Website hosting</strong>, which serves this website and keeps its standard server logs.
        </li>
        <li>
          <strong>Email delivery</strong> (Resend), which delivers enquiries from our contact form to our inbox when online sending
          is switched on.
        </li>
        <li>
          <strong>WhatsApp or your email provider</strong>, only if you choose to send your enquiry that way.
        </li>
        <li>
          <strong>Accounting and payments</strong>, for clients we invoice.
        </li>
      </ul>
      <p>
        This website loads no third-party analytics, advertising, social media or tracking scripts, and our fonts are served from our
        own site.
      </p>

      <h2>5. Transfers outside Kenya</h2>
      <p>
        Some of our service providers may process data outside Kenya. Where they do, we rely on the safeguards required by the
        Data Protection Act, 2019, such as contractual protections and providers with appropriate security standards.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        Enquiries that do not lead to an engagement are kept for up to 24 months and then deleted. Client records are kept for
        the duration of our relationship and afterwards for as long as tax and legal obligations require.
      </p>

      <h2>7. How we protect it</h2>
      <p>
        We use encrypted connections, limit access to the people who need it, remove access when it is no longer needed, keep
        backups separately and apply security updates promptly. If a personal data breach occurs that is likely to affect your
        rights, we will notify the Data Commissioner and, where required, you.
      </p>

      <h2>8. Data we process for clients</h2>
      <p>
        When we build or run systems for clients, any personal data held in those systems belongs to the client, who is the data
        controller. We process it only on their documented instructions and under our agreement with them.
      </p>

      <h2>9. Your rights</h2>
      <p>Under the Data Protection Act, 2019 you have the right to:</p>
      <ul>
        <li>be informed of how your personal data is used;</li>
        <li>access the personal data we hold about you;</li>
        <li>object to the processing of all or part of your personal data;</li>
        <li>have inaccurate or misleading data corrected; and</li>
        <li>have false, misleading or unnecessary data deleted.</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={mailUrl}>{site.contact.email}</a>. If you are not satisfied with our
        response, you may complain to the Office of the Data Protection Commissioner (<a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer">odpc.go.ke</a>).
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy as our services or the law change. The date at the top shows when it was last revised. See
        also our <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
