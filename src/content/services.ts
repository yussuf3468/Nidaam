import type { IconName } from '@/components/icons';

/*
 * Service catalogue, aligned with the Nidaam Solutions Capability Statement
 * (edition October 2026). Every service is quotation-based except the monthly
 * subscriptions under Managed Software Services.
 */

export type ServiceGroup = 'build' | 'connect' | 'run' | 'creative';

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  icon: IconName;
  /** One line for cards and the mega menu. */
  tagline: string;
  /** Page H1. */
  headline: string;
  summary: string;
  overview: string[];
  /** What the service covers, as named in the capability statement. */
  includes: string[];
  features: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
  deliverables: string[];
  stack: string[];
  relatedCaseStudies: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  pricing: 'Quotation based' | 'Monthly subscription';
  flagship?: boolean;
};

export const serviceGroups: Record<ServiceGroup, { label: string; description: string }> = {
  build: { label: 'Build', description: 'Systems, platforms and apps' },
  connect: { label: 'Automate & integrate', description: 'Workflows, AI and APIs' },
  run: { label: 'Run & advise', description: 'Cloud, setup and long-term care' },
  creative: { label: 'Creative & marketing', description: 'Brand, content and growth' },
};

export const groupOrder: ServiceGroup[] = ['build', 'connect', 'run', 'creative'];

const ownership = {
  question: 'Do we own what you build?',
  answer:
    'Yes. On full payment, the source code and all rights in the work made for you are yours, handed over in a repository you control, together with accounts, domains, credentials and documentation.',
};

const warranty = {
  question: 'What happens if something is wrong after launch?',
  answer:
    'Every project carries a written 30-day warranty from acceptance: anything that does not match the agreed scope is fixed free of charge. After that, a managed services plan keeps the system supported, secure and current.',
};

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    group: 'build',
    icon: 'code',
    tagline: 'Software shaped around how your organisation actually works.',
    headline: 'Custom software, engineered around your operations.',
    summary:
      'When off-the-shelf tools force your team into workarounds, we design and build software that fits the way you operate, then stay on to support it. Written scope, milestone delivery and code you own outright.',
    overview: [
      'Most organisations do not need more software. They need fewer, better systems: ones that remove double entry, connect the tools they already rely on and give leadership numbers they can trust.',
      'Every engagement starts with the process, not the code. We learn who does what, where data originates and where it breaks. Then we agree the features, data and integrations in writing, and build in stages you can see and test.',
    ],
    includes: [
      'Business management systems',
      'School management systems',
      'Booking platforms',
      'Customer portals',
      'Inventory systems',
      'POS systems',
      'Internal business applications',
      'Web dashboards',
    ],
    features: [
      {
        title: 'Requirements, in writing',
        body: 'Workshops with the people who will use the system, followed by a solution design that sets out features, data and integrations before any code is written.',
      },
      {
        title: 'Modular architecture',
        body: 'Clean, documented modules that extend without rewrites as you add branches, products or teams.',
      },
      {
        title: 'Roles, approvals and audit trails',
        body: 'Granular permissions and a full history of who changed what, matched to your reporting lines and internal controls.',
      },
      {
        title: 'Integrations done properly',
        body: 'M-Pesa, payment gateways, SMS and email, accounting packages and third-party APIs, connected with retries and reconciliation.',
      },
      {
        title: 'Reporting you can defend',
        body: 'Dashboards and exports built on a sound data model, so the figures in a board pack match the figures in the system.',
      },
      {
        title: 'Documentation and training',
        body: 'Technical documentation, a user guide and hands-on training for your team, delivered with the software.',
      },
    ],
    benefits: [
      { title: 'Less manual work', body: 'Automated entry, routing and approvals free your team for work that needs judgement.' },
      { title: 'One source of truth', body: 'Operations, finance and management read from the same data, in real time.' },
      { title: 'No lock-in', body: 'You own the source code, the data and the accounts. Everything is documented.' },
      { title: 'Built to be maintained', body: 'Version control, peer review and testing on every change keep the system healthy for years.' },
    ],
    deliverables: [
      'Solution design: features, data and integrations',
      'Approved UI/UX designs for the key screens',
      'Production application with an admin console',
      'Testing by Nidaam, then client acceptance',
      'Deployment on secure hosting, on your domain',
      'Training sessions and a user guide',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Supabase', 'REST APIs', 'Git & GitHub'],
    relatedCaseStudies: ['retail-operations-platform', 'logistics-dispatch-platform'],
    faqs: [
      {
        question: 'How long does a custom software project take?',
        answer:
          'It depends on scope. A focused internal tool can take a few weeks; a multi-module business system takes a few months. Work is delivered in stages, each demonstrated to you, so you see progress long before launch.',
      },
      ownership,
      {
        question: 'Can you work with the systems we already have?',
        answer:
          'Usually, yes. We integrate with accounting packages, payment providers and existing databases through their APIs, or through carefully controlled data migration where no API exists.',
      },
    ],
    keywords: ['custom software development Kenya', 'software development company Nairobi', 'bespoke software Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'business-management-systems',
    title: 'Business Management Systems',
    group: 'build',
    icon: 'dashboard',
    tagline: 'Sales, stock, finance and people in one dependable system.',
    headline: 'One system for sales, stock, finance and people.',
    summary:
      'We build business management systems that replace scattered spreadsheets and single-purpose apps with one dependable platform for sales, purchasing, inventory, POS, HR and reporting, configured to the way you work.',
    overview: [
      'Growing businesses accumulate tools: a POS here, a spreadsheet for stock there, WhatsApp groups for approvals and an accountant reconciling it all at month end. Each tool works; together they leak time, money and visibility.',
      'We consolidate those processes into one system with a single data model. Branch managers see their numbers, finance sees every shilling, and leadership sees the whole business, from the same source.',
    ],
    includes: ['Sales and invoicing', 'Inventory systems', 'POS systems', 'Purchasing and suppliers', 'HR and payroll inputs', 'Management dashboards'],
    features: [
      {
        title: 'Sales, POS and invoicing',
        body: 'Point of sale, quotes, orders, invoices and customer statements, with electronic tax invoicing support for KRA eTIMS.',
      },
      {
        title: 'Inventory and purchasing',
        body: 'Multi-branch stock, reorder levels, purchase orders, goods received notes and supplier records.',
      },
      {
        title: 'Finance and reconciliation',
        body: 'M-Pesa and bank transactions matched to invoices, expense approvals and clean exports for your accountant.',
      },
      {
        title: 'People and payroll inputs',
        body: 'Staff records, leave and attendance, with payroll inputs and statutory reports for PAYE, NSSF, SHIF and the Housing Levy.',
      },
      {
        title: 'Multi-branch control',
        body: 'Branch-level permissions, stock transfers and consolidated reporting across locations.',
      },
      {
        title: 'Management dashboards',
        body: 'Sales, margins, stock value and cash position, updated live rather than compiled at month end.',
      },
    ],
    benefits: [
      { title: 'Live visibility', body: 'Know today’s sales, stock and cash position without waiting for month end.' },
      { title: 'Stronger controls', body: 'Approvals, segregation of duties and audit trails reduce leakage and fraud.' },
      { title: 'Faster month end', body: 'Reconciliation happens continuously instead of in a last-week rush.' },
      { title: 'Ready to grow', body: 'Open a new branch by configuring it, not by building another spreadsheet.' },
    ],
    deliverables: [
      'Process review for each department',
      'Configured modules with role-based access',
      'Data migration from spreadsheets and old tools',
      'Payment and accounting integrations',
      'Dashboards for management and branches',
      'Staff training and a user guide',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Supabase', 'M-Pesa', 'REST APIs'],
    relatedCaseStudies: ['retail-operations-platform'],
    faqs: [
      {
        question: 'Why not buy an off-the-shelf system?',
        answer:
          'Sometimes you should, and we will tell you so. Packaged software suits organisations that can adapt to standard processes. When your workflows are your advantage, or licence and customisation costs outweigh the benefit, a system built around your operations is usually quicker to adopt and cheaper to own.',
      },
      {
        question: 'Can it handle several branches?',
        answer: 'Yes. Multi-branch structures are designed into the data model from the start, with per-branch and consolidated reporting.',
      },
      {
        question: 'Will it work with our accountant’s software?',
        answer: 'Yes. We integrate with common accounting packages or produce exports in the format your accountant already uses.',
      },
    ],
    keywords: ['business management system Kenya', 'inventory management system Nairobi', 'POS system Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'school-management-systems',
    title: 'School Management Systems',
    group: 'build',
    icon: 'graduation',
    tagline: 'Admissions to report cards, fees to parent updates, in one platform.',
    headline: 'School management systems that give time back to teachers.',
    summary:
      'A complete platform for schools and school groups: admissions, learner records, fees and M-Pesa collections, timetables, assessment and report cards, and a parent app that keeps families informed.',
    overview: [
      'Schools run on information: who is enrolled, who has paid, who attended and how each learner is progressing. When that information lives in registers, spreadsheets and the bursar’s memory, teachers spend evenings on admin and parents queue for answers.',
      'We build school platforms that hold that information once and put it to work: fees matched automatically, report cards generated from assessments already entered, and parents updated on their phones.',
    ],
    includes: ['Admissions and enrolment', 'Fees and M-Pesa collections', 'Assessment and report cards', 'Attendance and timetables', 'Parent and learner app', 'Multi-campus reporting'],
    features: [
      {
        title: 'Admissions and enrolment',
        body: 'Online applications, interview scheduling, offer letters and enrolment, with documents stored securely.',
      },
      {
        title: 'Fees and M-Pesa collections',
        body: 'Each learner gets a unique paybill reference. Payments are matched automatically, balances update instantly and receipts go out by SMS.',
      },
      {
        title: 'Assessment and report cards',
        body: 'Configurable for competency-based assessment and traditional exams, with rubrics, analysis and print-ready report cards.',
      },
      {
        title: 'Attendance and timetables',
        body: 'Daily registers on any device, absence alerts to parents and clash-free timetables.',
      },
      {
        title: 'Parent and learner app',
        body: 'Fee statements, results, announcements and the school calendar in one place, on Android and iOS.',
      },
      {
        title: 'Multi-campus reporting',
        body: 'Group-level dashboards for enrolment, collections and performance across every campus.',
      },
    ],
    benefits: [
      { title: 'Same-day reconciliation', body: 'Bursars stop matching M-Pesa statements by hand.' },
      { title: 'Fewer queues', body: 'Parents check balances and results on their phones instead of at the office.' },
      { title: 'More teaching time', body: 'Report cards assemble themselves from marks already entered.' },
      { title: 'Leadership insight', body: 'Directors see collections, enrolment and results across campuses in real time.' },
    ],
    deliverables: [
      'Configured school platform with web administration',
      'Parent app for Android and iOS',
      'Migration of learner, fee and staff records',
      'M-Pesa paybill and SMS integration',
      'Training for bursars, teachers and administrators',
      'Support through the first full term',
    ],
    stack: ['Next.js', 'Flutter', 'Node.js', 'PostgreSQL', 'Supabase', 'M-Pesa', 'SMS gateway'],
    relatedCaseStudies: ['school-group-platform'],
    faqs: [
      {
        question: 'Does it support competency-based assessment?',
        answer:
          'Yes. Assessment structures, rubrics and report card layouts are configurable, so the platform supports competency-based assessment alongside traditional exams and can adapt as Ministry of Education requirements change.',
      },
      {
        question: 'Can parents pay fees through M-Pesa?',
        answer:
          'Yes. Each learner has a unique account reference on the school’s paybill. Payments are matched to the right learner automatically and an SMS receipt follows within seconds.',
      },
      {
        question: 'How do you move our existing records across?',
        answer:
          'We import learner, guardian, fee and staff records from your current system or spreadsheets, check them with your team, and run old and new side by side until the balances agree.',
      },
    ],
    keywords: ['school management system Kenya', 'school ERP Kenya', 'school fees M-Pesa system'],
    pricing: 'Quotation based',
  },
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    group: 'build',
    icon: 'website',
    tagline: 'Fast, secure websites that turn visitors into enquiries.',
    headline: 'Websites built for performance, security and growth.',
    summary:
      'Corporate, business, educational and e-commerce websites, landing pages, redesigns and optimisation: designed with intent, fast on mobile networks, secure by default and easy for your team to update.',
    overview: [
      'For most organisations the website is the first meeting. It should load quickly, explain clearly what you do and make the next step obvious. Many sites manage none of the three.',
      'We treat websites as products: planned around your customers, designed as a system, engineered for speed and search, and connected to the way your team handles enquiries.',
    ],
    includes: ['Corporate websites', 'Business websites', 'Educational websites', 'E-commerce websites', 'Landing pages', 'Website redesigns', 'Website optimisation'],
    features: [
      {
        title: 'Structure and messaging',
        body: 'A sitemap and page structure that guide each visitor to the right action, written for the people you serve.',
      },
      {
        title: 'Design that fits your brand',
        body: 'A consistent visual language and reusable components, approved by you before development starts.',
      },
      {
        title: 'Performance',
        body: 'Optimised images, minimal code and fast hosting, tuned for real mobile connections.',
      },
      {
        title: 'Search foundations',
        body: 'Technical SEO, metadata, structured data, sitemaps and Google Business Profile alignment from the first release.',
      },
      {
        title: 'Security',
        body: 'SSL on every site, hardened hosting, regular updates and daily backups stored separately.',
      },
      {
        title: 'Enquiries that arrive',
        body: 'Contact forms, WhatsApp and email routing, with analytics so you know what brings customers in.',
      },
    ],
    benefits: [
      { title: 'Credibility', body: 'A site that looks as capable as your organisation is.' },
      { title: 'Found in search', body: 'Strong technical foundations so the right people find you.' },
      { title: 'Fast everywhere', body: 'Lightweight pages that load quickly on 4G and budget phones.' },
      { title: 'Yours to run', body: 'Your domain, your accounts and a site your team can update.' },
    ],
    deliverables: [
      'Sitemap and page structure',
      'Approved visual design',
      'Responsive, accessible build',
      'SEO, analytics and structured data',
      'Launch on your domain with SSL',
      'Training for your editors',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Cloud hosting'],
    relatedCaseStudies: ['safari-operator-booking-engine'],
    faqs: [
      {
        question: 'Can our team update the website ourselves?',
        answer:
          'Yes. We set up a content management system suited to your team, train your editors and leave a short guide, so routine updates never need a developer.',
      },
      {
        question: 'Can you redesign or speed up our current site?',
        answer:
          'Yes. Website redesigns and optimisation are part of this service. We start with an audit of speed, search and content, then fix what matters most first.',
      },
      {
        question: 'Do you handle hosting, domains and email?',
        answer:
          'Yes. Domain and business email setup are part of our IT Consulting & Digital Setup service, and hosting, SSL, backups and updates are covered by a website maintenance subscription.',
      },
    ],
    keywords: ['website design Kenya', 'web development company Nairobi', 'e-commerce website Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    group: 'build',
    icon: 'smartphone',
    tagline: 'Cross-platform apps for Android and iOS that hold up in the field.',
    headline: 'Mobile apps built for real-world conditions.',
    summary:
      'Customer apps, staff apps, booking apps and business utility apps, built cross-platform with Flutter for Android and iOS, with offline support, notifications and secure payments.',
    overview: [
      'Mobile apps live in harder conditions than websites: patchy networks, older devices, limited storage and users who uninstall at the first frustration.',
      'We design for those realities. Apps start fast on mid-range Android phones, keep working when the connection drops and sync when it returns, and are released carefully so updates never surprise anyone.',
    ],
    includes: ['Customer apps', 'Staff apps', 'Booking apps', 'Business utility apps'],
    features: [
      {
        title: 'One codebase, two platforms',
        body: 'Flutter delivers native-quality Android and iOS apps from a single codebase, so one team ships both.',
      },
      {
        title: 'Works offline',
        body: 'Local storage and careful synchronisation for staff working beyond reliable coverage.',
      },
      {
        title: 'Payments in the app',
        body: 'M-Pesa and card payments, with receipts and reconciliation handled on the server.',
      },
      {
        title: 'Notifications that matter',
        body: 'Push notifications with SMS fallback, targeted to the people who need them.',
      },
      {
        title: 'Device features',
        body: 'Camera, GPS, barcode and QR scanning, signatures and biometric sign-in.',
      },
      {
        title: 'Store publishing',
        body: 'Google Play and App Store listings and releases, under your organisation’s own developer accounts.',
      },
    ],
    benefits: [
      { title: 'Work anywhere', body: 'Field staff capture data at any site and sync it later.' },
      { title: 'Closer customers', body: 'A direct, branded channel to the people you serve.' },
      { title: 'Lower cost to build', body: 'One codebase means one team for both platforms.' },
      { title: 'Safe updates', body: 'Tested releases and crash monitoring protect every update.' },
    ],
    deliverables: [
      'User flows and approved app designs',
      'Android and iOS apps from one codebase',
      'Backend API and admin dashboard',
      'Google Play and App Store publishing',
      'Crash reporting and analytics',
      'Training and a user guide',
    ],
    stack: ['Flutter', 'Dart', 'Node.js', 'Spring Boot', 'Supabase', 'PostgreSQL', 'Firebase Cloud Messaging'],
    relatedCaseStudies: ['ngo-field-data-platform', 'logistics-dispatch-platform'],
    faqs: [
      {
        question: 'Do you build separate apps for Android and iOS?',
        answer:
          'We build one Flutter codebase that produces both, which keeps cost and maintenance down without compromising quality. We only recommend separate native apps when a product depends heavily on platform-specific hardware.',
      },
      {
        question: 'Do you publish the app to the stores?',
        answer:
          'Yes. We prepare the listings, handle review submissions and manage releases. The developer accounts are registered in your organisation’s name, so the app stays yours.',
      },
      {
        question: 'Can the app work without internet?',
        answer:
          'Yes, where it matters. Data is stored on the device, queued safely and synchronised when a connection returns.',
      },
    ],
    keywords: ['mobile app development Kenya', 'app developers Nairobi', 'Flutter developers Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'business-automation',
    title: 'Business Automation',
    group: 'connect',
    icon: 'workflow',
    tagline: 'Replace manual work with efficient digital workflows.',
    headline: 'Automate the work that slows your team down.',
    summary:
      'Digital forms, workflow automation, approval systems, reporting dashboards and internal portals that replace re-keying, paper forms and chasing approvals with reliable digital processes.',
    overview: [
      'In most organisations, capable people spend hours each week moving data between systems, copying figures into reports and following up on approvals. It is slow, error-prone and demoralising.',
      'We find where that time goes, then automate the highest-value steps first. Every automated step is logged and has a manual fallback, so you gain speed without losing control.',
    ],
    includes: ['Digital forms', 'Workflow automation', 'Approval systems', 'Reporting dashboards', 'Internal portals'],
    features: [
      {
        title: 'Process review',
        body: 'We map how work flows today and agree which steps are worth automating before anything is built.',
      },
      {
        title: 'Digital forms',
        body: 'Paper and spreadsheet forms replaced with validated digital forms that feed straight into your systems.',
      },
      {
        title: 'Approval systems',
        body: 'Requests routed to the right approver with reminders, escalation and a complete audit trail.',
      },
      {
        title: 'Workflow automation',
        body: 'Documents, notifications and updates triggered automatically when something happens.',
      },
      {
        title: 'Reporting dashboards',
        body: 'Daily and weekly figures compiled automatically and shared with the people who need them.',
      },
      {
        title: 'Internal portals',
        body: 'One place for staff to submit requests, find documents and track progress.',
      },
    ],
    benefits: [
      { title: 'Hours returned', body: 'Teams reclaim time for customers and decisions.' },
      { title: 'Fewer errors', body: 'No re-keying means no transcription mistakes.' },
      { title: 'Faster cycles', body: 'Approvals and reports move faster, with no chasing.' },
      { title: 'Visible processes', body: 'Every step is logged and auditable.' },
    ],
    deliverables: [
      'Process review with automation priorities',
      'Digital forms and approval flows',
      'Automated reports and dashboards',
      'Exception handling and manual fallbacks',
      'Training and process documentation',
    ],
    stack: ['Node.js', 'Next.js', 'Supabase', 'PostgreSQL', 'Google Workspace', 'Microsoft 365', 'M-Pesa', 'REST APIs'],
    relatedCaseStudies: ['retail-operations-platform', 'school-group-platform'],
    faqs: [
      {
        question: 'Do we have to replace our current tools?',
        answer: 'No. Most automation connects the tools you already use. We only suggest replacing a system when it cannot be integrated reliably.',
      },
      {
        question: 'How do we know automation is worth it?',
        answer:
          'We measure how long the current process takes before we start and compare it after go-live, so the benefit is a number rather than a promise.',
      },
      {
        question: 'What happens when an automated step fails?',
        answer:
          'It is logged, the right person is alerted and there is a documented manual fallback, so a failure never silently stops your operations.',
      },
    ],
    keywords: ['business process automation Kenya', 'workflow automation Nairobi', 'digital forms Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    group: 'connect',
    icon: 'brain',
    tagline: 'Practical AI, built into the systems your team already uses.',
    headline: 'AI that does useful work, safely, inside your systems.',
    summary:
      'We build AI into real workflows: reading documents, answering questions from your own policies, drafting reports for review and classifying requests, with human review, measured accuracy and cost control from day one.',
    overview: [
      'AI is most valuable when it disappears into a process: an invoice is read and captured, a staff question is answered from your handbook, a report is drafted for a person to approve. It is least valuable as a chatbot bolted onto a website.',
      'We start by finding the tasks where AI is reliable enough to help, prove them with small measured pilots, and then build them into your systems with the review steps and safeguards your organisation needs.',
    ],
    includes: ['Document reading and data capture', 'Knowledge assistants', 'Drafting and summarisation', 'Classification and routing'],
    features: [
      {
        title: 'Honest assessment',
        body: 'A clear view of where AI pays off in your operations, where it does not, and what it will cost to run.',
      },
      {
        title: 'Document reading',
        body: 'Structured data captured from invoices, delivery notes, forms and contracts, with confidence scores and human review.',
      },
      {
        title: 'Knowledge assistants',
        body: 'Assistants that answer from your own documents, show their sources and say when they do not know.',
      },
      {
        title: 'AI inside workflows',
        body: 'Summarising, drafting and classifying steps embedded in your processes, with approval where it matters.',
      },
      {
        title: 'Measured accuracy',
        body: 'Every AI feature is tested against real examples before launch and monitored after it.',
      },
      {
        title: 'Data protection',
        body: 'Personal data handled under Kenya’s Data Protection Act, 2019, minimised and redacted where it is not needed.',
      },
    ],
    benefits: [
      { title: 'Real time saved', body: 'AI takes the first pass; your people make the decisions.' },
      { title: 'Your data respected', body: 'Business-grade AI services and data minimisation by default.' },
      { title: 'Humans in control', body: 'Review steps wherever a mistake would be costly.' },
      { title: 'Predictable cost', body: 'Usage limits and monitoring prevent surprise bills.' },
    ],
    deliverables: ['AI opportunity assessment', 'Pilot with measured results', 'Production integration with review steps', 'Usage and accuracy monitoring', 'Data handling notes for your records'],
    stack: ['TypeScript', 'Node.js', 'LLM APIs', 'PostgreSQL', 'pgvector', 'Supabase'],
    relatedCaseStudies: ['ngo-field-data-platform', 'clinic-network-patient-platform'],
    faqs: [
      {
        question: 'Will our data be used to train AI models?',
        answer:
          'We use AI providers’ business terms, under which your data is not used to train their models by default, and we send only the data a task needs. Personal data is handled under Kenya’s Data Protection Act, 2019.',
      },
      {
        question: 'How do you stop the AI giving wrong answers?',
        answer:
          'We ground answers in your approved documents, show sources, test against real questions before launch and send uncertain cases to a person. Accuracy is measured, not assumed.',
      },
      {
        question: 'What will it cost to run?',
        answer:
          'The assessment estimates running costs from your expected volumes. We choose the right model for each task and set usage limits, so costs stay in line with the value.',
      },
    ],
    keywords: ['AI integration Kenya', 'AI automation company Nairobi', 'AI solutions for business Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'api-development',
    title: 'API Development & Integration',
    group: 'connect',
    icon: 'webhook',
    tagline: 'Connect the systems you rely on, so data flows instead of being re-typed.',
    headline: 'APIs and integrations engineered to be relied on.',
    summary:
      'We build secure, documented APIs for your products and partners, and connect the systems your business already relies on: M-Pesa and payment gateways, SMS and email notifications, third-party APIs and data migration.',
    overview: [
      'Most businesses already own several good systems. The trouble is the gaps between them, where people re-type data, reconcile by hand and discover errors weeks later.',
      'We close those gaps with integrations designed for failure: queued, retried, reconciled and logged, so a provider outage delays a transaction instead of losing it. When you need your own API, we design it contract-first and document it properly.',
    ],
    includes: ['M-Pesa and payment gateways', 'SMS and email notifications', 'Third-party APIs', 'Data migration', 'Custom REST APIs'],
    features: [
      {
        title: 'M-Pesa and payment gateways',
        body: 'STK Push, paybill and till collections, and disbursements through Safaricom Daraja, plus card gateways, with automatic reconciliation.',
      },
      {
        title: 'SMS and email notifications',
        body: 'Receipts, reminders and alerts delivered reliably, with delivery tracking.',
      },
      {
        title: 'Third-party APIs',
        body: 'Accounting, logistics, booking and government systems connected with retries and error handling.',
      },
      {
        title: 'Data migration',
        body: 'Records moved from old systems and spreadsheets, cleaned, validated and reconciled before cut-over.',
      },
      {
        title: 'Your own APIs',
        body: 'REST APIs specified in OpenAPI, secured with proper authentication, rate limits and audit logs.',
      },
      {
        title: 'Documentation',
        body: 'Reference docs and examples so partners and future developers can integrate without guesswork.',
      },
    ],
    benefits: [
      { title: 'No more re-typing', body: 'Data entered once flows everywhere it is needed.' },
      { title: 'Fewer incidents', body: 'Defensive patterns absorb third-party outages.' },
      { title: 'Faster partnerships', body: 'Clear documentation makes partner integrations quicker.' },
      { title: 'Clear audit trail', body: 'Every transaction is logged end to end.' },
    ],
    deliverables: ['Integration design and data mapping', 'Production integrations with monitoring', 'API specification and documentation', 'Migration and reconciliation reports', 'Handover notes and credentials'],
    stack: ['Node.js', 'Java', 'Spring Boot', 'REST APIs', 'OpenAPI', 'PostgreSQL', 'M-Pesa Daraja', 'SMS gateways'],
    relatedCaseStudies: ['logistics-dispatch-platform', 'safari-operator-booking-engine'],
    faqs: [
      {
        question: 'Can you add M-Pesa payments to our existing system?',
        answer:
          'Yes. We implement STK Push, paybill and till collections and disbursements through Safaricom’s Daraja API, including callbacks, retries and automatic reconciliation against your records.',
      },
      {
        question: 'Can you move our data out of an old system?',
        answer:
          'Yes. We extract, clean and validate the data, migrate it in rehearsed runs and reconcile totals with your team before switching over.',
      },
      {
        question: 'What happens when a provider is down?',
        answer:
          'Transactions are queued and retried, and reconciliation jobs catch anything that slipped through, so an outage delays work rather than losing it.',
      },
    ],
    keywords: ['M-Pesa integration Kenya', 'API development Nairobi', 'system integration Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    group: 'run',
    icon: 'cloud',
    tagline: 'Secure, monitored, cost-aware hosting for your systems.',
    headline: 'Cloud hosting and infrastructure, done properly.',
    summary:
      'We set up and manage the infrastructure your software runs on: secure cloud hosting, automated deployments, monitoring, backups and recovery, sized for your workload and your budget.',
    overview: [
      'Cloud platforms make it easy to start and easy to overspend. Many organisations end up with servers nobody remembers creating, backups nobody has tested and bills nobody can explain.',
      'We keep infrastructure simple, documented and reproducible. Deployments are automated, systems are monitored, backups are restore-tested and costs are reviewed against what the workload actually needs.',
    ],
    includes: ['Cloud hosting setup', 'Migration from old servers', 'Automated deployments', 'Monitoring and alerts', 'Backups and recovery'],
    features: [
      { title: 'Right-sized hosting', body: 'Infrastructure matched to your traffic, data and budget, with room to grow.' },
      { title: 'Migration', body: 'Planned moves from shared hosting or office servers, with rehearsed cut-overs and rollback plans.' },
      { title: 'Automated deployments', body: 'Changes reviewed in Git and deployed through a pipeline, never by hand on a live server.' },
      { title: 'Monitoring', body: 'Uptime, errors and performance watched automatically, with alerts to our engineers.' },
      { title: 'Backups and recovery', body: 'Daily backups stored separately and restore-tested, with a written recovery plan.' },
      { title: 'Data residency', body: 'Hosting choices that respect your obligations under Kenya’s Data Protection Act, 2019.' },
    ],
    benefits: [
      { title: 'Lower bills', body: 'Right-sizing removes waste.' },
      { title: 'Fewer outages', body: 'Monitoring catches problems early.' },
      { title: 'Safer releases', body: 'Automated pipelines replace risky manual changes.' },
      { title: 'Recoverable', body: 'Restores are rehearsed, not hoped for.' },
    ],
    deliverables: ['Infrastructure review and cost report', 'Hosting and deployment setup', 'Monitoring and alerting', 'Backup and recovery plan', 'Infrastructure documentation'],
    stack: ['Cloud hosting', 'Supabase', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Git & GitHub', 'SSL'],
    relatedCaseStudies: ['clinic-network-patient-platform'],
    faqs: [
      {
        question: 'Which cloud provider should we use?',
        answer:
          'It depends on your workload, budget, data residency needs and existing contracts. We compare options against your requirements rather than defaulting to one provider.',
      },
      {
        question: 'Can our data be hosted in Kenya?',
        answer: 'Yes, where your obligations require it. We can use in-country providers for sensitive data and global regions for the rest.',
      },
      {
        question: 'Can you reduce our current hosting bill?',
        answer: 'Often. A review usually finds idle or oversized resources. We report the findings and expected savings before changing anything.',
      },
    ],
    keywords: ['cloud hosting Kenya', 'cloud solutions Nairobi', 'server migration Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'it-consulting-digital-setup',
    title: 'IT Consulting & Digital Setup',
    group: 'run',
    icon: 'compass',
    tagline: 'Set up properly online, with advice on the technology that fits where you are going.',
    headline: 'The right technology foundations, set up properly.',
    summary:
      'Domain and business email setup, Google Workspace and Microsoft 365, technology consulting, digital transformation planning and staff training, so your organisation starts on solid ground and grows on a plan.',
    overview: [
      'Many organisations run on accounts nobody fully controls: a domain registered by a former employee, email on personal addresses, files scattered across phones. It works until it does not.',
      'We set up the foundations properly, in your organisation’s name, and help you plan what to digitise next, in what order and at what cost. Independent advice, even when the answer is not to build anything.',
    ],
    includes: ['Domain and business email setup', 'Google Workspace and Microsoft 365', 'Technology consulting', 'Digital transformation planning', 'Staff training'],
    features: [
      { title: 'Domains and business email', body: 'Your domain, professional email addresses and DNS configured correctly and registered to your organisation.' },
      { title: 'Google Workspace and Microsoft 365', body: 'Accounts, shared drives, calendars and security settings set up and migrated cleanly.' },
      { title: 'Technology consulting', body: 'Independent advice on software, vendors and architecture, based on your goals and budget.' },
      { title: 'Digital transformation planning', body: 'A prioritised roadmap of what to digitise, in what order, with costs and expected benefits.' },
      { title: 'Security basics', body: 'Two-factor sign-in, access reviews and sensible policies, so one lost phone is not a crisis.' },
      { title: 'Staff training', body: 'Hands-on sessions that help your team use the tools they already pay for.' },
    ],
    benefits: [
      { title: 'Professional presence', body: 'Branded email and a domain you control.' },
      { title: 'Control of your accounts', body: 'Everything registered to your organisation, documented and handed over.' },
      { title: 'A clear plan', body: 'Know what to invest in next, and why.' },
      { title: 'Confident teams', body: 'Staff who use the tools well.' },
    ],
    deliverables: ['Domain, email and workspace setup', 'Account and access documentation', 'Technology assessment', 'Digital transformation roadmap', 'Training sessions'],
    stack: ['Google Workspace', 'Microsoft 365', 'DNS', 'SSL', 'Two-factor authentication'],
    relatedCaseStudies: [],
    faqs: [
      {
        question: 'Can you move our email to Google Workspace or Microsoft 365?',
        answer: 'Yes. We set up the new accounts, migrate existing mail and files, configure DNS and switch over with minimal disruption.',
      },
      {
        question: 'We are not sure what we need. Can you advise?',
        answer:
          'Yes. That is what consulting is for. We review how you work today and recommend practical next steps, including when an off-the-shelf tool is the better answer.',
      },
      {
        question: 'Is the setup registered in our name?',
        answer: 'Always. Domains, accounts and subscriptions belong to your organisation, and we hand over credentials against a written checklist.',
      },
    ],
    keywords: ['IT consulting Nairobi', 'business email setup Kenya', 'Google Workspace setup Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'managed-software-services',
    title: 'Managed Software Services',
    group: 'run',
    icon: 'serverCog',
    flagship: true,
    tagline: 'After launch, we keep your software secure, current and supported.',
    headline: 'Managed software services. Your systems, looked after.',
    summary:
      'After deployment, Nidaam keeps supporting your systems through a monthly subscription: maintenance, hosting, backups, security updates, bug fixes, minor enhancements and technical support with written response times.',
    overview: [
      'Launch is the beginning of a system’s life, not the end of the project. Dependencies need patching, databases grow, certificates expire, users find edge cases and the business keeps changing.',
      'Our managed services cover all of it under one agreement. Your systems are monitored, maintained and backed up; problems are fixed against agreed targets; and every month you receive a report on what was done. One accountable partner, in writing.',
    ],
    includes: [
      'Software maintenance',
      'Website maintenance',
      'Bug fixes',
      'Minor enhancements',
      'Technical support',
      'Hosting management',
      'Database administration',
      'Security updates',
      'Performance optimisation',
      'SSL management',
      'Regular backups',
      'Monthly service reports',
    ],
    features: [
      { title: 'Software and website maintenance', body: 'Dependency updates, upgrades and housekeeping on a planned schedule.' },
      { title: 'Hosting management', body: 'Your hosting configured, monitored, scaled and paid for under one plan.' },
      { title: 'Database administration', body: 'Performance tuning, capacity planning and safe changes to your data.' },
      { title: 'Regular backups', body: 'Daily backups stored separately from production and restore-tested.' },
      { title: 'Security updates', body: 'Patches applied promptly, critical ones within two business days.' },
      { title: 'SSL management', body: 'Certificates renewed before they expire, on every site and system.' },
      { title: 'Bug fixes', body: 'Defects investigated and fixed against written response and resolution targets.' },
      { title: 'Minor enhancements', body: 'Small improvements and changes that keep the software aligned with your business.' },
      { title: 'Performance optimisation', body: 'Slow pages and queries found and fixed before users complain.' },
      { title: 'Technical support', body: 'A support desk for your team, Monday to Friday, 8:00 to 17:00 EAT.' },
      { title: 'Monthly service reports', body: 'What was done, what was found and what we recommend next.' },
      { title: 'Flexible plans', body: 'Full managed services, or individual subscriptions for maintenance, database administration or support.' },
    ],
    benefits: [
      { title: 'One accountable partner', body: 'No finger-pointing between a host, a freelancer and an IT vendor.' },
      { title: 'Predictable cost', body: 'A monthly fee, invoiced in advance, instead of emergency invoices.' },
      { title: 'Problems caught early', body: 'Maintenance and monitoring prevent most incidents before users notice.' },
      { title: 'Software that keeps improving', body: 'Minor enhancements keep the system in step with the business.' },
    ],
    deliverables: [
      'Onboarding review and stabilisation plan',
      'Monitoring and backups configured',
      'Support desk access for your team',
      'Written response targets',
      'Monthly service report',
      'Clean handover if you ever leave',
    ],
    stack: ['Cloud hosting', 'PostgreSQL', 'Supabase', 'Git & GitHub', 'Uptime monitoring', 'SSL'],
    relatedCaseStudies: ['clinic-network-patient-platform', 'school-group-platform'],
    faqs: [
      {
        question: 'Can you support software you did not build?',
        answer:
          'Yes. We start with a technical review of the code, hosting, security and documentation, agree a stabilisation plan, and then move the system onto a regular plan.',
      },
      {
        question: 'What is included, and what is quoted separately?',
        answer:
          'Maintenance, hosting management, backups, security updates, bug fixes, minor enhancements and support are included. New features beyond minor enhancements are quoted separately, so the monthly fee stays predictable.',
      },
      {
        question: 'What if we decide to leave?',
        answer:
          'You own your software, data and accounts throughout. If you move on, we hand over accounts, domains, credentials, documentation and training against a written checklist.',
      },
    ],
    keywords: ['managed software services Kenya', 'software maintenance Kenya', 'website maintenance Nairobi'],
    pricing: 'Monthly subscription',
  },
  {
    slug: 'graphic-design-branding',
    title: 'Graphic Design & Branding',
    group: 'creative',
    icon: 'pen',
    tagline: 'A consistent, professional look across everything you show the world.',
    headline: 'Brand identities that look as capable as you are.',
    summary:
      'Logo design, brand identity and guidelines, stationery, print, social media graphics, company profiles, signage and packaging, designed as one consistent system.',
    overview: [
      'Customers judge an organisation by its weakest touchpoint: a pixelated logo on a proposal, a mismatched flyer, a social post in the wrong colours.',
      'We design brands as systems, with clear guidelines and ready-to-use templates, so everything your team produces looks like it came from the same professional organisation.',
    ],
    includes: ['Logo design', 'Brand identity and guidelines', 'Business cards and stationery', 'Flyers, posters and brochures', 'Social media graphics', 'Company profiles and presentations', 'Signage and packaging'],
    features: [
      { title: 'Logo design', body: 'A distinctive mark and wordmark that work from a favicon to a building sign.' },
      { title: 'Brand guidelines', body: 'Colours, typography, logo usage and tone of voice, documented for your team and suppliers.' },
      { title: 'Stationery and print', body: 'Business cards, letterheads, flyers, posters and brochures, print-ready.' },
      { title: 'Social media graphics', body: 'Templates and campaign graphics in your brand, sized for each platform.' },
      { title: 'Company profiles and decks', body: 'Profiles and presentations that make proposals and pitches look professional.' },
      { title: 'Signage and packaging', body: 'Designs for the physical world, prepared to your printer’s specifications.' },
    ],
    benefits: [
      { title: 'Instant credibility', body: 'A professional look from the first impression.' },
      { title: 'Consistency', body: 'Every touchpoint recognisably yours.' },
      { title: 'Faster production', body: 'Templates mean less time designing from scratch.' },
      { title: 'Full ownership', body: 'You receive the source files and rights.' },
    ],
    deliverables: ['Logo files for print and screen', 'Brand guidelines', 'Stationery and print designs', 'Social media templates', 'Source files'],
    stack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    relatedCaseStudies: [],
    faqs: [
      { question: 'Do we get the source files?', answer: 'Yes. You receive the final artwork in print and screen formats, plus the editable source files and full rights on payment.' },
      { question: 'How many logo concepts will we see?', answer: 'The number of concepts and revision rounds is set out in your quotation, so expectations are clear before work starts.' },
      { question: 'Can you work with our existing brand?', answer: 'Yes. We can refresh an existing identity, document guidelines for it or simply produce new materials that follow it.' },
    ],
    keywords: ['graphic design Nairobi', 'logo design Kenya', 'branding agency Nairobi'],
    pricing: 'Quotation based',
  },
  {
    slug: 'video-editing-production',
    title: 'Video Editing & Production',
    group: 'creative',
    icon: 'video',
    tagline: 'Videos that explain, promote and get shared.',
    headline: 'Video, shot, edited and finished for every platform.',
    summary:
      'Promotional and advert videos, social media reels and shorts, corporate and event videos, motion graphics and animated explainers, product videos, subtitles and captions.',
    overview: [
      'Video is often the fastest way to explain what you do, and the easiest way to look amateur if it is done badly.',
      'We plan each video around one message and one audience, then shoot, edit and finish it for the platforms where it will run, from a 15-second reel to a corporate film.',
    ],
    includes: ['Promotional and advert videos', 'Social media reels and shorts', 'Corporate and event videos', 'Motion graphics and animated explainers', 'Product and service videos', 'Subtitles and captions'],
    features: [
      { title: 'Concept and script', body: 'A clear message, storyboard and script agreed before filming.' },
      { title: 'Filming', body: 'On-location and event filming with professional equipment.' },
      { title: 'Editing and colour', body: 'Tight edits, colour grading and sound that hold attention.' },
      { title: 'Motion graphics', body: 'Animated explainers and branded titles for complex ideas.' },
      { title: 'Platform-ready formats', body: 'Vertical, square and widescreen versions for each channel.' },
      { title: 'Subtitles and captions', body: 'Accurate captions, because most social video is watched without sound.' },
    ],
    benefits: [
      { title: 'Clear explanation', body: 'Show in a minute what takes pages to describe.' },
      { title: 'Higher engagement', body: 'Video earns attention on every platform.' },
      { title: 'Reusable assets', body: 'Cut-downs and stills for months of content.' },
      { title: 'On brand', body: 'Graphics and colours consistent with your identity.' },
    ],
    deliverables: ['Script and storyboard', 'Final edited videos', 'Platform-specific versions', 'Subtitles and captions', 'Source files on request'],
    stack: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve'],
    relatedCaseStudies: [],
    faqs: [
      { question: 'Do you film, or only edit?', answer: 'Both. We can plan and film from scratch, or edit footage you already have.' },
      { question: 'Can you produce regular content for social media?', answer: 'Yes. Reels and shorts can be produced on a monthly schedule, alongside our digital marketing service.' },
      { question: 'Do you add subtitles?', answer: 'Yes. Subtitles and captions are standard, and can be provided in more than one language.' },
    ],
    keywords: ['video production Nairobi', 'video editing Kenya', 'corporate video Kenya'],
    pricing: 'Quotation based',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    group: 'creative',
    icon: 'megaphone',
    tagline: 'Reach the right customers online, and measure what it brings in.',
    headline: 'Digital marketing measured in enquiries, not likes.',
    summary:
      'Social media management, search engine optimisation, Google and Meta ads, email and WhatsApp marketing, Google Business Profile, and analytics with monthly reports.',
    overview: [
      'Marketing spend is easy to waste online: boosted posts that reach the wrong people, ads without tracking, and reports full of impressions that never became customers.',
      'We start from the outcome you want, usually enquiries or sales, set up the tracking to measure it, and then run the channels that deliver it. Every month you see what was spent and what it returned.',
    ],
    includes: ['Social media management', 'Search engine optimisation (SEO)', 'Google and Meta ads', 'Email and WhatsApp marketing', 'Google Business Profile', 'Analytics and monthly reports'],
    features: [
      { title: 'Social media management', body: 'Planned content calendars, publishing and community management across your channels.' },
      { title: 'Search engine optimisation', body: 'Technical fixes, content and local SEO so customers find you on Google.' },
      { title: 'Google and Meta ads', body: 'Targeted campaigns with conversion tracking and disciplined budgets.' },
      { title: 'Email and WhatsApp marketing', body: 'Newsletters and broadcasts to customers who asked to hear from you.' },
      { title: 'Google Business Profile', body: 'An accurate, active listing that wins local searches and reviews.' },
      { title: 'Analytics and reporting', body: 'Monthly reports on reach, enquiries, cost per lead and what to do next.' },
    ],
    benefits: [
      { title: 'Measurable results', body: 'Every campaign tracked to enquiries or sales.' },
      { title: 'Local visibility', body: 'Show up when nearby customers search.' },
      { title: 'Consistent presence', body: 'Channels that stay active, not abandoned.' },
      { title: 'Budget discipline', body: 'Spend moves to what works.' },
    ],
    deliverables: ['Marketing plan and tracking setup', 'Content calendar', 'Campaign management', 'Google Business Profile optimisation', 'Monthly performance report'],
    stack: ['Google Ads', 'Meta Ads Manager', 'Google Analytics', 'Google Search Console', 'Google Business Profile', 'WhatsApp Business'],
    relatedCaseStudies: [],
    faqs: [
      { question: 'Is digital marketing a monthly service?', answer: 'Yes. Social media management and digital marketing run as monthly subscriptions, invoiced in advance, with a report each month.' },
      { question: 'Is the ad budget included in your fee?', answer: 'No. Your ad spend is paid directly to Google or Meta, so you always see exactly what was spent. Our fee covers planning, management and reporting.' },
      { question: 'How soon will we see results?', answer: 'Ads can generate enquiries within days of launch; SEO and organic social build over months. We set realistic expectations for each channel up front.' },
    ],
    keywords: ['digital marketing agency Nairobi', 'SEO services Kenya', 'social media management Kenya'],
    pricing: 'Monthly subscription',
  },
  {
    slug: 'content-copywriting',
    title: 'Content Creation & Copywriting',
    group: 'creative',
    icon: 'fileText',
    tagline: 'Clear, persuasive words for every channel.',
    headline: 'Copy written for the customer who reads it.',
    summary:
      'Website and blog content, social media captions and calendars, product and service descriptions, company profiles, newsletters and announcements.',
    overview: [
      'Good writing is invisible: the reader simply understands what you offer and what to do next. Weak writing makes capable organisations sound generic.',
      'We learn your business, your customers and the questions they ask, then write plainly and specifically, in a voice that is recognisably yours.',
    ],
    includes: ['Website and blog content', 'Social media captions and calendars', 'Product and service descriptions', 'Company profiles', 'Newsletters and announcements'],
    features: [
      { title: 'Website content', body: 'Page copy that explains what you do clearly and leads to enquiries.' },
      { title: 'Blog and articles', body: 'Useful, search-friendly articles that answer your customers’ real questions.' },
      { title: 'Social media copy', body: 'Captions and monthly calendars written for each platform.' },
      { title: 'Product and service descriptions', body: 'Specific, benefit-led descriptions that help people decide.' },
      { title: 'Company profiles', body: 'Profiles and capability statements for tenders, partners and investors.' },
      { title: 'Newsletters and announcements', body: 'Updates your customers and staff will actually read.' },
    ],
    benefits: [
      { title: 'Clarity', body: 'Customers understand what you offer, quickly.' },
      { title: 'Search visibility', body: 'Content that ranks for the questions customers ask.' },
      { title: 'Consistent voice', body: 'One tone across every channel.' },
      { title: 'Time saved', body: 'Your team stops staring at blank pages.' },
    ],
    deliverables: ['Content plan', 'Written and edited copy', 'SEO keywords and metadata', 'Monthly content calendars', 'Tone of voice notes'],
    stack: ['Google Docs', 'Google Search Console', 'Content calendars'],
    relatedCaseStudies: [],
    faqs: [
      { question: 'Can you write in our voice?', answer: 'Yes. We start by learning how you speak to customers and document a short tone-of-voice guide that every piece follows.' },
      { question: 'Do you write for SEO?', answer: 'Yes. Content is planned around what your customers search for, and written for people first.' },
      { question: 'Can content be a monthly service?', answer: 'Yes. Blog posts, captions and newsletters can be delivered on a monthly schedule.' },
    ],
    keywords: ['copywriting services Kenya', 'content creation Nairobi', 'company profile writing Kenya'],
    pricing: 'Quotation based',
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((s) => s.group === group);
}

export const flagshipService = services.find((s) => s.flagship)!;

/** Shared FAQ answers reused on other pages. */
export const commonFaqs = { ownership, warranty };
