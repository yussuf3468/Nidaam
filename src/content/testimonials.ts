/*
 * ILLUSTRATIVE TESTIMONIALS
 * Written to show the kind of feedback the case studies describe. They are not
 * quotes from real clients and carry an "Illustrative" label while
 * `site.labelSampleContent` is true. Replace them with real, approved quotes.
 */

export type Testimonial = { quote: string; role: string; organisation: string; caseStudy?: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      'Our bursars used to start every morning matching M-Pesa statements to learners. Now payments reconcile themselves and parents get a receipt before they have put their phone away.',
    role: 'Finance Director',
    organisation: 'Multi-campus school group, Nairobi',
    caseStudy: 'school-group-platform',
  },
  {
    quote:
      'They asked better questions about our operations than we had asked ourselves. What we got was not just software, it was a clearer way of running nine branches.',
    role: 'Managing Director',
    organisation: 'Retail chain, Kenya',
    caseStudy: 'retail-operations-platform',
  },
  {
    quote:
      'The handover was the part that impressed me most: documentation, credentials, training, everything on a checklist. We know exactly what we own.',
    role: 'Operations Manager',
    organisation: 'Regional distributor',
    caseStudy: 'logistics-dispatch-platform',
  },
];
