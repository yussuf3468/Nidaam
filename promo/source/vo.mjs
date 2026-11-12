// Synthesises one WAV per scene with Piper, measures durations, writes timing.js
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const PY = 'tts/Scripts/python.exe';
const MODEL = 'voices/en_GB-cori-high.onnx';

const SCRIPTS = {
  brand: [
    'Nidaam Solutions. Building reliable software. Supporting long-term growth.',
    'Spreadsheets everywhere. Approvals on WhatsApp. Double entry. Month-end surprises. Your organisation deserves better systems.',
    'We design, build and manage software. Custom systems, websites and mobile apps. Automation and integrations. Cloud hosting and managed support. And creative and marketing services.',
    'Nidaam P O S brings point of sale, inventory, an online storefront and finance into one cloud system.',
    'Socdal gives vehicle rental businesses one workspace for fleets, reservations, agreements and payments.',
    'And Nidaam C M S manages clients, payments and reports, in shillings and dollars.',
    'Our team has also delivered for education, non-profit, healthcare and logistics.',
    'Scope agreed in writing. Delivery in stages you can see and test. You own the source code. A thirty day warranty on every project. And managed support after launch.',
    "Let's build yours. Visit nidaam dot co dot K E, or message us on WhatsApp.",
  ],
  pos: [
    'Nidaam P O S. Retail technology, by Nidaam Solutions.',
    'A complete point of sale and business management platform for retail stores and supermarkets.',
    'Sell fast, with receipts and discounts. Accept Em Pesa, cash and card. Track inventory with low stock alerts. Run your own online storefront. See sales dashboards and reports. And keep working offline.',
    'See it live at e-commerce dot nidaam dot co dot K E.',
  ],
  socdal: [
    'Socdal. Vehicle rental management, by Nidaam Solutions.',
    'It replaces notebooks, spreadsheets and WhatsApp conversations with a single workspace.',
    'See fleet availability in real time. Manage reservations, check outs and check ins. Print rental agreements. Verify customer I D. Track payments and revenue. And get push notifications in an installable app.',
    'See it live at socdal dot nidaam dot co dot K E.',
  ],
};

fs.mkdirSync('vo', { recursive: true });
const timing = {};
for (const [k, lines] of Object.entries(SCRIPTS)) {
  timing[k] = lines.map((text, i) => {
    const out = `vo/${k}-${i}.wav`;
    execFileSync(PY, ['-m', 'piper', '-m', MODEL, '-f', out, '--length-scale', '1.04', '--sentence-silence', '0.28'], { input: text });
    const d = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out]).toString());
    console.log(k, i, d.toFixed(2));
    return +d.toFixed(2);
  });
}
fs.writeFileSync('timing.js', 'window.TIMING=' + JSON.stringify(timing) + ';');
fs.writeFileSync('vo/script.json', JSON.stringify(SCRIPTS, null, 2));
