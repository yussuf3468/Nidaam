import type { IconName } from '@/components/icons';

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  headline: string;
  summary: string;
  challenges: string[];
  builds: { title: string; body: string }[];
  modules: string[];
  relatedServices: string[];
  caseStudy?: string;
};

/** Industries from the capability statement (edition October 2026). */
export const industries: Industry[] = [
  {
    slug: 'education',
    name: 'Education',
    icon: 'graduation',
    headline: 'Systems that let schools focus on teaching.',
    summary:
      'From single schools to multi-campus groups and colleges, we build platforms that handle admissions, fees, assessment and parent communication, so staff spend less time on paperwork.',
    challenges: [
      'Fee payments arrive through M-Pesa and banks and are matched by hand',
      'Report cards take days to compile at the end of every term',
      'Parents queue at the office for balances, results and updates',
    ],
    builds: [
      { title: 'School management system', body: 'Admissions, learner records, fees, assessment, attendance and timetables in one platform.' },
      { title: 'Parent app', body: 'Balances, results, announcements and calendars on every parent’s phone.' },
      { title: 'Educational website', body: 'A fast, credible website with online applications and news.' },
      { title: 'Group dashboards', body: 'Collections, enrolment and performance across campuses.' },
    ],
    modules: ['Admissions', 'Fees & M-Pesa', 'Assessment', 'Report cards', 'Attendance', 'Timetables', 'Transport', 'Parent app'],
    relatedServices: ['school-management-systems', 'mobile-applications', 'website-design-development'],
    caseStudy: 'school-group-platform',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'stethoscope',
    headline: 'Clinical operations that run on accurate records.',
    summary:
      'For clinics, medical centres, pharmacies and laboratories: patient records, appointments, billing and insurance workflows, built with the confidentiality health data demands.',
    challenges: [
      'Patient files on paper or scattered across disconnected systems',
      'Insurance claims rejected for missing or inconsistent information',
      'No clear view of revenue, waiting times or stock across branches',
    ],
    builds: [
      { title: 'Patient management', body: 'Registration, records, appointments and queue management.' },
      { title: 'Billing and claims', body: 'Cash, M-Pesa and insurance billing with claim preparation and tracking.' },
      { title: 'Pharmacy and inventory', body: 'Dispensing, stock levels, expiry tracking and reordering.' },
      { title: 'Management reporting', body: 'Revenue, patient volumes and waiting times by branch.' },
    ],
    modules: ['Registration', 'Appointments', 'Patient records', 'Billing', 'Insurance claims', 'Pharmacy', 'Laboratory', 'Reports'],
    relatedServices: ['custom-software-development', 'managed-software-services', 'cloud-solutions'],
    caseStudy: 'clinic-network-patient-platform',
  },
  {
    slug: 'travel-tourism',
    name: 'Travel & Tourism',
    icon: 'plane',
    headline: 'Bookings, itineraries and payments without the spreadsheet juggling.',
    summary:
      'For tour operators, travel agencies and safari companies: booking platforms, itinerary builders, supplier management and multi-currency payments that turn enquiries into confirmed trips faster.',
    challenges: [
      'Quotes and itineraries rebuilt by hand for every enquiry',
      'Availability and supplier confirmations tracked over email',
      'Payments in several currencies reconciled manually',
    ],
    builds: [
      { title: 'Booking platform', body: 'Online availability, booking and deposit payments.' },
      { title: 'Itinerary builder', body: 'Professional quotes and itineraries generated from reusable components.' },
      { title: 'Supplier management', body: 'Rates, allocations and confirmations in one place.' },
      { title: 'Booking app', body: 'Trip details, documents and updates for travellers.' },
    ],
    modules: ['Online booking', 'Itineraries', 'Quotes', 'Suppliers', 'Multi-currency', 'Payments', 'Traveller app'],
    relatedServices: ['custom-software-development', 'website-design-development', 'api-development'],
    caseStudy: 'safari-operator-booking-engine',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: 'bed',
    headline: 'Guest experiences backed by well-run operations.',
    summary:
      'For hotels, lodges, restaurants and serviced apartments: reservations, POS, inventory and guest communication connected, so every department works from the same information.',
    challenges: [
      'Reservations, front office and restaurant POS do not talk to each other',
      'Stock losses in kitchens and bars are hard to trace',
      'Direct bookings lose out to commission-charging platforms',
    ],
    builds: [
      { title: 'Reservations and direct booking', body: 'A booking engine on your own website with secure payments.' },
      { title: 'POS and inventory', body: 'Restaurant and bar POS linked to stock and recipes.' },
      { title: 'Guest communication', body: 'Confirmations, reminders and feedback by SMS, email and WhatsApp.' },
      { title: 'Operations dashboards', body: 'Occupancy, revenue and costs by outlet.' },
    ],
    modules: ['Reservations', 'Direct booking', 'POS', 'Inventory', 'Housekeeping', 'Guest messaging', 'Reports'],
    relatedServices: ['business-management-systems', 'website-design-development', 'digital-marketing'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    icon: 'store',
    headline: 'Every branch, every shelf, every shilling, in view.',
    summary:
      'For shops, supermarkets, distributors and growing chains: POS, inventory, purchasing and e-commerce connected in one system, with M-Pesa and electronic tax invoicing built in.',
    challenges: [
      'Stock counts that never match the system',
      'No reliable view of margins by product or branch',
      'Online and in-store sales tracked separately',
    ],
    builds: [
      { title: 'POS and inventory', body: 'Fast point of sale linked to live, multi-branch stock.' },
      { title: 'Purchasing', body: 'Reorder levels, purchase orders and supplier records.' },
      { title: 'E-commerce', body: 'An online shop sharing stock and prices with your branches.' },
      { title: 'Management dashboards', body: 'Sales, margins and stock value by branch and product.' },
    ],
    modules: ['POS', 'Inventory', 'Purchasing', 'Transfers', 'M-Pesa', 'eTIMS invoicing', 'E-commerce', 'Loyalty'],
    relatedServices: ['business-management-systems', 'website-design-development', 'business-automation'],
    caseStudy: 'retail-operations-platform',
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    icon: 'truck',
    headline: 'Dispatch, track and prove every delivery.',
    summary:
      'For transporters, couriers and distributors: dispatch planning, driver apps, proof of delivery and customer tracking that make every movement visible.',
    challenges: [
      'Dispatch planned on whiteboards and phone calls',
      'Disputes over deliveries with no proof to settle them',
      'Customers calling to ask where their goods are',
    ],
    builds: [
      { title: 'Dispatch platform', body: 'Orders, routes and vehicle assignments planned in one screen.' },
      { title: 'Driver app', body: 'Jobs, navigation, photos and signatures, even offline.' },
      { title: 'Customer tracking', body: 'Live status and delivery confirmations by SMS.' },
      { title: 'Fleet reporting', body: 'Deliveries, costs and performance by vehicle and driver.' },
    ],
    modules: ['Orders', 'Dispatch', 'Driver app', 'Proof of delivery', 'Tracking', 'Fleet', 'Invoicing'],
    relatedServices: ['custom-software-development', 'mobile-applications', 'api-development'],
    caseStudy: 'logistics-dispatch-platform',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: 'briefcase',
    headline: 'Less admin, more billable work.',
    summary:
      'For consultancies, law firms, accountants and agencies: client portals, matter and project tracking, time capture and document workflows that protect your hours.',
    challenges: [
      'Time and expenses captured late, or not at all',
      'Client documents exchanged over email and lost in inboxes',
      'Proposals and engagement letters assembled by hand',
    ],
    builds: [
      { title: 'Client portal', body: 'Secure document exchange, updates and invoices in one place.' },
      { title: 'Project and matter tracking', body: 'Work, deadlines and responsibilities visible to the whole team.' },
      { title: 'Time and billing', body: 'Simple time capture that flows into accurate invoices.' },
      { title: 'Document automation', body: 'Proposals, letters and reports generated from templates.' },
    ],
    modules: ['Client portal', 'Projects', 'Time tracking', 'Billing', 'Documents', 'Approvals', 'Reports'],
    relatedServices: ['custom-software-development', 'business-automation', 'it-consulting-digital-setup'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: 'house',
    headline: 'Properties, tenants and payments under control.',
    summary:
      'For property managers, agencies and developers: listings, tenant and lease management, rent collection through M-Pesa and maintenance requests in one system.',
    challenges: [
      'Rent payments matched to tenants by hand every month',
      'Maintenance requests lost in phone calls and messages',
      'Listings and enquiries scattered across platforms',
    ],
    builds: [
      { title: 'Property management', body: 'Units, tenants, leases and arrears in one place.' },
      { title: 'Rent collection', body: 'M-Pesa collections matched to tenants automatically, with receipts.' },
      { title: 'Tenant portal', body: 'Statements, notices and maintenance requests online.' },
      { title: 'Listings website', body: 'A fast property website that captures and routes enquiries.' },
    ],
    modules: ['Units', 'Tenants', 'Leases', 'Rent collection', 'Maintenance', 'Listings', 'Owner reports'],
    relatedServices: ['custom-software-development', 'website-design-development', 'api-development'],
  },
  {
    slug: 'media-events',
    name: 'Media & Events',
    icon: 'calendar',
    headline: 'Sell out events and run them smoothly.',
    summary:
      'For event organisers, venues and media houses: ticketing, registration, check-in, sponsor management and the video and content that fill the seats.',
    challenges: [
      'Ticket sales and guest lists managed in spreadsheets',
      'Slow check-in queues at the door',
      'Promotion that does not reach the right audience',
    ],
    builds: [
      { title: 'Ticketing and registration', body: 'Online sales with M-Pesa, QR tickets and attendee data.' },
      { title: 'Check-in app', body: 'Fast QR scanning at the gate, even offline.' },
      { title: 'Event websites', body: 'Speakers, schedules and sponsors presented properly.' },
      { title: 'Video and promotion', body: 'Promotional videos, reels and campaigns that drive sales.' },
    ],
    modules: ['Ticketing', 'Registration', 'QR check-in', 'Sponsors', 'Schedules', 'Promotion'],
    relatedServices: ['mobile-applications', 'video-editing-production', 'digital-marketing'],
  },
  {
    slug: 'non-profits',
    name: 'Non-Profit Organisations',
    icon: 'heartHandshake',
    headline: 'Programme data you can trust, reports donors can read.',
    summary:
      'For NGOs, foundations and community organisations: offline field data collection, beneficiary records, programme dashboards and donor reporting, with careful handling of personal data.',
    challenges: [
      'Field data collected on paper and typed up weeks later',
      'Donor reports assembled manually from several sources',
      'Sensitive beneficiary information stored insecurely',
    ],
    builds: [
      { title: 'Field data app', body: 'Offline forms with GPS and photos that sync when back in coverage.' },
      { title: 'Beneficiary records', body: 'Secure, role-based records with consent tracking.' },
      { title: 'Programme dashboards', body: 'Indicators and progress against targets, updated as data arrives.' },
      { title: 'Donor reporting', body: 'Reports generated from live data in the formats donors expect.' },
    ],
    modules: ['Field forms', 'Offline sync', 'Beneficiaries', 'Indicators', 'Dashboards', 'Donor reports'],
    relatedServices: ['mobile-applications', 'ai-integration', 'business-automation'],
    caseStudy: 'ngo-field-data-platform',
  },
  {
    slug: 'smes',
    name: 'Small & Medium Businesses',
    icon: 'building',
    headline: 'Big-company systems, sized for growing businesses.',
    summary:
      'For SMEs ready to move beyond spreadsheets and WhatsApp groups: professional websites, business email, simple management systems and automation that grow with you.',
    challenges: [
      'The business runs on the owner’s phone and memory',
      'No professional online presence or business email',
      'Growth limited by manual processes',
    ],
    builds: [
      { title: 'Digital setup', body: 'Domain, business email and Google Workspace or Microsoft 365.' },
      { title: 'Business website', body: 'A fast, credible website that brings in enquiries.' },
      { title: 'Business management system', body: 'Sales, stock and customers in one simple system.' },
      { title: 'Automation', body: 'Invoices, reminders and reports that run themselves.' },
    ],
    modules: ['Website', 'Business email', 'Sales', 'Inventory', 'Invoicing', 'M-Pesa', 'Reports'],
    relatedServices: ['it-consulting-digital-setup', 'website-design-development', 'business-management-systems'],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
