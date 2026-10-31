/*
 * EXAMPLE PROJECTS
 * These describe the kinds of systems Nidaam Solutions builds and how we would approach
 * them. They are not client engagements and deliberately contain no results figures or
 * client quotes. Replace or add real, client-approved case studies (with measured
 * results) as projects complete.
 */

export type MockVariant = 'school' | 'ops' | 'clinic' | 'booking' | 'dispatch' | 'field';

export type CaseStudy = {
  slug: string;
  title: string;
  /** The kind of organisation the example is written for. */
  client: string;
  industry: string;
  services: string[];
  summary: string;
  challenge: { intro: string; points: string[] };
  solution: { intro: string; points: string[] };
  /** What the system is designed to achieve. */
  designedTo: string;
  /** How success would be measured with the client. */
  measures: string[];
  technology: string[];
  /** A typical timeline for a project of this size. */
  timeline: string;
  phases: { name: string; duration: string }[];
  team: string;
  visual: MockVariant;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'school-group-platform',
    title: 'One platform for a multi-campus school, from admissions to report cards',
    client: 'A private school group with several campuses',
    industry: 'education',
    services: ['school-management-systems', 'mobile-applications', 'managed-software-services'],
    summary:
      'How we would replace spreadsheets, an old fees package and paper report cards with one school platform and a parent app, with M-Pesa payments matched to learners automatically.',
    challenge: {
      intro:
        'A common picture: each campus keeps its own records, bursars match M-Pesa statements to learners by hand every morning, and report cards take teachers most of the last week of term.',
      points: [
        'Fee payments reconciled manually across campuses',
        'Report cards assembled in spreadsheets and word processors',
        'Parents phoning or visiting the office for balances and results',
        'Directors waiting until month end for collections figures',
      ],
    },
    solution: {
      intro: 'A school platform with one data model for every campus and a parent app for Android and iOS, rolled out campus by campus.',
      points: [
        'A unique paybill reference per learner, with payments matched and receipted by SMS',
        'Configurable assessment and report card templates generated from marks already entered',
        'A parent app with balances, statements, results and announcements',
        'A group dashboard for enrolment, collections and arrears by campus',
      ],
    },
    designedTo:
      'Turn fee reconciliation into an automatic process that staff review only by exception, and produce report cards in hours instead of days.',
    measures: [
      'Share of fee payments matched without manual work',
      'Teacher time spent compiling report cards each term',
      'Calls and visits to the office about balances',
    ],
    technology: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'M-Pesa Daraja', 'SMS gateway'],
    timeline: 'About 16 weeks',
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
    title: 'Live stock and sales across a multi-branch retailer',
    client: 'A retailer with several branches',
    industry: 'retail',
    services: ['business-management-systems', 'business-automation', 'api-development'],
    summary:
      'How we would unify POS, inventory, purchasing and finance for a growing retail chain, with M-Pesa reconciliation and electronic tax invoicing built in.',
    challenge: {
      intro: 'Each branch runs its own POS, head office consolidates sales from emailed spreadsheets, and nobody fully trusts the stock figures.',
      points: [
        'Stock variances discovered only at periodic counts',
        'Purchasing decisions made on week-old data',
        'Till and M-Pesa takings reconciled by hand every evening',
        'No reliable margin figures by product or branch',
      ],
    },
    solution: {
      intro: 'A business management system with central purchasing, live multi-branch stock and a POS that keeps selling through internet outages.',
      points: [
        'POS with offline mode and automatic sync when the connection returns',
        'Live stock, inter-branch transfers and reorder suggestions',
        'Automatic matching of M-Pesa and bank transactions to sales',
        'Margin, sales and stock-value dashboards by branch and category',
      ],
    },
    designedTo: 'Give management yesterday’s sales and today’s stock position every morning, so purchasing works from live data.',
    measures: ['Stock variance at counts', 'Time spent on daily cash-up per branch', 'Time from sale to management report'],
    technology: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Flutter', 'M-Pesa Daraja', 'REST APIs'],
    timeline: 'About 20 weeks',
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
    client: 'A distributor running its own fleet',
    industry: 'logistics',
    services: ['custom-software-development', 'mobile-applications', 'api-development'],
    summary:
      'How we would move dispatch off whiteboards and phone calls onto a planning platform, with a driver app that captures photo and signature proof of delivery, even offline.',
    challenge: {
      intro: 'Dispatchers plan routes on a whiteboard and coordinate drivers by phone. Delivery disputes are common and hard to settle.',
      points: [
        'No reliable record of when, or whether, goods were delivered',
        'Customers calling repeatedly for delivery updates',
        'Fuel and vehicle costs hard to attribute to routes',
        'Invoices delayed until paper delivery notes come back',
      ],
    },
    solution: {
      intro: 'A dispatch platform and an offline-capable driver app connected to the order and invoicing systems.',
      points: [
        'A dispatch board for orders, vehicles and drivers',
        'A driver app with job lists, navigation, photos and signatures',
        'Automatic SMS updates to customers at dispatch and delivery',
        'Invoices raised as soon as a delivery is confirmed',
      ],
    },
    designedTo: 'Give every delivery a timestamped, photographed record and start invoicing the same day.',
    measures: ['Number of delivery disputes', 'Days from delivery to invoice', 'Customer calls asking for updates'],
    technology: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'SMS gateway', 'Maps API'],
    timeline: 'About 14 weeks',
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
    title: 'Patient records, billing and insurance for a group of clinics',
    client: 'A group of outpatient clinics',
    industry: 'healthcare',
    services: ['custom-software-development', 'cloud-solutions', 'managed-software-services'],
    summary:
      'How we would build a secure patient platform covering registration, appointments, billing and insurance claims, hosted and supported under a managed services plan.',
    challenge: {
      intro: 'Patient files are on paper at some clinics and in an ageing desktop system at others, and insurance claims are often returned for missing details.',
      points: [
        'Patients re-registered at every clinic they visit',
        'Insurance claims returned for incomplete information',
        'No view of waiting times or revenue by clinic',
        'Backups taken irregularly to an external drive',
      ],
    },
    solution: {
      intro: 'A cloud-hosted patient platform shared across clinics, with role-based access and an audit trail on every record.',
      points: [
        'One patient record across clinics, with consent tracking',
        'Appointments, queue management and SMS reminders',
        'Billing for cash, M-Pesa and insurance, with claim checks before submission',
        'Daily encrypted backups, restore-tested regularly',
      ],
    },
    designedTo: 'Make sure claims pass completeness checks before they leave the clinic, and give management daily figures by clinic.',
    measures: ['Share of insurance claims returned', 'Patient waiting times', 'Successful restore tests'],
    technology: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Cloud hosting', 'SMS gateway', 'Audit logging'],
    timeline: 'About 18 weeks',
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
    client: 'A safari and tour operator',
    industry: 'travel-tourism',
    services: ['website-design-development', 'custom-software-development', 'api-development'],
    summary:
      'How we would build a website with a booking engine, an itinerary builder for the sales team and multi-currency payments, to win more bookings directly.',
    challenge: {
      intro: 'Every enquiry becomes a long email thread, itineraries are rebuilt by hand, and many bookings come through platforms that charge high commissions.',
      points: [
        'Quotes taking a day or more to prepare',
        'Availability tracked in spreadsheets and emails to lodges',
        'Payments in several currencies reconciled manually',
        'An outdated website that is slow on mobile',
      ],
    },
    solution: {
      intro: 'A fast website with live departures and online deposits, and an internal itinerary builder connected to supplier rates.',
      points: [
        'A booking engine with deposits by card and M-Pesa',
        'An itinerary builder producing branded quotes from reusable components',
        'Supplier rate and allocation management',
        'Multi-currency payments reconciled automatically',
      ],
    },
    designedTo: 'Shorten the time from enquiry to quote and make the operator’s own website a real booking channel.',
    measures: ['Time to prepare a quote', 'Share of bookings made directly', 'Mobile page speed'],
    technology: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Payment gateway', 'M-Pesa Daraja'],
    timeline: 'About 12 weeks',
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
    title: 'Offline field data and donor reporting for a community programme',
    client: 'A non-profit running field programmes',
    industry: 'non-profits',
    services: ['mobile-applications', 'ai-integration', 'business-automation'],
    summary:
      'How we would replace paper forms and manual compilation with an offline-first field app, a programme dashboard and AI-assisted drafting of donor reports.',
    challenge: {
      intro: 'Field officers record visits on paper, data is typed up weeks later, and quarterly donor reports take the programme team weeks to compile.',
      points: [
        'Long delays between a field visit and usable data',
        'Transcription errors in beneficiary records',
        'Donor reports compiled manually from spreadsheets',
        'Sensitive personal data stored in shared folders',
      ],
    },
    solution: {
      intro: 'An offline-first field app, a secure programme database and dashboards, plus an AI step that drafts report narratives for staff to review.',
      points: [
        'Offline forms with GPS and photos, synced when officers reach coverage',
        'Role-based beneficiary records with consent tracking',
        'Live indicator dashboards for programme managers',
        'AI-drafted report narratives, always reviewed and approved by staff',
      ],
    },
    designedTo: 'Get field data to the programme team within a day and start every donor report from a reviewed draft.',
    measures: ['Time from field visit to dashboard', 'Staff time spent compiling donor reports', 'Data entry errors'],
    technology: ['Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'LLM APIs', 'Offline sync'],
    timeline: 'About 15 weeks',
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
