import type { ComponentType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

/* Status colours, in folder-tab order. */
export const statusColors = {
  info: '#3b82f6',
  waiting: '#f59e0b',
  done: '#10b981',
  refused: '#ef4444',
  idle: '#a3a3a3',
} as const;

interface StatusPillProps {
  color: string;
  children: ReactNode;
  /** Gently pulse the swatch (for "in progress"). */
  pulse?: boolean;
  className?: string;
}

/** `[■ Label]` pill: a small square swatch before the text. */
export function StatusPill({ color, children, pulse = false, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        'inline-flex h-7 items-center gap-2 rounded-lg border border-border/70 bg-card px-2.5 text-[13px] font-medium text-card-foreground',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('size-2.5 shrink-0 rounded-[3px]', pulse && 'motion-safe:animate-pulse')}
        style={{ backgroundColor: color }}
      />
      {children}
    </span>
  );
}

export type Tone = 'neutral' | 'blue' | 'violet' | 'sky' | 'green' | 'orange' | 'teal' | 'red';

const toneBadge: Record<Tone, string> = {
  neutral: 'border border-border text-foreground',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  violet: 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  sky: 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  green: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
  orange: 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  teal: 'bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300',
  red: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
};

export const toneValue: Record<Tone, string> = {
  neutral: 'text-neutral-950 dark:text-neutral-50',
  blue: 'text-blue-600 dark:text-blue-400',
  violet: 'text-violet-600 dark:text-violet-400',
  sky: 'text-sky-600 dark:text-sky-400',
  green: 'text-green-600 dark:text-green-400',
  orange: 'text-orange-600 dark:text-orange-400',
  teal: 'text-teal-600 dark:text-teal-400',
  red: 'text-red-600 dark:text-red-400',
};

interface ToneBadgeProps {
  tone: Tone;
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
  className?: string;
}

/** Soft tinted badge used on stat cards: icon plus a short name. */
export function ToneBadge({ tone, icon: Icon, children, className }: ToneBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-7 items-center gap-2 rounded-4xl px-2.5 text-[14px] font-medium',
        toneBadge[tone],
        className,
      )}
    >
      {Icon && <Icon className="size-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
