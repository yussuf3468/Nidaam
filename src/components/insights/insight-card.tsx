import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { readingMinutes, type Insight } from '@/content/insights';
import { cn, formatDate } from '@/lib/utils';

const COLS = 14;
const ROWS = 8;

/** Small deterministic hash so each article gets its own, stable pattern. */
function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** Abstract "data matrix" cover, generated from the slug, so articles need no stock imagery. */
function Cover({ slug, category, large }: { slug: string; category: string; large?: boolean }) {
  const rand = hash(slug);
  // A small cluster of highlighted cells, plus a scattering of quieter ones.
  const cx = 3 + Math.floor(rand() * (COLS - 6));
  const cy = 1 + Math.floor(rand() * (ROWS - 3));
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => {
    const x = i % COLS;
    const y = Math.floor(i / COLS);
    const inCluster = Math.abs(x - cx) <= 1 && Math.abs(y - cy) <= 1 && rand() > 0.25;
    const level = inCluster ? 3 : rand() > 0.82 ? 2 : rand() > 0.55 ? 1 : 0;
    return { x, y, level };
  });

  return (
    <div className={cn('relative overflow-hidden border-b border-border bg-background/70', large ? 'min-h-64 flex-1' : 'aspect-[16/10]')} aria-hidden>
      <svg viewBox={`0 0 ${COLS * 24} ${ROWS * 24}`} className="absolute inset-0 size-full p-6" preserveAspectRatio="xMidYMid meet">
        {cells.map(({ x, y, level }) => (
          <rect
            key={`${x}-${y}`}
            x={x * 24 + 3}
            y={y * 24 + 3}
            width="18"
            height="18"
            rx="4"
            fill={level === 3 ? '#00AEFF' : 'currentColor'}
            fillOpacity={level === 3 ? 0.95 : level === 2 ? 0.16 : level === 1 ? 0.07 : 0.03}
            className="text-foreground"
          />
        ))}
      </svg>
      <span className="absolute bottom-4 left-5 font-mono text-[0.6875rem] tracking-[0.08em] text-muted-foreground uppercase">{category}</span>
    </div>
  );
}

export function InsightCard({ post, large = false }: { post: Insight; large?: boolean }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[box-shadow,border-color,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:border-border-strong hover:shadow-lift"
    >
      <Cover slug={post.slug} category={post.category} large={large} />
      <div className={cn('flex flex-col p-6 sm:p-7', !large && 'flex-1')}>
        <p className="font-mono text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingMinutes(post.body)} min read
        </p>
        <h3 className={cn('mt-3 font-bold tracking-tight text-balance', large ? 'text-3xl leading-tight sm:text-4xl' : 'text-xl leading-snug')}>
          {post.title}
        </h3>
        <p className={cn('mt-3 leading-relaxed text-muted-foreground', large ? 'max-w-2xl text-lg' : 'line-clamp-3 text-[0.9375rem]')}>{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold">
          Read article
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
