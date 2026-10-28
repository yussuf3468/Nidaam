'use server';

import { site } from '@/content/site';
import { enquirySchema, formatEnquiry, type EnquiryInput } from '@/lib/enquiry';

export type EnquiryResult = { ok: true } | { ok: false; error: string };

const fallback = `Please email ${site.contact.email} or WhatsApp ${site.contact.phoneDisplay} and we will pick it up from there.`;

/**
 * Validates a project enquiry and emails it to the team through Resend.
 * Configure RESEND_API_KEY, CONTACT_FROM and CONTACT_TO (see .env.example).
 */
export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Some details need attention. Please check the form and try again.' };
  const enquiry = parsed.data;

  // Bots fill the hidden field; accept silently so they learn nothing.
  if (enquiry.website) return { ok: true };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || site.contact.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[enquiry] Email delivery is not configured; enquiry received:\n' + formatEnquiry(enquiry));
      return { ok: true };
    }
    console.error('[enquiry] RESEND_API_KEY / CONTACT_FROM are not set; enquiry could not be delivered.');
    return { ok: false, error: `Our form is temporarily unavailable. ${fallback}` };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `New enquiry: ${enquiry.projectType} from ${enquiry.name}`,
        text: formatEnquiry(enquiry),
      }),
    });
    if (!res.ok) {
      console.error('[enquiry] Resend responded', res.status, await res.text());
      return { ok: false, error: `We could not send your enquiry just now. ${fallback}` };
    }
    return { ok: true };
  } catch (err) {
    console.error('[enquiry] Delivery failed', err);
    return { ok: false, error: `We could not send your enquiry just now. ${fallback}` };
  }
}
