import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Tag } from '@/components/ui/badge';
import type { Project } from '@/content/projects';

/** A delivered project with a real screenshot. Links to the live site when there is one. */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const body = (
    <>
      <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.sector}</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">{project.name}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        {project.url && (
          <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold">
            Visit the live site
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </span>
        )}
      </div>
    </>
  );

  const className =
    'group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,border-color] duration-300 hover:border-border-strong hover:shadow-soft';

  return project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
