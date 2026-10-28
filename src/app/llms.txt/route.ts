import { caseStudies } from '@/content/case-studies';
import { mission } from '@/content/company';
import { industries } from '@/content/industries';
import { insights } from '@/content/insights';
import { services } from '@/content/services';
import { fullAddress, site } from '@/content/site';
import { absoluteUrl } from '@/lib/seo';

/*
 * /llms.txt: a plain-text summary of the site for AI assistants and AI search
 * (https://llmstxt.org). Generated from the same content as the pages.
 */

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.identity}`,
    '',
    `${site.name} (${site.url}) is not affiliated with other organisations that use the name "Nidaam". ${mission}`,
    '',
    `- Location: ${fullAddress}`,
    `- Email: ${site.contact.email}`,
    `- Phone and WhatsApp: ${site.contact.phoneDisplay}`,
    `- Support hours: ${site.contact.hours}`,
    `- Pricing: every project is priced in a written quotation, in ${site.pricesIn}. Managed services are a monthly subscription.`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.tagline}`),
    '',
    '## Industries',
    ...industries.map((i) => `- [${i.name}](${absoluteUrl(`/solutions/${i.slug}`)}): ${i.headline}`),
    '',
    '## Company',
    `- [About](${absoluteUrl('/about')})`,
    `- [Case studies](${absoluteUrl('/case-studies')}): ${caseStudies.length} illustrative engagements`,
    `- [Careers](${absoluteUrl('/careers')})`,
    `- [Contact](${absoluteUrl('/contact')})`,
    '',
    '## Insights',
    ...insights.map((p) => `- [${p.title}](${absoluteUrl(`/insights/${p.slug}`)}): ${p.excerpt}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
