import { Activity, ArchiveRestore, BarChart3, Boxes, CircleCheck, GraduationCap, Truck, Users, Wallet } from 'lucide-react';
import { MARK_PATH } from '@/components/brand/logo-paths';
import { BRAND_BLUE } from '@/components/brand/logo';

/*
 * Abstract "system core" illustration for the home hero: business modules wired into
 * one core, with data pulses travelling along the connections. Pure SVG + CSS, so it
 * costs almost nothing to render and needs no JavaScript.
 */

const VB = 600;
const pct = (n: number) => `${(n / VB) * 100}%`;

const nodes = [
  { x: 92, y: 118, label: 'Payments', sub: 'M-Pesa · Bank', Icon: Wallet },
  { x: 508, y: 118, label: 'Inventory', sub: '9 branches', Icon: Boxes },
  { x: 74, y: 300, label: 'Learners', sub: 'Admissions', Icon: GraduationCap },
  { x: 526, y: 300, label: 'Dispatch', sub: 'Live routes', Icon: Truck },
  { x: 92, y: 482, label: 'People', sub: 'Payroll inputs', Icon: Users },
  { x: 508, y: 482, label: 'Reports', sub: 'Real time', Icon: BarChart3 },
];

const paths = [
  'M150 118 C205 118 192 256 228 256',
  'M450 118 C395 118 408 256 372 256',
  'M138 300 H228',
  'M462 300 H372',
  'M150 482 C205 482 192 344 228 344',
  'M450 482 C395 482 408 344 372 344',
];

export function HeroSystem() {
  return (
    <div
      className="relative aspect-square w-full select-none @container"
      role="img"
      aria-label="Illustration: payments, inventory, learners, dispatch, people and reporting modules connected to one core system"
    >
      {/* Rings and grid */}
      <svg viewBox={`0 0 ${VB} ${VB}`} className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <radialGradient id="hs-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <pattern id="hs-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" fillOpacity="0.22" />
          </pattern>
          <mask id="hs-mask">
            <rect width={VB} height={VB} fill="url(#hs-fade)" />
          </mask>
        </defs>
        <rect width={VB} height={VB} fill="url(#hs-dots)" mask="url(#hs-mask)" className="text-foreground" />
        {[110, 170, 240].map((r) => (
          <rect
            key={r}
            x={300 - r}
            y={300 - r}
            width={r * 2}
            height={r * 2}
            rx={r * 0.32}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.09"
            strokeDasharray={r === 170 ? '2 6' : undefined}
            className="text-foreground"
          />
        ))}

        {/* Connections */}
        {paths.map((d) => (
          <path key={d} d={d} fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.5" className="text-foreground" />
        ))}
        {paths.map((d, i) => (
          <path
            key={`flow-${d}`}
            d={d}
            fill="none"
            stroke={BRAND_BLUE}
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="3 9"
            className="animate-dash motion-reduce:hidden"
            style={{ animationDuration: `${1.4 + (i % 3) * 0.35}s`, animationDirection: i % 2 ? 'reverse' : 'normal' }}
          />
        ))}

        {/* Data pulses */}
        <g className="motion-reduce:hidden">
          {paths.map((d, i) => (
            <circle key={`pulse-${d}`} r="3.5" fill={BRAND_BLUE}>
              <animateMotion
                dur={`${2.6 + (i % 3) * 0.5}s`}
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
                path={d}
                keyPoints={i % 2 ? '1;0' : '0;1'}
                keyTimes="0;1"
                calcMode="linear"
              />
              <animate attributeName="opacity" values="0;1;1;0" dur={`${2.6 + (i % 3) * 0.5}s`} begin={`${i * 0.45}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </svg>

      {/* Core */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: pct(300), top: pct(300), width: pct(144), height: pct(144), fontSize: 'clamp(8px, 2.05cqi, 13px)' }}
      >
        <div className="absolute inset-[-18%] animate-pulse-soft rounded-[32%] bg-brand/10 blur-xl motion-reduce:animate-none" aria-hidden />
        <div className="relative flex size-full flex-col items-center justify-center gap-[0.6em] rounded-[28%] border border-border bg-card shadow-lift">
          <svg viewBox="0 0 131 131" className="w-[38%]" aria-hidden>
            <path d={MARK_PATH} fill={BRAND_BLUE} />
          </svg>
          <span className="font-mono text-[0.85em] tracking-wide text-muted-foreground">core</span>
        </div>
      </div>

      {/* Modules */}
      {nodes.map(({ x, y, label, sub, Icon }) => (
        <div
          key={label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-[0.7em] rounded-[0.9em] border border-border bg-card/90 py-[0.65em] pr-[1em] pl-[0.65em] shadow-soft backdrop-blur"
          style={{ left: pct(x), top: pct(y), fontSize: 'clamp(8px, 2.05cqi, 13px)' }}
        >
          <span className="grid size-[2.3em] place-items-center rounded-[0.6em] bg-background text-foreground">
            <Icon className="size-[1.25em]" strokeWidth={1.7} aria-hidden />
          </span>
          <span className="leading-tight whitespace-nowrap">
            <span className="block text-[1em] font-semibold">{label}</span>
            <span className="block font-mono text-[0.78em] text-muted-foreground">{sub}</span>
          </span>
        </div>
      ))}

      {/* Event toasts */}
      <div
        className="absolute flex -translate-x-1/2 items-center gap-[0.6em] rounded-full border border-border bg-card py-[0.45em] pr-[0.9em] pl-[0.5em] shadow-soft"
        style={{ left: pct(300), top: pct(26), fontSize: 'clamp(8px, 1.9cqi, 12px)' }}
      >
        <span className="grid size-[1.6em] place-items-center rounded-full bg-success/15 text-success">
          <CircleCheck className="size-[1.1em]" aria-hidden />
        </span>
        <span className="whitespace-nowrap">
          <span className="font-semibold">Payment matched</span>
          <span className="font-mono text-muted-foreground"> · KES 18,500</span>
        </span>
      </div>
      <div
        className="absolute flex -translate-x-1/2 items-center gap-[0.6em] rounded-full border border-border bg-card py-[0.45em] pr-[0.9em] pl-[0.5em] shadow-soft"
        style={{ left: pct(300), top: pct(548), fontSize: 'clamp(8px, 1.9cqi, 12px)' }}
      >
        <span className="grid size-[1.6em] place-items-center rounded-full bg-brand/15 text-brand-ink">
          <ArchiveRestore className="size-[1em]" aria-hidden />
        </span>
        <span className="whitespace-nowrap">
          <span className="font-semibold">Backup verified</span>
          <span className="font-mono text-muted-foreground"> · 02:00 EAT</span>
        </span>
        <Activity className="size-[1.1em] text-success" aria-hidden />
      </div>
    </div>
  );
}
