import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { site, type LaunchStageStatus } from '../config/site';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/cn';
import { StatusPill, ToneBadge, statusColors, toneValue } from './ui/Badge';

const COUNT_DURATION_MS = 1600;
const COUNT_DELAY_MS = 500;

/** Eases a number from 0 to `target` once; the bar width follows it. */
function useCountUp(target: number, animate: boolean) {
  const [value, setValue] = useState(animate ? 0 : target);

  useEffect(() => {
    if (!animate) {
      setValue(target);
      return;
    }

    let frame = 0;
    let start: number | undefined;

    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / COUNT_DURATION_MS, 1);
      setValue(Math.round((1 - Math.pow(1 - t, 4)) * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, COUNT_DELAY_MS);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, animate]);

  return value;
}

const stageColor: Record<LaunchStageStatus, string> = {
  complete: statusColors.done,
  active: statusColors.waiting,
  pending: statusColors.idle,
};

const stageText: Record<LaunchStageStatus, string> = {
  complete: 'done',
  active: 'in progress',
  pending: 'up next',
};

/** Half-circle cut-outs where the dashed tear meets the card edge. */
const notch = 'absolute -bottom-2 size-4 rounded-full bg-background';

interface LaunchTicketProps {
  className?: string;
}

/**
 * The launch "ticket": a black stub carrying the NSC logo, a dashed tear with
 * notches, then build progress and the stage pills.
 */
export function LaunchTicket({ className }: LaunchTicketProps) {
  const reducedMotion = usePrefersReducedMotion();
  const { stages } = site.launch;
  const target = Math.min(100, Math.max(0, Math.round(site.launch.progress)));
  const value = useCountUp(target, !reducedMotion);

  const activeStage = stages.find((stage) => stage.status === 'active');
  const doneCount = stages.filter((stage) => stage.status === 'complete').length;
  const caption = [activeStage && `${activeStage.label} in progress`, `${doneCount} of ${stages.length} stages done`]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className={cn('rounded-xl bg-card text-card-foreground', className)}>
      {/* Stub */}
      <div className="relative flex flex-col gap-6 rounded-t-xl bg-neutral-950 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-6 dark:bg-black">
        <img
          src="/logo-lockup-white.svg"
          alt={site.name}
          width={1101}
          height={463}
          className="h-16 w-auto self-start sm:h-18"
        />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1 sm:text-right">
          <div>
            <dt className="text-xs text-white/55">Now building</dt>
            <dd className="mt-0.5 text-[15px] font-semibold">{site.shortName} platform</dd>
          </div>
          <div>
            <dt className="text-xs text-white/55">Based in</dt>
            <dd className="mt-0.5 text-[15px] font-semibold">{site.contact.country}</dd>
          </div>
        </dl>
        <span aria-hidden="true" className={cn(notch, '-left-2')} />
        <span aria-hidden="true" className={cn(notch, '-right-2')} />
      </div>

      {/* Tear */}
      <div aria-hidden="true" className="mx-4 border-t border-dashed border-border" />

      {/* Progress */}
      <div className="p-5 sm:p-6">
        <ToneBadge tone="green" icon={Activity}>
          Build progress
        </ToneBadge>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-1.5">
          <div
            className={cn('text-4xl font-semibold leading-none tabular-nums tracking-tight', toneValue.green)}
            aria-hidden="true"
          >
            {value}%
          </div>
          <p className="text-[13px] text-muted-foreground">{caption}</p>
        </div>

        <div
          role="progressbar"
          aria-label="Build progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={target}
          aria-valuetext={`${target}% · ${caption}`}
          className="mt-4 h-2 overflow-hidden rounded-full bg-black/6 dark:bg-white/10"
        >
          <div className="relative h-full overflow-hidden rounded-full bg-primary" style={{ width: `${value}%` }}>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-transparent via-white/40 to-transparent motion-safe:animate-shimmer motion-reduce:hidden dark:via-black/25"
            />
          </div>
        </div>

        <ol aria-label="Launch stages" className="mt-5 flex flex-wrap gap-2">
          {stages.map((stage) => (
            <li key={stage.label}>
              <StatusPill color={stageColor[stage.status]} pulse={stage.status === 'active'}>
                {stage.label}
                <span className="sr-only">({stageText[stage.status]})</span>
              </StatusPill>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
