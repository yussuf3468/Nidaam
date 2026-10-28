/*
 * Insights (blog) content.
 * Stored as structured blocks so it can move to a headless CMS (Sanity, Payload,
 * Contentful...) without changing the page components: see /src/lib/cms.ts.
 * Inline `code` in text is supported with backticks.
 */

export const insightCategories = ['Software', 'AI', 'Business', 'Technology', 'Security', 'Engineering'] as const;
export type InsightCategory = (typeof insightCategories)[number];

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'code'; code: string };

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  author: string;
  body: Block[];
};

export function categorySlug(category: string) {
  return category.toLowerCase();
}

export function readingMinutes(body: Block[]) {
  const words = body
    .map((b) => ('text' in b ? b.text : 'items' in b ? b.items.join(' ') : 'code' in b ? b.code : ''))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
}

export const insights: Insight[] = [
  {
    slug: 'real-cost-of-running-on-spreadsheets',
    title: 'The real cost of running your business on spreadsheets',
    excerpt:
      'Spreadsheets are free, flexible and familiar. They are also where growing businesses quietly lose time, money and control. Here is how to tell when you have outgrown them.',
    category: 'Business',
    date: '2026-10-28',
    author: 'Nidaam Solutions',
    body: [
      {
        type: 'p',
        text: 'Almost every business we meet runs on spreadsheets somewhere. Stock in one workbook, debtors in another, staff leave in a third, and a WhatsApp group holding it all together. That is not a criticism. Spreadsheets are how most good businesses get started, and for a while they are exactly the right tool.',
      },
      {
        type: 'p',
        text: 'The problem is that their costs are invisible. Nobody invoices you for the hours spent reconciling, the stock that walked out unnoticed or the decision made on last month’s numbers. So it is worth making those costs visible.',
      },
      { type: 'h2', text: 'Where the money actually goes' },
      { type: 'h3', text: '1. Hours spent copying data' },
      {
        type: 'p',
        text: 'Count the times a single sale is typed: once at the till, once into the stock sheet, once into the debtors list, once into the monthly report. Each step takes minutes. Multiply by every transaction, every day, and you often find a full-time role spent moving numbers from one place to another.',
      },
      { type: 'h3', text: '2. Errors nobody notices' },
      {
        type: 'p',
        text: 'Studies of real-world spreadsheets consistently find errors in a large share of them. A broken formula or a pasted-over cell rarely announces itself. It shows up later, as a stock count that does not match, a customer who was never invoiced or a margin that looked healthier than it was.',
      },
      { type: 'h3', text: '3. Decisions made on stale information' },
      {
        type: 'p',
        text: 'When figures are compiled weekly or monthly, every decision is made looking backwards. Reordering, pricing and cash planning all suffer. The cost is the stock-out you did not see coming and the slow seller you kept buying.',
      },
      { type: 'h3', text: '4. Weak controls' },
      {
        type: 'p',
        text: 'Spreadsheets have no meaningful audit trail and no real permissions. Anyone with the file can change anything, and there is no record of who did. For a business handling cash and stock across several people, that is a genuine risk.',
      },
      { type: 'h3', text: '5. Growth that depends on one person' },
      {
        type: 'p',
        text: 'Often a single person understands how the workbooks fit together. When they are on leave, or leave for good, the business discovers how fragile its operations really were.',
      },
      { type: 'h2', text: 'Signs you have outgrown spreadsheets' },
      {
        type: 'ul',
        items: [
          'The same data is entered in more than one place',
          'Month-end takes days and nobody trusts the first version of the numbers',
          'You cannot answer “how much stock do we have right now?” without phoning someone',
          'M-Pesa and bank transactions are matched by hand',
          'Opening a new branch means copying and adapting another set of files',
          'Only one or two people understand how everything fits together',
        ],
      },
      { type: 'h2', text: 'What to do about it' },
      {
        type: 'p',
        text: 'The answer is not always custom software. Sometimes a well-chosen off-the-shelf tool solves the problem for a modest subscription. Sometimes the right first step is simply to automate the most painful reconciliation. And sometimes the business has reached the point where one system, built around how it actually works, pays for itself quickly.',
      },
      {
        type: 'p',
        text: 'Start by writing down your three most time-consuming manual processes and estimating the hours each takes per month. That number, honestly measured, usually makes the decision for you.',
      },
      {
        type: 'callout',
        title: 'Not sure where to start?',
        text: 'We are happy to look at how your business runs today and tell you, plainly, whether you need new software at all. Write to info@nidaam.co.ke.',
      },
    ],
  },
  {
    slug: 'off-the-shelf-or-custom-software',
    title: 'Off-the-shelf or custom software? A practical way to decide',
    excerpt:
      'Buy or build is one of the most expensive decisions a growing organisation makes. A simple framework, and the questions that matter more than price.',
    category: 'Software',
    date: '2026-10-27',
    author: 'Nidaam Solutions',
    body: [
      {
        type: 'p',
        text: 'As a software company, you might expect us to recommend building every time. We do not. Plenty of problems are best solved by an existing product with a monthly subscription. The skill is knowing which problems those are.',
      },
      { type: 'h2', text: 'Start with the process, not the product' },
      {
        type: 'p',
        text: 'Before comparing tools, describe the process you are trying to improve: who does what, in what order, with what information, and where it goes wrong today. Most failed software projects, bought or built, fail because nobody did this first.',
      },
      { type: 'h2', text: 'When off-the-shelf is the right answer' },
      {
        type: 'ul',
        items: [
          'The process is standard across your industry: payroll, accounting, email, basic CRM',
          'You are willing to adapt how you work to fit the product',
          'A mature product already covers most of what you need',
          'Your requirements are unlikely to change much',
        ],
      },
      {
        type: 'p',
        text: 'Accounting is the classic example. Unless you are an accounting firm, your general ledger is not where you compete. Use a good package and integrate it with everything else.',
      },
      { type: 'h2', text: 'When custom software earns its cost' },
      {
        type: 'ul',
        items: [
          'The way you operate is part of your competitive advantage',
          'You are paying for several tools and still filling the gaps with spreadsheets',
          'Off-the-shelf products need so much customisation they become custom anyway',
          'Per-user licence costs grow faster than your business',
          'You need deep integration with local systems such as M-Pesa or KRA eTIMS',
        ],
      },
      { type: 'h2', text: 'Questions that matter more than the quote' },
      {
        type: 'ol',
        items: [
          'Who owns the code and the data, and can you take them elsewhere?',
          'What happens after launch: who fixes bugs, applies security updates and answers questions?',
          'How will the system be documented, and could another team take it over?',
          'What will it cost to run each year, including hosting, support and licences?',
          'How are changes to scope handled and priced?',
        ],
      },
      {
        type: 'p',
        text: 'A cheaper build with no maintenance plan and no documentation is usually the most expensive option over three years. A higher quote that includes ownership, documentation and a support agreement often is not.',
      },
      { type: 'h2', text: 'The hybrid answer' },
      {
        type: 'p',
        text: 'In practice, the best solution is often a mix: off-the-shelf products for standard functions, connected by integrations, with custom software only where your operations are genuinely different. That keeps cost down and puts engineering effort where it creates an advantage.',
      },
      {
        type: 'quote',
        text: 'Build where you are different. Buy where you are the same. Integrate everything.',
      },
    ],
  },
  {
    slug: 'where-ai-pays-off-for-growing-businesses',
    title: 'Where AI actually pays off for a growing business',
    excerpt:
      'Beyond the hype, a short list of AI uses that reliably save time today, the ones that rarely do, and how to run a pilot that tells you the truth.',
    category: 'AI',
    date: '2026-10-27',
    author: 'Nidaam Solutions',
    body: [
      {
        type: 'p',
        text: 'Large language models are remarkably capable, and remarkably easy to misuse. For most organisations the question is not whether AI is impressive. It is whether a specific use of it will save more than it costs, reliably, without creating new risks.',
      },
      { type: 'h2', text: 'Uses that reliably pay off' },
      { type: 'h3', text: 'Reading documents' },
      {
        type: 'p',
        text: 'Extracting fields from invoices, delivery notes, forms and contracts is one of the most dependable uses today. Combined with confidence scores and a quick human check, it removes a great deal of typing.',
      },
      { type: 'h3', text: 'Answering questions from your own documents' },
      {
        type: 'p',
        text: 'Assistants that search your policies, manuals and procedures and answer with a reference to the source help staff find information quickly. The key is grounding: the assistant should answer only from approved documents and say when it does not know.',
      },
      { type: 'h3', text: 'Drafting for a human to finish' },
      {
        type: 'p',
        text: 'First drafts of reports, summaries, proposals and replies save real time when a person reviews and approves them. The value comes from removing the blank page, not from removing the person.',
      },
      { type: 'h3', text: 'Sorting and routing' },
      {
        type: 'p',
        text: 'Classifying incoming emails, support requests or feedback and sending them to the right team is simple, measurable and low-risk.',
      },
      { type: 'h2', text: 'Uses that rarely pay off (yet)' },
      {
        type: 'ul',
        items: [
          'Fully automated decisions about money, health or employment with no human review',
          'A general chatbot on your website with no access to accurate information',
          'Replacing a process nobody has documented: AI amplifies confusion as well as clarity',
          'Anything where an occasional confident wrong answer is unacceptable and cannot be checked',
        ],
      },
      { type: 'h2', text: 'How to run a pilot that tells the truth' },
      {
        type: 'ol',
        items: [
          'Pick one narrow task with a clear measure: minutes per document, accuracy of extracted fields, time to answer.',
          'Collect a test set of real examples, including awkward ones, before you build.',
          'Measure the current process so you have a baseline.',
          'Build the smallest version that works, with a human review step.',
          'Measure accuracy and time saved against the baseline, then decide.',
        ],
      },
      {
        type: 'callout',
        title: 'Protect personal data',
        text: 'Use AI providers’ business terms, send only the data a task needs and record what is processed where. Kenya’s Data Protection Act, 2019 applies to personal data processed by AI just as it does to any other system.',
      },
      {
        type: 'p',
        text: 'Done this way, AI stops being a gamble and becomes an ordinary engineering decision: here is the task, here is the accuracy, here is the time saved, here is the running cost.',
      },
    ],
  },
  {
    slug: 'integrating-mpesa-properly',
    title: 'Integrating M-Pesa properly: what most implementations get wrong',
    excerpt:
      'Getting an STK Push to appear on a phone takes an afternoon. Building payments that reconcile perfectly under real-world conditions takes engineering discipline.',
    category: 'Engineering',
    date: '2026-10-26',
    author: 'Nidaam Engineering',
    body: [
      {
        type: 'p',
        text: 'Safaricom’s Daraja API makes it straightforward to start accepting M-Pesa payments. The happy path, where a customer approves a prompt and a callback arrives a few seconds later, is quick to build. Production is where the edge cases live.',
      },
      { type: 'h2', text: 'Mistake 1: trusting the callback completely' },
      {
        type: 'p',
        text: 'Callbacks are asynchronous. They can be delayed, delivered more than once, or occasionally not arrive at all. A system that only marks an order paid when a callback arrives will eventually leave paid customers looking unpaid.',
      },
      {
        type: 'p',
        text: 'The fix is to treat the callback as one signal among several. Record every payment request, and run a background job that queries the status of any request still pending after a set time.',
      },
      { type: 'h2', text: 'Mistake 2: no idempotency' },
      {
        type: 'p',
        text: 'If the same callback arrives twice, your system must not credit the payment twice. Store the M-Pesa receipt number with a unique constraint and make the payment handler safe to run repeatedly.',
      },
      {
        type: 'code',
        code: `-- one row per M-Pesa receipt, whatever happens upstream
create table mpesa_payments (
  receipt_number text primary key,
  checkout_request_id text unique,
  amount numeric(12, 2) not null,
  phone text not null,
  account_reference text,
  received_at timestamptz not null default now()
);`,
      },
      { type: 'h2', text: 'Mistake 3: matching payments loosely' },
      {
        type: 'p',
        text: 'For paybill payments, customers type the account reference themselves, and they make mistakes: extra spaces, wrong case, a digit missing. Normalise references, match exactly where you can, and send everything else to an exceptions queue for a person to resolve rather than guessing.',
      },
      { type: 'h2', text: 'Mistake 4: no reconciliation' },
      {
        type: 'p',
        text: 'Even with everything above, you need a daily reconciliation between what M-Pesa says you received and what your system recorded. Differences should be rare, visible and investigated, never discovered at an audit.',
      },
      { type: 'h2', text: 'Mistake 5: secrets in the wrong places' },
      {
        type: 'p',
        text: 'Consumer keys, passkeys and initiator credentials belong in a secrets manager or environment configuration, never in source code or a shared document. Callback endpoints should validate what they receive and log every request.',
      },
      { type: 'h2', text: 'A checklist for production' },
      {
        type: 'ul',
        items: [
          'Every payment request stored before it is sent',
          'Idempotent callback handling keyed on the receipt number',
          'A status-query job for requests left pending',
          'Exact matching, with an exceptions queue for the rest',
          'Daily automated reconciliation with alerts on differences',
          'Credentials kept out of code, and callback requests logged',
        ],
      },
      {
        type: 'p',
        text: 'None of this is exotic. It is the ordinary discipline that separates a demo from a payment system people can rely on.',
      },
    ],
  },
  {
    slug: 'data-protection-act-software-checklist',
    title: 'Kenya’s Data Protection Act: a practical checklist for your software',
    excerpt:
      'If your systems hold personal data about customers, staff, learners or patients, the Data Protection Act, 2019 applies. A plain-language checklist for the technology side.',
    category: 'Security',
    date: '2026-10-25',
    author: 'Nidaam Solutions',
    body: [
      {
        type: 'p',
        text: 'Kenya’s Data Protection Act, 2019 sets out how personal data must be collected, stored and used, and created the Office of the Data Protection Commissioner (ODPC) to enforce it. Most of the obligations are organisational, but many are met, or missed, in the design of your software.',
      },
      {
        type: 'callout',
        title: 'A note before you start',
        text: 'This is a practical guide for technology decisions, not legal advice. For your specific obligations, including registration requirements, consult the ODPC’s guidance or a qualified adviser.',
      },
      { type: 'h2', text: '1. Know what personal data you hold' },
      {
        type: 'p',
        text: 'List every system that stores personal data, what it stores, why, and who can see it. You cannot protect, minimise or delete data you have not mapped. Pay special attention to sensitive categories such as health information and data about children.',
      },
      { type: 'h2', text: '2. Collect only what you need' },
      {
        type: 'p',
        text: 'Every field on a form should have a reason. Data minimisation is a core principle of the Act, and it is also good engineering: data you never collect cannot leak.',
      },
      { type: 'h2', text: '3. Record consent and purpose' },
      {
        type: 'p',
        text: 'Where you rely on consent, store when and how it was given, and for what purpose. Make it as easy to withdraw as it was to give.',
      },
      { type: 'h2', text: '4. Control access' },
      {
        type: 'ul',
        items: [
          'Role-based permissions so people see only what their job requires',
          'Individual accounts, never shared logins',
          'Two-factor authentication for administrators',
          'Access removed promptly when people change roles or leave',
          'Audit logs showing who viewed or changed sensitive records',
        ],
      },
      { type: 'h2', text: '5. Encrypt and back up' },
      {
        type: 'p',
        text: 'Use encrypted connections everywhere, encrypt sensitive data at rest, and keep backups separate from production. Test restores regularly: a backup you have never restored is a hope, not a plan.',
      },
      { type: 'h2', text: '6. Support data subject rights' },
      {
        type: 'p',
        text: 'People have rights to be informed about how their data is used, to access it, and to have inaccurate data corrected or unnecessary data deleted. Your systems should make it practical to find, export, correct and delete a person’s data.',
      },
      { type: 'h2', text: '7. Plan for breaches' },
      {
        type: 'p',
        text: 'The Act requires data controllers to notify the Data Commissioner of qualifying personal data breaches within 72 hours of becoming aware of them. That is only possible if you have monitoring that detects incidents and a written plan for what happens next.',
      },
      { type: 'h2', text: '8. Check where data is hosted' },
      {
        type: 'p',
        text: 'Transfers of personal data outside Kenya are subject to conditions, including appropriate safeguards. Know where your cloud providers store data and document why each location is appropriate.',
      },
      { type: 'h2', text: '9. Assess high-risk processing' },
      {
        type: 'p',
        text: 'Where processing is likely to result in high risk to people’s rights, such as large-scale processing of health data, the Act requires a data protection impact assessment. Building one into the design phase is far cheaper than retrofitting controls later.',
      },
      { type: 'h2', text: '10. Put it in your contracts' },
      {
        type: 'p',
        text: 'If a software company or host processes personal data on your behalf, your agreement should say what they may do with it, how it is protected and what happens at the end of the contract. Ask your vendors for this, including us.',
      },
    ],
  },
  {
    slug: 'what-happens-after-launch',
    title: 'What happens after launch: a plain guide to software maintenance',
    excerpt:
      'Software does not stay finished. What maintenance actually involves, why it matters, and what a good support agreement should include.',
    category: 'Technology',
    date: '2026-10-25',
    author: 'Nidaam Engineering',
    body: [
      {
        type: 'p',
        text: 'Many organisations budget carefully for building software and not at all for running it. Then, a year later, something breaks, nobody is responsible and the original developer is unreachable. Maintenance is not an optional extra. It is the cost of owning a system.',
      },
      { type: 'h2', text: 'Why software needs maintaining' },
      {
        type: 'ul',
        items: [
          'Security vulnerabilities are discovered in frameworks and libraries every week',
          'Operating systems, browsers and phones update, and old code stops behaving',
          'SSL certificates expire, and domains and hosting renew',
          'Databases grow, and queries that were fast become slow',
          'Users find edge cases nobody tested',
          'The business changes, and the software needs to follow',
        ],
      },
      { type: 'h2', text: 'What good maintenance includes' },
      { type: 'h3', text: 'Keeping it safe' },
      {
        type: 'p',
        text: 'Security patches applied promptly, with critical ones prioritised. Access reviewed so former staff cannot log in. Encrypted connections and certificates kept current.',
      },
      { type: 'h3', text: 'Keeping it running' },
      {
        type: 'p',
        text: 'Hosting managed and monitored, database performance tuned, and daily backups stored separately and tested by actually restoring them.',
      },
      { type: 'h3', text: 'Keeping it useful' },
      {
        type: 'p',
        text: 'Bugs fixed against agreed timelines, and a regular allowance for minor enhancements so the system keeps pace with the business instead of slowly falling behind it.',
      },
      { type: 'h2', text: 'What to look for in a support agreement' },
      {
        type: 'ol',
        items: [
          'Clear support hours and channels',
          'Priority levels with written response and fix targets',
          'What is included, and what is quoted separately',
          'How backups are taken, where they are stored and how often restores are tested',
          'A monthly report showing what was actually done',
          'A handover commitment if you ever decide to move on',
        ],
      },
      {
        type: 'p',
        text: 'For reference, our own managed services plans respond to critical issues within two hours during support hours and aim to fix or work around them within one business day, with lower priorities on longer, published timelines.',
      },
      {
        type: 'callout',
        title: 'Inherited a system?',
        text: 'If you are running software someone else built and nobody is maintaining it, start with a technical review of code, hosting, security and backups. It is the quickest way to know where you stand.',
      },
    ],
  },
];
