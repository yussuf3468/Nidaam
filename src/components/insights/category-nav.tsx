import Link from 'next/link';
import { cn } from '@/lib/utils';

export function CategoryNav({ categories, active }: { categories: { name: string; slug: string; count: number }[]; active?: string }) {
  const item = (on: boolean) =>
    cn(
      'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors',
      on ? 'border-foreground bg-foreground text-background' : 'border-border bg-card text-foreground/80 hover:border-border-strong hover:text-foreground',
    );
  return (
    <nav aria-label="Insight categories" className="scrollbar-none -mx-4 overflow-x-auto px-4">
      <ul className="flex gap-2">
        <li>
          <Link href="/insights" className={item(!active)} aria-current={!active ? 'page' : undefined}>
            All
          </Link>
        </li>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/insights/category/${c.slug}`} className={item(active === c.slug)} aria-current={active === c.slug ? 'page' : undefined}>
              {c.name}
              <span className="font-mono text-xs opacity-60">{c.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
