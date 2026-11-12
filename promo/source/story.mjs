// node story.mjs vo <voice.onnx>          synthesise narration + write story-timing.js
// node story.mjs stills <dir> t1,t2,...   PNG stills
// node story.mjs render <out.mp4>         full render with voiceover
import { chromium } from 'playwright-core';
import { spawn, execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const [mode, a2, a3] = process.argv.slice(2);
const FPS = 30;
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const STORY = new Function(fs.readFileSync('story-data.js', 'utf8') + ';return STORY;')();

if (mode === 'vo') {
  fs.rmSync('story-vo', { recursive: true, force: true });
  fs.mkdirSync('story-vo');
  const timing = STORY.map((c, i) => c.say.map((text, j) => {
    const raw = `story-vo/raw-${i}-${j}.wav`, out = `story-vo/${i}-${j}.wav`;
    execFileSync('tts/Scripts/python.exe', ['-m', 'piper', '-m', a2, '-f', raw, '--sentence-silence', '0.22'], { input: text });
    // trim leading/trailing silence so sentence spacing is controlled by the timeline
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', raw, '-af',
      'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse', out]);
    fs.unlinkSync(raw);
    return +parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out]).toString()).toFixed(2);
  }));
  fs.writeFileSync('story-timing.js', 'window.STORY_TIMING=' + JSON.stringify(timing) + ';');
  console.log(JSON.stringify(timing));
  process.exit(0);
}

const browser = await chromium.launch({ executablePath: EDGE, headless: true });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.resolve('story.html')).href);
await page.evaluate(() => window.ready);
const meta = await page.evaluate(() => window.META);

if (mode === 'stills') {
  fs.mkdirSync(a2, { recursive: true });
  console.log('total', meta.total, 'starts', meta.starts.map((s) => s.toFixed(1)).join(','));
  const times = a3 === 'auto' ? meta.starts.map((s, i) => (i + 1 < meta.starts.length ? meta.starts[i + 1] : meta.total) - 0.7) : a3.split(',').map(Number);
  let n = 0;
  for (const t of times) {
    await page.evaluate((s) => window.seek(s), t);
    await page.screenshot({ path: path.join(a2, `story-${String(n++).padStart(2, '0')}.png`) });
  }
} else {
  const frames = Math.round(meta.total * FPS);
  const silent = 'tmp-story.mp4';
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', silent], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', (c) => (c === 0 ? res() : rej(new Error('ffmpeg exit ' + c)))));
  for (let i = 0; i < frames; i++) {
    await page.evaluate((s) => window.seek(s), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 96 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await done;
  const args = ['-y', '-loglevel', 'error', '-i', silent];
  const filters = [];
  meta.audio.forEach((a, i) => {
    args.push('-i', a.file);
    filters.push(`[${i + 1}:a]aresample=48000,adelay=${Math.round(a.start * 1000)}:all=1[a${i}]`);
  });
  filters.push(`${meta.audio.map((_, i) => `[a${i}]`).join('')}amix=inputs=${meta.audio.length}:normalize=0,highpass=f=70,acompressor=threshold=-20dB:ratio=2.5:attack=8:release=120,loudnorm=I=-16:TP=-1.5:LRA=9,apad[aout]`);
  fs.writeFileSync('story-filter.txt', filters.join(';\n'));
  args.push('-/filter_complex', 'story-filter.txt', '-map', '0:v', '-map', '[aout]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
    '-t', String(meta.total), '-movflags', '+faststart', a2);
  execFileSync('ffmpeg', args, { stdio: 'inherit' });
  fs.unlinkSync(silent);
  console.log(`rendered ${frames} frames (${meta.total}s) -> ${a2}`);
}
await browser.close();
