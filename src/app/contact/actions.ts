'use server';

import nodemailer from 'nodemailer';
import { site } from '@/content/site';
import { enquirySchema, formatEnquiry, type EnquiryInput } from '@/lib/enquiry';

/**
 * `notConfigured` means no email delivery is set up yet; the form then opens the
 * visitor's email app with the enquiry filled in, so no enquiry is lost.
 */
export type EnquiryResult = { ok: true } | { ok: false; error: string; notConfigured?: boolean };

const fallback = `Please email ${site.contact.email} or call ${site.contact.phoneDisplay} and we will pick it up from there.`;

/*
 * Delivery, in order of preference (see .env.example):
 * 1. SMTP through your own mailbox (SMTP_HOST, SMTP_USER, SMTP_PASS)
 * 2. Resend (RESEND_API_KEY, CONTACT_FROM)
 */
async function deliver(enquiry: EnquiryInput) {
  const to = process.env.CONTACT_TO || site.contact.email;
  const subject = `New enquiry from ${enquiry.name}${enquiry.projectType ? `: ${enquiry.projectType}` : ''}`;
  const text = formatEnquiry(enquiry);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    const port = Number(SMTP_PORT || 465);
    const transport = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transport.sendMail({
      from: process.env.CONTACT_FROM || `Nidaam Solutions website <${SMTP_USER}>`,
      to,
      replyTo: enquiry.email,
      subject,
      text,
    });
    return true;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (apiKey && from) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: enquiry.email, subject, text }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
    return true;
  }

  return false;
}

/** Validates a project enquiry and emails it to the team. */
export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Some details need attention. Please check the form and try again.' };
  const enquiry = parsed.data;

  // Bots fill the hidden field; accept silently so they learn nothing.
  if (enquiry.website) return { ok: true };

  try {
    if (await deliver(enquiry)) return { ok: true };
    console.warn('[enquiry] No email delivery configured; opening the visitor’s email app instead.');
    return { ok: false, notConfigured: true, error: '' };
  } catch (err) {
    console.error('[enquiry] Delivery failed', err);
    return { ok: false, error: `We could not send your enquiry just now. ${fallback}` };
  }
}
