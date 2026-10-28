import { Fragment, type ReactNode } from 'react';
import { Info } from 'lucide-react';
import type { Block } from '@/content/insights';

/** Renders `inline code` spans inside plain text. */
function inline(text: string): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') ? <code key={i}>{part.slice(1, -1)}</code> : <Fragment key={i}>{part}</Fragment>,
  );
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Renders CMS-style content blocks as article HTML. */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-nidaam">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return <p key={i}>{inline(block.text)}</p>;
          case 'h2':
            return (
              <h2 key={i} id={slugifyHeading(block.text)}>
                {block.text}
              </h2>
            );
          case 'h3':
            return <h3 key={i}>{block.text}</h3>;
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{inline(item)}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {block.items.map((item) => (
                  <li key={item}>{inline(item)}</li>
                ))}
              </ol>
            );
          case 'quote':
            return <blockquote key={i}>{block.text}</blockquote>;
          case 'code':
            return (
              <pre key={i}>
                <code>{block.code}</code>
              </pre>
            );
          case 'callout':
            return (
              <aside key={i} className="not-prose flex gap-4 rounded-2xl border border-border bg-card p-6">
                <Info className="mt-0.5 size-5 shrink-0 text-brand-ink" aria-hidden />
                <div>
                  <p className="font-sans font-bold text-foreground">{block.title}</p>
                  <p className="mt-1 text-[0.9375rem] text-muted-foreground">{inline(block.text)}</p>
                </div>
              </aside>
            );
        }
      })}
    </div>
  );
}
