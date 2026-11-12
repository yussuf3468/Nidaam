// Usage: node render.mjs <video-key> <out.mp4>            full render with voiceover
//        node render.mjs <video-key> --stills <dir> t1,t2  PNG stills at given seconds
import { chromium } from 'playwright-core';
import { spawn, execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const [key, a2, a3, a4] = process.argv.slice(2);
const FPS = 30;
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const dims = key.endsWith('-v') ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 };

const browser = await chromium.launch({ executablePath: EDGE, headless: true });
const page = await browser.newPage({ viewport: dims, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.resolve('index.html')).href + '?v=' + key);
await page.evaluate(() => window.ready);
const meta = await page.evaluate(() => window.META);

if (a2 === '--stills') {
  fs.mkdirSync(a3, { recursive: true });
  for (const t of a4.split(',').map(Number)) {
    await page.evaluate((s) => window.seek(s), t);
    await page.screenshot({ path: path.join(a3, `${key}-${String(t).padStart(5, '0')}.png`) });
  }
  console.log('stills done, total', meta.total, 'starts', meta.starts.join(','));
} else {
  const frames = Math.round(meta.total * FPS);
  const silent = `tmp-${key}.mp4`;
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', silent],
    { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', (c) => (c === 0 ? res() : rej(new Error('ffmpeg exit ' + c)))));
  for (let i = 0; i < frames; i++) {
    await page.evaluate((s) => window.seek(s), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 96 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await done;

  // voiceover: one WAV per scene, placed at scene start + lead
  const base = key.split('-')[0];
  const args = ['-y', '-loglevel', 'error', '-i', silent];
  const filters = [];
  meta.starts.forEach((s, i) => {
    args.push('-i', `vo/${base}-${i}.wav`);
    const ms = Math.round((s + meta.lead) * 1000);
    filters.push(`[${i + 1}:a]aresample=48000,adelay=${ms}:all=1[a${i}]`);
  });
  filters.push(`${meta.starts.map((_, i) => `[a${i}]`).join('')}amix=inputs=${meta.starts.length}:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=11,apad[aout]`);
  args.push('-filter_complex', filters.join(';'), '-map', '0:v', '-map', '[aout]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
    '-t', String(meta.total), '-movflags', '+faststart', a2);
  execFileSync('ffmpeg', args, { stdio: 'inherit' });
  fs.unlinkSync(silent);
  console.log(`rendered ${frames} frames (${meta.total}s) with voiceover -> ${a2}`);
}
await browser.close();
