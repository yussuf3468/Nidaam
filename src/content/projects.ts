/*
 * Real projects delivered by the Nidaam Solutions team (previously trading as Lenzro /
 * Code Designers, see lenzro.com). Images live in /public/projects.
 */

export type Project = {
  slug: string;
  name: string;
  /** Who it was built for, as shown publicly. */
  client: string;
  sector: string;
  summary: string;
  built: string[];
  tech: string[];
  url?: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: 'car-hire-platform',
    name: 'Car Hire',
    client: 'Car rental businesses',
    sector: 'Car rental · SaaS',
    summary: 'An all-in-one platform for car rental businesses: one dashboard to manage the fleet, bookings and payments, built for solo operators through to full fleets.',
    built: ['Fleet and vehicle status', 'Rentals and clients', 'Payments, balances and expenses', 'Staff, complaints and calendar'],
    tech: ['Next.js', 'Supabase'],
    url: 'https://car-hire-two.vercel.app',
    image: '/projects/car-hire.webp',
    imageAlt: 'Car Hire dashboard showing fleet status, revenue collected this month, unpaid balances and a rental payments chart',
  },
  {
    slug: 'islii-barista-school',
    name: 'Islii Barista School',
    client: 'Islii, a coffee academy in Nairobi',
    sector: 'Education',
    summary: 'A website and student system for a Nairobi barista school: courses and enrolment, real students and certificates, and a gallery of certification days.',
    built: ['Course pages and enrolment', 'Student records and certificates', 'Certification-day gallery', 'Contact and enquiries'],
    tech: ['Next.js', 'PostgreSQL'],
    url: 'https://isliibarista.com',
    image: '/projects/islii-barista-school.webp',
    imageAlt: 'Islii Barista School home page with the headline “Become a World-Class Barista” over a coffee bar photo',
  },
  {
    slug: 'anchor-point-initiative',
    name: 'Anchor Point Initiative',
    client: 'Anchor Point Initiative',
    sector: 'Non-profit',
    summary: 'A community hub for a youth non-profit: a safe, supportive space for mental health group programmes, with events, resources and donations in one place.',
    built: ['Programmes and group sessions', 'Events and resources', 'Donations', 'Content the team can update'],
    tech: ['Next.js', 'Tailwind CSS'],
    url: 'https://anchor-point-initiative.vercel.app/',
    image: '/projects/anchor-point-initiative.webp',
    imageAlt: 'Anchor Point Initiative website home page for a youth community and mental health programme',
  },
  {
    slug: 'mayo-doctor-booking',
    name: 'Mayo',
    client: 'Patients, doctors and hospitals',
    sector: 'Healthcare · SaaS',
    summary: 'A booking platform connecting patients, doctors and hospitals: browse trusted doctors and book appointments online.',
    built: ['Doctor profiles and search', 'Appointment booking', 'Patient and doctor accounts', 'Hospital listings'],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://healthyfeeling.netlify.app/',
    image: '/projects/mayo.webp',
    imageAlt: 'Mayo doctor appointment booking website home page',
  },
  {
    slug: 'gam-oil-fleet-management',
    name: 'Gam Oil Trading Limited',
    client: 'Gam Oil Trading Limited',
    sector: 'Logistics · Petroleum distribution',
    summary: 'A fleet management system for petroleum distribution: an authenticated dashboard to manage the entire fleet in real time.',
    built: ['Secure staff sign-in', 'Fleet overview', 'Vehicle and trip management', 'Real-time distribution logistics'],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    url: 'https://fleet-frontend-zeta.vercel.app/',
    image: '/projects/gam-oil.webp',
    imageAlt: 'Gam Oil Trading Limited fleet dashboard sign-in screen beside a branded fuel truck',
  },
];
