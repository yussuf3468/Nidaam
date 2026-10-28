import { ImageResponse } from 'next/og';
import { MARK_PATH, WORDMARK, WORDMARK_PATH } from '@/components/brand/logo-paths';

/** Shared renderer for Open Graph images (1200 x 630), used by every opengraph-image route. */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const cache = new Map<string, Promise<ArrayBuffer | null>>();

/** Loads a Google font as TTF for the image renderer. Falls back to the default font offline. */
function googleFont(family: string, weight: number) {
  const key = `${family}:${weight}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      (async () => {
        try {
          const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`)).text();
          const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
          return url ? await (await fetch(url)).arrayBuffer() : null;
        } catch {
          return null;
        }
      })(),
    );
  }
  return cache.get(key)!;
}

export async function renderOgImage({ eyebrow, title, footer = 'nidaam.co.ke · Nairobi, Kenya' }: { eyebrow: string; title: string; footer?: string }) {
  const [bold, medium] = await Promise.all([googleFont('Manrope', 700), googleFont('Manrope', 500)]);
  const fonts = [
    ...(bold ? [{ name: 'Manrope', data: bold, weight: 700 as const, style: 'normal' as const }] : []),
    ...(medium ? [{ name: 'Manrope', data: medium, weight: 500 as const, style: 'normal' as const }] : []),
  ];
  const gap = 26;
  const lockupW = WORDMARK.height + gap + WORDMARK.width;
  const titleSize = title.length > 70 ? 56 : title.length > 44 ? 66 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#f6f5f2',
          backgroundImage:
            'linear-gradient(to right, rgba(20,20,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,18,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          fontFamily: fonts.length ? 'Manrope' : undefined,
          color: '#151513',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <svg width={(lockupW / WORDMARK.height) * 58} height={58} viewBox={`0 0 ${lockupW} ${WORDMARK.height}`}>
            <path d={MARK_PATH} fill="#00AEFF" transform={`scale(${WORDMARK.height / 131})`} />
            <path d={WORDMARK_PATH} fill="#151513" transform={`translate(${WORDMARK.height + gap} 0)`} />
          </svg>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#6b6a66',
              border: '1px solid #dedcd6',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: 999,
              padding: '8px 18px',
            }}
          >
            <div style={{ width: 9, height: 9, borderRadius: 9, background: '#00AEFF' }} />
            {eyebrow}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: titleSize, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5, maxWidth: 1000 }}>{title}</div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 22, fontWeight: 500, color: '#6b6a66' }}>
          <div style={{ display: 'flex' }}>{footer}</div>
          <div style={{ display: 'flex', width: 120, height: 6, borderRadius: 6, background: '#00AEFF' }} />
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
