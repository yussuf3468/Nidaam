// Narration, one entry per scene, one string per spoken sentence (spelled for the voice engine).
var STORY = [
  { t: 'chaos', say: [
    'If you run a business, you probably know this feeling.',
    'Sales are written down in one notebook.',
    'Stock lives in a spreadsheet that somebody last updated on Tuesday.',
    'Approvals are buried somewhere in a WhatsApp group.',
    "And when month end comes, the numbers just don't add up.",
  ] },
  { t: 'gap', say: [
    "It's not that your team isn't working hard.",
    "It's that your tools aren't talking to each other.",
    "That's exactly the problem we fix.",
  ] },
  { t: 'intro', say: [
    "We're Nidaam Solutions, a software company based in Eastleigh, Nairobi.",
    'We sit down with you, learn how your business really runs, and then build the system around it.',
  ] },
  { t: 'one', say: [
    'One place for your sales, your stock, your money, and your people.',
  ] },
  { t: 'work', p: 'pos', say: [
    "Here's what that looks like in real life.",
    'For retail shops and supermarkets, we built Nidaam P O S.',
    'Sales, stock, and an online store in one system, with Em Pesa payments built in.',
  ] },
  { t: 'work', p: 'socdal', say: [
    'For vehicle rental companies, we built Socdal.',
    'Every car, every booking, and every payment, tracked in one workspace instead of a notebook.',
  ] },
  { t: 'work', p: 'islii', say: [
    'Islii Barista School, here in Nairobi, takes enrolments and issues student certificates through the platform we built for them.',
  ] },
  { t: 'work', p: 'gam', say: [
    'Gam Oil Trading distributes petroleum.',
    'We built the fleet system they use to manage their vehicles and trips.',
  ] },
  { t: 'work', p: 'anchor', say: [
    'And for Anchor Point Initiative, a youth non-profit, we built a community hub for their programmes, events, and donations.',
  ] },
  { t: 'yours', say: [
    "And once it's live, it's yours.",
    'You own the code.',
    'It comes with a thirty day warranty.',
    'And we stay on to support it.',
  ] },
  { t: 'outro', say: [
    "So if any of this sounds familiar, let's talk.",
    'Nidaam Solutions. nidaam dot co dot K E.',
  ] },
];
