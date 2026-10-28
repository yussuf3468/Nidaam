/*
 * ILLUSTRATIVE CASE STUDIES
 * These are realistic examples of the systems Nidaam builds, written for launch.
 * They are not real client engagements: the organisations are unnamed and the
 * figures are representative. While `site.labelSampleContent` is true, the site
 * labels them "Illustrative". Replace them with real, client-approved work as
 * projects complete.
 */

export type MockVariant = 'school' | 'ops' | 'clinic' | 'booking' | 'dispatch' | 'field';

export type Metric = { value: number; decimals?: number; prefix?: string; suffix?: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  summary: string;
  challenge: { intro: string; points: string[] };
  solution: { intro: string; points: string[] };
  outcome: string;
  metrics: Metric[];
  technology: string[];
  timeline: string;
  phases: { name: string; duration: string }[];
  team: string;
  visual: MockVariant;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'school-group-platform',
    title: 'One platform for three campuses, from admissions to report cards',
    client: 'A private school group with three campuses in Nairobi',
    industry: 'education',
    services: ['school-management-systems', 'mobile-applications', 'managed-software-services'],
    summary:
      'Replacing spreadsheets, a legacy fees package and paper report cards with a single school platform and a parent app, with M-Pesa payments matched to learners automatically.',
    challenge: {
      intro:
        'Each campus kept its own records. Bursars downloaded M-Pesa statements every morning and matched payments to learners by hand, and report cards took teachers most of the last week of term.',
      points: [
        'Around 2,000 fee payments a month reconciled manually across three campuses',
        'Report cards assembled in spreadsheets and word processors',
        'Parents phoning or visiting the office for balances and results',
        'Directors waiting until month end for collections figures',
      ],
    },
    solution: {
      intro:
        'We built a school platform with a single data model for all three campuses and a parent app for Android and iOS, rolled out campus by campus over one term.',
      points: [
        'Unique paybill references per learner, with payments matched and receipted by SMS within seconds',
        'Configurable assessment and report card templates generated from marks already entered',
        'Parent app with balances, statements, results and announcements',
        'Group dashboard for enrolment, collections and arrears by campus',
      ],
    },
    outcome:
      'Fee reconciliation moved from a daily manual task to an automatic process reviewed by exception, and report cards are generated in hours rather than days.',
    metrics: [
      { value: 95, suffix: '%', label: 'of fee payments matched automatically' },
      { value: 4, suffix: ' days', label: 'of teacher time saved each term on report cards' },
      { value: 3, label: 'campuses on one platform' },
    ],
    technology: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'M-Pesa Daraja', 'SMS gateway'],
    timeline: '16 weeks',
    phases: [
      { name: 'Requirements & design', duration: '3 weeks' },
      { name: 'Build & integration', duration: '9 weeks' },
      { name: 'Migration & pilot campus', duration: '2 weeks' },
      { name: 'Roll-out & training', duration: '2 weeks' },
    ],
    team: 'Project lead, two full-stack developers, a mobile developer and a designer',
    visual: 'school',
  },
  {
    slug: 'retail-operations-platform',
    title: 'Live stock and sales across nine retail branches',
    client: 'A household goods retailer with nine branches',
    industry: 'retail',
    services: ['business-management-systems', 'business-automation', 'api-development'],
    summary:
      'Unifying POS, inventory, purchasing and finance for a growing retail chain, with M-Pesa reconciliation and electronic tax invoicing built in.',
    challenge: {
      intro:
        'Each branch ran its own POS. Head office consolidated sales from emailed spreadsheets, and nobody trusted the stock figures.',
      points: [
        'Stock variances discovered only at quarterly counts',
        'Purchasing decisions made on week-old data',
        'Till and M-Pesa takings reconciled by hand every evening',
        'No reliable margin figures by product or branch',
      ],
    },
    solution: {
      intro:
        'We built a business management system with central purchasing, live multi-branch stock and a fast POS that keeps selling through internet outages.',
      points: [
        'POS with offline mode and automatic sync when the connection returns',
        'Live stock, inter-branch transfers and reorder suggestions',
        'Automatic matching of M-Pesa and bank transactions to sales',
        'Margin, sales and stock-value dashboards by branch and category',
      ],
    },
    outcome:
      'Management now sees yesterday’s sales and today’s stock position each morning, and purchasing works from live data instead of guesses.',
    metrics: [
      { value: 9, label: 'branches on one live system' },
      { value: 38, suffix: '%', label: 'reduction in stock variances' },
      { value: 2, suffix: ' hrs', label: 'saved per branch, per day, on cash-up' },
    ],
    technology: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Flutter', 'M-Pesa Daraja', 'REST APIs'],
    timeline: '20 weeks',
    phases: [
      { name: 'Requirements & design', duration: '4 weeks' },
      { name: 'Build', duration: '11 weeks' },
      { name: 'Pilot branch', duration: '2 weeks' },
      { name: 'Phased roll-out', duration: '3 weeks' },
    ],
    team: 'Project lead, two backend developers, a full-stack developer and a QA engineer',
    visual: 'ops',
  },
  {
    slug: 'logistics-dispatch-platform',
    title: 'Dispatch, driver app and proof of delivery for a distribution fleet',
    client: 'A regional distributor running a fleet of 40 vehicles',
    industry: 'logistics',
    services: ['custom-software-development', 'mobile-applications', 'api-development'],
    summary:
      'Moving dispatch off whiteboards and phone calls onto a planning platform, with a driver app that captures photo and signature proof of delivery, even offline.',
    challenge: {
      intro:
        'Dispatchers planned routes on a whiteboard and coordinated drivers by phone. Delivery disputes were common and hard to settle.',
      points: [
        'No record of when, or whether, goods were delivered',
        'Customers calling repeatedly for delivery updates',
        'Fuel and vehicle costs impossible to attribute to routes',
        'Invoices delayed until paper delivery notes came back',
      ],
    },
    solution: {
      intro: 'We delivered a dispatch platform and an offline-capable driver app connected to the distributor’s order and invoicing systems.',
      points: [
        'Drag-and-drop dispatch board for orders, vehicles and drivers',
        'Driver app with job lists, navigation, photos and signatures',
        'Automatic SMS updates to customers at dispatch and delivery',
        'Invoices raised the moment a delivery is confirmed',
      ],
    },
    outcome: 'Every delivery now has a timestamped, photographed record, and invoicing starts the same day instead of the following week.',
    metrics: [
      { value: 60, suffix: '%', label: 'fewer delivery disputes' },
      { value: 5, suffix: ' days', label: 'faster from delivery to invoice' },
      { value: 40, label: 'vehicles managed in one view' },
    ],
    technology: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'SMS gateway', 'Maps API'],
    timeline: '14 weeks',
    phases: [
      { name: 'Requirements & design', duration: '3 weeks' },
      { name: 'Build', duration: '8 weeks' },
      { name: 'Pilot routes', duration: '2 weeks' },
      { name: 'Full fleet roll-out', duration: '1 week' },
    ],
    team: 'Project lead, a backend developer, a mobile developer and a designer',
    visual: 'dispatch',
  },
  {
    slug: 'clinic-network-patient-platform',
    title: 'Patient records, billing and insurance for a network of clinics',
    client: 'A network of five outpatient clinics',
    industry: 'healthcare',
    services: ['custom-software-development', 'cloud-solutions', 'managed-software-services'],
    summary:
      'A secure patient management platform covering registration, appointments, billing and insurance claims, hosted and supported under a managed services plan.',
    challenge: {
      intro:
        'Patient files were on paper at some clinics and in an ageing desktop system at others. Insurance claims were frequently returned for missing details.',
      points: [
        'Patients re-registered at every clinic they visited',
        'Insurance claims rejected for incomplete information',
        'No visibility of waiting times or revenue by clinic',
        'Backups taken irregularly to an external drive',
      ],
    },
    solution: {
      intro:
        'We built a cloud-hosted patient platform shared across all five clinics, with role-based access and an audit trail on every record.',
      points: [
        'Single patient record across clinics with consent tracking',
        'Appointments, queue management and SMS reminders',
        'Billing for cash, M-Pesa and insurance, with claim checks before submission',
        'Daily encrypted backups, restore-tested monthly',
      ],
    },
    outcome: 'Claims now pass completeness checks before they leave the clinic, and management sees patient volumes and revenue by clinic every day.',
    metrics: [
      { value: 45, suffix: '%', label: 'fewer insurance claims returned' },
      { value: 5, label: 'clinics sharing one patient record' },
      { value: 100, suffix: '%', label: 'of backups restore-tested monthly' },
    ],
    technology: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Cloud hosting', 'SMS gateway', 'Audit logging'],
    timeline: '18 weeks',
    phases: [
      { name: 'Requirements & data protection review', duration: '4 weeks' },
      { name: 'Build', duration: '10 weeks' },
      { name: 'Migration & testing', duration: '2 weeks' },
      { name: 'Clinic-by-clinic roll-out', duration: '2 weeks' },
    ],
    team: 'Project lead, two backend developers, a full-stack developer and a QA engineer',
    visual: 'clinic',
  },
  {
    slug: 'safari-operator-booking-engine',
    title: 'Direct online bookings for a safari and tour operator',
    client: 'A Nairobi-based safari and tour operator',
    industry: 'travel-tourism',
    services: ['website-design-development', 'custom-software-development', 'api-development'],
    summary:
      'A new website with a booking engine, an itinerary builder for the sales team and multi-currency payments, reducing reliance on third-party booking platforms.',
    challenge: {
      intro:
        'Every enquiry became a long email thread. The sales team rebuilt itineraries by hand, and most bookings came through platforms charging high commissions.',
      points: [
        'Quotes taking a day or more to prepare',
        'Availability tracked in spreadsheets and emails to lodges',
        'Payments in shillings, dollars and euros reconciled manually',
        'An outdated website that was slow on mobile',
      ],
    },
    solution: {
      intro: 'We built a fast website with live departures and online deposits, and an internal itinerary builder connected to supplier rates.',
      points: [
        'Booking engine with deposits by card and M-Pesa',
        'Itinerary builder producing branded quotes in minutes',
        'Supplier rate and allocation management',
        'Multi-currency payments reconciled automatically',
      ],
    },
    outcome: 'Quotes are produced in minutes, and a growing share of bookings arrive directly through the operator’s own website.',
    metrics: [
      { value: 80, suffix: '%', label: 'faster quote preparation' },
      { value: 3, label: 'currencies reconciled automatically' },
      { value: 92, label: 'mobile Lighthouse performance score' },
    ],
    technology: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Payment gateway', 'M-Pesa Daraja'],
    timeline: '12 weeks',
    phases: [
      { name: 'Requirements & design', duration: '3 weeks' },
      { name: 'Website & booking engine', duration: '6 weeks' },
      { name: 'Itinerary builder', duration: '2 weeks' },
      { name: 'Launch & training', duration: '1 week' },
    ],
    team: 'Project lead, a full-stack developer, a designer and a copywriter',
    visual: 'booking',
  },
  {
    slug: 'ngo-field-data-platform',
    title: 'Offline field data and donor reporting for a community health programme',
    client: 'A non-profit running community health programmes in four counties',
    industry: 'non-profits',
    services: ['mobile-applications', 'ai-integration', 'business-automation'],
    summary:
      'An offline-first mobile app for field officers, a programme dashboard and AI-assisted drafting of donor reports, replacing paper forms and manual compilation.',
    challenge: {
      intro:
        'Field officers recorded visits on paper. Data was typed up weeks later, and quarterly donor reports took the programme team most of a month.',
      points: [
        'Weeks of delay between a field visit and usable data',
        'Transcription errors in beneficiary records',
        'Donor reports compiled manually from spreadsheets',
        'Sensitive personal data stored in shared folders',
      ],
    },
    solution: {
      intro:
        'We built an offline-first field app, a secure programme database and dashboards, plus an AI step that drafts report narratives for staff to review.',
      points: [
        'Offline forms with GPS and photos, synced when officers reach coverage',
        'Role-based beneficiary records with consent tracking',
        'Live indicator dashboards for programme managers',
        'AI-drafted report narratives, always reviewed and approved by staff',
      ],
    },
    outcome: 'Field data reaches the programme team within a day, and quarterly reports start from a reviewed draft rather than a blank page.',
    metrics: [
      { value: 1, suffix: ' day', label: 'from field visit to dashboard' },
      { value: 70, suffix: '%', label: 'less time compiling donor reports' },
      { value: 4, label: 'counties covered offline' },
    ],
    technology: ['Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'LLM APIs', 'Offline sync'],
    timeline: '15 weeks',
    phases: [
      { name: 'Requirements & data protection review', duration: '3 weeks' },
      { name: 'Build', duration: '9 weeks' },
      { name: 'Field pilot', duration: '2 weeks' },
      { name: 'Roll-out & training', duration: '1 week' },
    ],
    team: 'Project lead, a mobile developer, a backend developer and a designer',
    visual: 'field',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const featuredCaseStudies = ['school-group-platform', 'retail-operations-platform', 'logistics-dispatch-platform']
  .map(getCaseStudy)
  .filter((c): c is CaseStudy => Boolean(c));
