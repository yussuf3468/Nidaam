import { z } from 'zod';
import { services } from '@/content/services';

/** Options and validation for the project enquiry form, shared by the form and the server action. */

export const projectTypes: [string, ...string[]] = ['Not sure yet', ...services.map((s) => s.title)];

export const companySizes = ['Just me', '2–10 people', '11–50 people', '51–200 people', '201–1,000 people', 'More than 1,000'] as const;

export const budgets = [
  'Under KES 250,000 (≈ US$2,000)',
  'KES 250,000 – 1M (≈ US$2,000 – 7,500)',
  'KES 1M – 3M (≈ US$7,500 – 23,000)',
  'KES 3M – 10M (≈ US$23,000 – 77,000)',
  'Over KES 10M (≈ US$77,000+)',
  'Not sure yet',
] as const;

export const timelines = ['As soon as possible', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible, still exploring'] as const;

export const contactMethods = ['Email', 'Phone call', 'WhatsApp'] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(120),
  email: z.email('Please enter a valid email address.').max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v === '' || /^[+\d][\d\s()-]{6,}$/.test(v), 'Please enter a valid phone number.'),
  company: z.string().trim().max(160),
  companySize: z.enum(companySizes, 'Please choose your organisation size.'),
  projectType: z.enum(projectTypes, 'Please choose a project type.'),
  budget: z.enum(budgets, 'Please choose a budget range.'),
  timeline: z.enum(timelines, 'Please choose a timeline.'),
  message: z.string().trim().min(20, 'Please tell us a little more (at least 20 characters).').max(5000),
  discoveryCall: z.boolean(),
  preferredContact: z.enum(contactMethods),
  consent: z.literal(true, 'Please agree so we can respond to your enquiry.'),
  /** Honeypot: hidden from people, filled in by bots. */
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export function formatEnquiry(e: EnquiryInput) {
  return [
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Phone: ${e.phone || 'Not given'}`,
    `Organisation: ${e.company || 'Not given'} (${e.companySize})`,
    `Project type: ${e.projectType}`,
    `Budget: ${e.budget}`,
    `Timeline: ${e.timeline}`,
    `Discovery call requested: ${e.discoveryCall ? 'Yes' : 'No'}`,
    `Preferred contact: ${e.preferredContact}`,
    '',
    e.message,
  ].join('\n');
}
