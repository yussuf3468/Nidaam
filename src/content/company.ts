import type { IconName } from '@/components/icons';

/*
 * Company facts and commitments, taken from the Nidaam Solutions Capability Statement
 * (edition October 2026). Keep this file in step with that document.
 */

export const vision =
  'To become one of Africa’s leading software companies by delivering innovative digital solutions that empower businesses to operate more efficiently.';

export const mission =
  'To provide high-quality software development, automation, and managed technology services that enable our clients to focus on running their businesses while we manage their technology.';

export const founders = [
  { name: 'Yussuf Muse', role: 'Head of Finance & Administration' },
  { name: 'Abdimalik Mohamud', role: 'Backend Developer' },
  { name: 'Abdiaziz Abdirahman', role: 'Full-Stack Developer' },
  { name: 'Mohamed Musa', role: 'Head of Sales & Business Development' },
  { name: 'Ali Abdo', role: 'Creative Design & Multimedia Lead' },
];

export type ProcessStep = { title: string; body: string; detail: string; icon: IconName };

export const processSteps: ProcessStep[] = [
  {
    title: 'Requirements gathering',
    body: 'Workshops to understand the business, its users and its goals.',
    detail: 'We sit with the people who will use the system, map how work flows today and agree what success looks like.',
    icon: 'search',
  },
  {
    title: 'Solution design',
    body: 'The features, data and integrations, agreed in writing.',
    detail: 'A written solution design and quotation, so scope, cost and timeline are clear before anything is built.',
    icon: 'layers',
  },
  {
    title: 'UI/UX design',
    body: 'Screens and flows you approve before building starts.',
    detail: 'Designs for the key screens and journeys, reviewed with your team and approved before development.',
    icon: 'pen',
  },
  {
    title: 'Software development',
    body: 'Built in stages, with progress demonstrated regularly.',
    detail: 'Version control and peer review on every change, with working software shown to you at each milestone.',
    icon: 'code',
  },
  {
    title: 'Testing & quality assurance',
    body: 'Tested by Nidaam, then accepted by you.',
    detail: 'We test every release, then you test it against the agreed scope. Nothing goes live without your acceptance.',
    icon: 'flask',
  },
  {
    title: 'Deployment',
    body: 'Launched on secure hosting, on your own domain.',
    detail: 'Encrypted connections, daily backups and accounts registered in your organisation’s name from day one.',
    icon: 'rocket',
  },
  {
    title: 'Training',
    body: 'Hands-on sessions and a guide for your team.',
    detail: 'Administrators and staff trained on the real system, with a written guide to keep.',
    icon: 'users',
  },
  {
    title: 'Ongoing maintenance & support',
    body: 'A managed services plan keeps it secure and current.',
    detail: 'Maintenance, security updates, backups and support with written response times, reported monthly.',
    icon: 'lifebuoy',
  },
];

export type Reason = { title: string; body: string; icon: IconName };

export const reasons: Reason[] = [
  {
    title: 'Enterprise-grade engineering',
    body: 'Version control, peer review and testing on every change. Software built the way serious systems are built.',
    icon: 'layers',
  },
  {
    title: 'Long-term partnership',
    body: 'We stay after launch with managed services, so the people who built your system keep it healthy.',
    icon: 'handshake',
  },
  {
    title: 'Modern technologies',
    body: 'React, Next.js, Flutter, Spring Boot, Node.js and PostgreSQL: proven tools with large talent pools, never obscure lock-in.',
    icon: 'cpu',
  },
  {
    title: 'Secure architecture',
    body: 'Encrypted connections everywhere, least-privilege access and critical security patches within two business days.',
    icon: 'shield',
  },
  {
    title: 'Scalable systems',
    body: 'Designed to grow from one branch to many without starting over.',
    icon: 'scaling',
  },
  {
    title: 'Transparent communication',
    body: 'Written quotations, regular demonstrations and changes priced and approved before they are built.',
    icon: 'messages',
  },
  {
    title: 'Professional documentation',
    body: 'Quotations, proposals, contracts, technical documentation and user guides for every engagement.',
    icon: 'fileText',
  },
  {
    title: 'Managed support',
    body: 'Monthly plans with written response targets: two hours for critical issues during support hours.',
    icon: 'lifebuoy',
  },
];

export const protections = [
  {
    title: 'You own your software',
    body: 'On full payment, the source code and all rights in the work made for you are yours, handed over in a repository you control.',
  },
  {
    title: 'A written warranty',
    body: 'For 30 days after acceptance, anything that does not match the agreed scope is fixed free of charge.',
  },
  {
    title: 'Clear scope and pricing',
    body: 'Every project starts from a written quotation and agreement. Changes are priced and approved before they are built.',
  },
  {
    title: 'Confidentiality',
    body: 'Your information stays confidential, under the agreement or a non-disclosure agreement signed before we start.',
  },
  {
    title: 'Data protection',
    body: 'Personal data is handled under Kenya’s Data Protection Act, 2019, and used only to provide the service.',
  },
  {
    title: 'A clean handover',
    body: 'Accounts, domains, credentials, documentation and training are handed over against a written checklist.',
  },
];

export const qualityAndSecurity = [
  'Version control and peer review on every change',
  'Testing before every release, and client acceptance before go-live',
  'Encrypted connections (SSL) on every site and system',
  'Daily backups, stored separately and restore-tested',
  'Access limited to the people who need it, and removed when they no longer do',
  'Security patches applied promptly; critical ones within two business days',
];

export const engagementModels = [
  {
    title: 'Fixed price projects',
    label: 'Defined scope',
    body: 'Ideal for projects with clearly defined requirements. One agreed price, paid by milestone.',
    points: ['Written quotation and agreement', 'Deposit, then milestone payments', 'Changes priced before they are built'],
  },
  {
    title: 'Time & materials',
    label: 'Evolving scope',
    body: 'Suitable for evolving projects requiring flexibility. Billed for the time actually spent, with regular reports.',
    points: ['Flexible priorities', 'Regular time and progress reports', 'Stop or change direction at any point'],
  },
  {
    title: 'Monthly managed services',
    label: 'Ongoing',
    body: 'A recurring monthly subscription covering maintenance, hosting, technical support, security updates, monitoring, backups and minor enhancements, or ongoing social media, content and marketing.',
    points: ['Invoiced in advance each month', 'Written response targets', 'Monthly service report'],
  },
];

export const paymentTerms = [
  'Prices are quoted in US dollars or Kenya shillings, with VAT shown where it applies.',
  'Quotations are valid for 30 days.',
  'Projects start on receipt of the deposit and are paid by milestone.',
  'Monthly services are invoiced in advance at the start of each month.',
  'Payment by bank transfer or M-Pesa.',
];

export const priceFactors = [
  'The number of user roles, workflows and screens',
  'Integrations such as M-Pesa, SMS, accounting and third-party APIs',
  'Data migration from existing systems',
  'Platforms: web, Android, iOS or all three',
  'Security, compliance and reporting requirements',
];

/** Support hours and response targets for clients on a managed services plan. */
export const supportHours = 'Monday to Friday, 8:00 am to 5:00 pm East Africa Time';

export const responseTargets = [
  { priority: 'P1', name: 'Critical', meaning: 'System down or unusable for all users', response: '2 hours', fix: '1 business day' },
  { priority: 'P2', name: 'High', meaning: 'A core function is unavailable', response: '4 hours', fix: '2 business days' },
  { priority: 'P3', name: 'Normal', meaning: 'A non-core function is affected', response: '1 business day', fix: '5 business days' },
  { priority: 'P4', name: 'Low', meaning: 'A question, content update or cosmetic issue', response: '3 business days', fix: 'Next planned update' },
];

/** Monthly subscriptions available individually or as part of managed services. */
export const subscriptions = [
  'Managed Software Services',
  'Website Maintenance',
  'Software Maintenance',
  'Database Administration',
  'Technical Support',
  'Social Media Management',
  'Digital Marketing & Advertising',
];

export const technologies: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'Android', 'iOS'] },
  { group: 'Backend', items: ['Node.js', 'Java', 'Spring Boot', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'Supabase', 'pgvector', 'Backups'] },
  { group: 'Cloud & delivery', items: ['Cloud hosting', 'Git & GitHub', 'CI/CD', 'SSL'] },
  { group: 'Integrations', items: ['M-Pesa', 'SMS & email', 'Payment gateways', 'Google & Microsoft 365'] },
];

export const homeFaqs = [
  {
    question: 'What does Nidaam Solutions do?',
    answer:
      'We are a Kenyan software company. We design, build and support custom software, business and school management systems, websites, mobile apps, automation and integrations, and we keep them running afterwards through managed services. Our creative team also handles branding, video, content and digital marketing.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Every project is priced in a written quotation once we understand the requirements. Prices are quoted in US dollars or Kenya shillings, quotations are valid for 30 days, and projects are paid by milestone after a deposit. Managed services are a monthly subscription.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A website or focused internal tool can take a few weeks; a multi-module system takes a few months. Your quotation sets out the milestones, and we demonstrate progress at each one.',
  },
  {
    question: 'Do we own the software you build?',
    answer:
      'Yes. On full payment, the source code and all rights in the work made for you are yours, handed over in a repository you control, with accounts, domains, credentials and documentation.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'Every project includes a 30-day warranty from acceptance. After that, a managed services plan covers maintenance, hosting, backups, security updates, bug fixes, minor enhancements and support, with written response targets.',
  },
  {
    question: 'Can you take over a system someone else built?',
    answer:
      'Yes. We start with a technical review of the code, hosting, security and documentation, agree a plan to stabilise it, and then support it under a managed services plan.',
  },
  {
    question: 'Do you work with organisations outside Nairobi?',
    answer:
      'Yes. We work with clients across Kenya and the wider region. Most collaboration happens online, with on-site workshops and training where they add value.',
  },
  {
    question: 'How do you protect our data?',
    answer:
      'Personal data is handled under Kenya’s Data Protection Act, 2019, and used only to provide the service. Every system uses encrypted connections, access is limited to the people who need it, backups run daily and are restore-tested, and confidentiality is covered by our agreement or an NDA.',
  },
];
