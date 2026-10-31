'use server';

import { site } from '@/content/site';
import { enquirySchema, formatEnquiry, type EnquiryInput } from '@/lib/enquiry';

/**
 * `notConfigured` means email delivery has not been set up yet; the form then offers
 * to send the same enquiry by WhatsApp or email instead, so no enquiry is lost.
 */
export type EnquiryResult = { ok: true } | { ok: false; error: string; notConfigured?: boolean };

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
    console.warn('[enquiry] RESEND_API_KEY / CONTACT_FROM are not set; offering WhatsApp or email instead.');
    return {
      ok: false,
      notConfigured: true,
      error: 'Online sending is not switched on yet. Your enquiry is ready to send by WhatsApp or email instead; we have filled it in for you.',
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `New enquiry from ${enquiry.name}${enquiry.projectType ? `: ${enquiry.projectType}` : ''}`,
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
