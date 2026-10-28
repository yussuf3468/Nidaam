import type { MockVariant } from './case-studies';

/** Solution blueprints: proven system patterns we adapt to each client. */
export type Solution = {
  title: string;
  summary: string;
  points: string[];
  visual: MockVariant;
  href: string;
  forIndustries: string[];
};

export const solutions: Solution[] = [
  {
    title: 'School management platform',
    summary: 'Admissions, fees with M-Pesa, assessment, report cards and a parent app, for single schools and multi-campus groups.',
    points: ['Automatic M-Pesa fee matching', 'Report cards from entered marks', 'Parent app for Android and iOS'],
    visual: 'school',
    href: '/services/school-management-systems',
    forIndustries: ['Education'],
  },
  {
    title: 'Business operations suite',
    summary: 'POS, inventory, purchasing, finance and HR inputs in one system, with live dashboards across every branch.',
    points: ['Multi-branch stock and transfers', 'M-Pesa and bank reconciliation', 'Electronic tax invoicing support'],
    visual: 'ops',
    href: '/services/business-management-systems',
    forIndustries: ['Retail', 'Hospitality', 'SMEs'],
  },
  {
    title: 'Booking platforms and customer portals',
    summary: 'Online availability, bookings and payments, plus secure portals where customers see statements, documents and updates.',
    points: ['Deposits by card and M-Pesa', 'Itineraries and quotes in minutes', 'Self-service customer accounts'],
    visual: 'booking',
    href: '/solutions/travel-tourism',
    forIndustries: ['Travel & Tourism', 'Hospitality', 'Real Estate'],
  },
  {
    title: 'Field and dispatch apps',
    summary: 'Offline-capable mobile apps for drivers and field teams, with photos, GPS, signatures and live dashboards back at base.',
    points: ['Works without coverage', 'Proof of delivery and visit', 'Live tracking for managers'],
    visual: 'dispatch',
    href: '/services/mobile-applications',
    forIndustries: ['Logistics', 'Non-profits', 'Healthcare'],
  },
];
