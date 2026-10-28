import { ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = 'Nidaam Solutions: software engineering company in Nairobi, Kenya';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: 'Software engineering · Nairobi', title: 'Building software that moves businesses forward.' });
}
