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
  slug: 'nidaam-pos',
  name: 'NidaamPOS',
  client: 'Retail Stores & Supermarkets',
  sector: 'Retail Technology · SaaS',

  summary:
    'A complete point-of-sale and business management platform that combines POS, inventory, online storefronts, finance, orders and reporting into one cloud-based system. Each deployment is fully customized for the customer\'s brand, products and business workflows.',

  built: [
    'Fast point-of-sale with receipts, discounts, M-Pesa, cash and card payments',
    'Inventory management with stock receiving, low-stock alerts and audit history',
    'Custom online storefront with shopping cart, checkout and order tracking',
    'Finance suite including expenses, debts, customer credit and investments',
    'Business analytics with sales dashboards, PDF reports and CSV exports',
    'Staff accounts with secure authentication and activity tracking',
    'Subscription-based SaaS deployments with customer-specific branding and databases',
    'Offline-ready Progressive Web App with Android support'
  ],

  tech: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Supabase',
    'PostgreSQL',
    'Vite',
    'Capacitor'
  ],

  url: 'https://pos.nidaam.co.ke',

  image: '/projects/pos.png',

  imageAlt:
    'NidaamPOS dashboard displaying sales analytics, inventory management, point-of-sale interface, financial reports and online storefront management in a premium modern workspace.',
},
  {
  slug: 'nidaam-cms',
  name: 'Nidaam CMS',
  client: 'Businesses & SMEs',
  sector: 'Business Management · SaaS',
  summary:
    'A premium client management platform built for modern businesses to manage customers, payments, transactions and reports with a beautiful mobile-first experience and dual-currency support.',

  built: [
    'Complete client management with smart client profiles and auto-generated IDs',
    'Dual-currency accounting with separate KES and USD transaction management',
    'Professional PDF reports, analytics dashboards and business insights',
    'Income, expenses, debts, rent and budget tracking',
    'Real-time dashboards with monthly performance statistics',
    'Secure authentication with role-based access and Row Level Security',
    'Responsive mobile-first interface with premium UX and smooth animations',
    'Cloud synchronization across all devices using Supabase'
  ],

  tech: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Supabase',
    'PostgreSQL',
    'Vite'
  ],

  url: 'https://cms.nidaam.co.ke',

  image: '/projects/nidaam.png',

  imageAlt:
    'Nidaam CMS dashboard displaying client analytics, revenue cards, recent transactions, dual-currency financial summaries and business reports in a premium emerald-themed interface.',
},
    {
    slug: 'manasik-travel-agency-platform',
    name: 'Manasik',
    client: 'Travel agencies',
    sector: 'Travel · SaaS',
    summary: 'The operating system for travel agencies: one internal tool to manage clients, bookings, sales and payments, with a daily list of what needs doing.',
    built: ['Clients and bookings for families and groups', 'Tickets, visas and services', 'Quotations, invoices, receipts and payments', 'Daily to-do list with morning push notifications'],
    tech: ['Next.js', 'Supabase', 'PostgreSQL'],
    url: 'https://manasik.lenzro.com',
    image: '/projects/manasik.png',
    imageAlt: 'Manasik workspace home page showing stat cards for clients, departures, income and money owed, above a list of what needs doing today',
  },
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
