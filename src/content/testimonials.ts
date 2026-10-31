/*
 * Real client testimonials, quoted exactly as published on the team's previous website
 * (lenzro.com). Only add quotes that clients have approved for publication.
 */

export type Testimonial = { quote: string; name: string; role: string; organisation: string; project: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      'Working with the team was a great experience. They understood what we needed and delivered a professional solution that made a real difference for our business. Communication was smooth, and the final result exceeded our expectations.',
    name: 'Ali Abdalla',
    role: 'Business Owner',
    organisation: 'Car Hire',
    project: 'car-hire-platform',
  },
  {
    quote:
      'The team was professional, responsive, and easy to work with throughout the project. They took the time to understand our needs and delivered quality work that we were genuinely happy with. I would definitely recommend working with them.',
    name: 'Abdirahman Muqtar',
    role: 'Barista Manager',
    organisation: 'Islii',
    project: 'islii-barista-school',
  },
  {
    quote:
      'We appreciated the professionalism and attention to detail throughout our work together. The team was reliable, understood our goals, and delivered a solution that aligned well with our vision. It was a positive experience from start to finish.',
    name: 'Mohamed Shariif',
    role: 'Advisor',
    organisation: 'Anchor Point Initiative',
    project: 'anchor-point-initiative',
  },
];
