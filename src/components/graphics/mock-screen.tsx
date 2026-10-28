import type { ReactNode } from 'react';
import type { MockVariant } from '@/content/case-studies';
import { cn } from '@/lib/utils';

/*
 * Code-drawn product screens used as illustrations and screenshot placeholders.
 * Sizes are in `em` relative to a font size derived from the frame width
 * (container query units), so each screen scales as one image.
 * Replace with real product screenshots as client work is published.
 */

const labels: Record<MockVariant, string> = {
  school: 'Illustration of a school management dashboard showing fee collections and M-Pesa payments',
  ops: 'Illustration of a business operations dashboard with sales, stock and branch performance',
  clinic: 'Illustration of a clinic patient queue and billing screen',
  booking: 'Illustration of a booking calendar with upcoming departures',
  dispatch: 'Illustration of a dispatch board with delivery routes and drivers',
  field: 'Illustration of a field data collection app working offline',
};

export function MockScreen({ variant, className }: { variant: MockVariant; className?: string }) {
  return (
    <div className={cn('@container', className)} role="img" aria-label={labels[variant]}>
      <div aria-hidden style={{ fontSize: 'clamp(6px, 1.55cqi, 13px)' }}>
        {variant === 'field' ? <FieldPhone /> : <Window variant={variant} />}
      </div>
    </div>
  );
}

const titles: Record<Exclude<MockVariant, 'field'>, { path: string; nav: string[]; active: number }> = {
  school: { path: 'Fees / Collections', nav: ['Overview', 'Learners', 'Fees', 'Academics', 'Attendance', 'Reports'], active: 2 },
  ops: { path: 'Overview / All branches', nav: ['Overview', 'Sales', 'Inventory', 'Purchasing', 'Finance', 'People'], active: 0 },
  clinic: { path: 'Front desk / Queue', nav: ['Queue', 'Patients', 'Appointments', 'Billing', 'Claims', 'Pharmacy'], active: 0 },
  booking: { path: 'Bookings / October', nav: ['Bookings', 'Itineraries', 'Quotes', 'Suppliers', 'Payments', 'Reports'], active: 0 },
  dispatch: { path: 'Dispatch / Today', nav: ['Dispatch', 'Orders', 'Drivers', 'Vehicles', 'Deliveries', 'Invoices'], active: 0 },
};

function Window({ variant }: { variant: Exclude<MockVariant, 'field'> }) {
  const t = titles[variant];
  return (
    <div className="overflow-hidden rounded-[1.1em] border border-border bg-card shadow-lift">
      <div className="flex items-center gap-[0.8em] border-b border-border bg-background/60 px-[1em] py-[0.7em]">
        <span className="flex gap-[0.4em]">
          <i className="size-[0.7em] rounded-full bg-foreground/15" />
          <i className="size-[0.7em] rounded-full bg-foreground/15" />
          <i className="size-[0.7em] rounded-full bg-foreground/15" />
        </span>
        <span className="mx-auto rounded-full bg-muted px-[1.2em] py-[0.25em] font-mono text-[0.8em] text-muted-foreground">{t.path}</span>
        <span className="w-[2.6em]" />
      </div>
      <div className="grid grid-cols-[22%_1fr]">
        <aside className="space-y-[0.35em] border-r border-border p-[0.9em]">
          <div className="mb-[1em] flex items-center gap-[0.5em]">
            <span className="size-[1.6em] rounded-[0.4em] bg-brand" />
            <span className="h-[0.55em] w-[50%] rounded bg-foreground/20" />
          </div>
          {t.nav.map((item, i) => (
            <div
              key={item}
              className={cn(
                'flex items-center gap-[0.5em] rounded-[0.45em] px-[0.6em] py-[0.45em] text-[0.85em]',
                i === t.active ? 'bg-foreground/[0.06] font-semibold text-foreground' : 'text-muted-foreground',
              )}
            >
              <span className={cn('size-[0.75em] rounded-[0.2em]', i === t.active ? 'bg-brand' : 'bg-foreground/15')} />
              {item}
            </div>
          ))}
        </aside>
        <div className="space-y-[1em] p-[1.1em]">{content[variant]}</div>
      </div>
    </div>
  );
}

function Kpi({ label, value, note, tone = 'neutral' }: { label: string; value: string; note: string; tone?: 'neutral' | 'up' | 'warn' }) {
  return (
    <div className="rounded-[0.7em] border border-border p-[0.8em]">
      <p className="font-sans text-[0.75em] text-muted-foreground">{label}</p>
      <p className="mt-[0.2em] font-sans text-[1.45em] leading-tight font-bold tracking-tight">{value}</p>
      <p
        className={cn(
          'mt-[0.2em] font-mono text-[0.7em]',
          tone === 'up' ? 'text-success' : tone === 'warn' ? 'text-warning' : 'text-muted-foreground',
        )}
      >
        {note}
      </p>
    </div>
  );
}

function Bars({ values, highlight }: { values: number[]; highlight?: number }) {
  return (
    <div className="flex h-[7em] items-end gap-[0.45em]">
      {values.map((v, i) => (
        <span
          key={i}
          className={cn('flex-1 rounded-t-[0.3em]', i === highlight ? 'bg-brand' : 'bg-foreground/10')}
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}

function Panel({ title, meta, children }: { title: string; meta?: string; children: ReactNode }) {
  return (
    <div className="rounded-[0.7em] border border-border p-[0.9em]">
      <div className="mb-[0.7em] flex items-center justify-between">
        <p className="font-sans text-[0.85em] font-semibold">{title}</p>
        {meta && <p className="font-mono text-[0.7em] text-muted-foreground">{meta}</p>}
      </div>
      {children}
    </div>
  );
}

function Status({ tone, children }: { tone: 'ok' | 'wait' | 'info'; children: ReactNode }) {
  return (
    <span
      className={cn(
        'rounded-full px-[0.6em] py-[0.15em] font-mono text-[0.68em]',
        tone === 'ok' && 'bg-success/12 text-success',
        tone === 'wait' && 'bg-warning/15 text-warning',
        tone === 'info' && 'bg-brand/12 text-brand-ink',
      )}
    >
      {children}
    </span>
  );
}

function Rows({ rows }: { rows: [string, string, string, 'ok' | 'wait' | 'info', string][] }) {
  return (
    <div className="divide-y divide-border">
      {rows.map(([a, b, c, tone, status]) => (
        <div key={a} className="grid grid-cols-[1.1fr_1.3fr_1fr_auto] items-center gap-[0.6em] py-[0.5em] text-[0.78em]">
          <span className="font-mono text-muted-foreground">{a}</span>
          <span className="truncate font-sans font-medium">{b}</span>
          <span className="font-mono">{c}</span>
          <Status tone={tone}>{status}</Status>
        </div>
      ))}
    </div>
  );
}

const content: Record<Exclude<MockVariant, 'field'>, ReactNode> = {
  school: (
    <>
      <div className="grid grid-cols-3 gap-[0.7em]">
        <Kpi label="Learners" value="1,248" note="3 campuses" />
        <Kpi label="Fees collected" value="82%" note="+6% this week" tone="up" />
        <Kpi label="Auto-matched" value="95%" note="M-Pesa paybill" tone="up" />
      </div>
      <div className="grid grid-cols-[1fr_1.2fr] gap-[0.7em]">
        <Panel title="Collections" meta="Term 3">
          <Bars values={[38, 52, 46, 70, 64, 88, 74]} highlight={5} />
        </Panel>
        <Panel title="Recent payments" meta="Live">
          <Rows
            rows={[
              ['QJK4T…', 'ADM-2041', '18,500', 'ok', 'Matched'],
              ['QJK4S…', 'ADM-1187', '9,000', 'ok', 'Matched'],
              ['QJK4R…', 'adm 0932', '12,000', 'wait', 'Review'],
              ['QJK4P…', 'ADM-2210', '24,750', 'ok', 'Matched'],
            ]}
          />
        </Panel>
      </div>
    </>
  ),
  ops: (
    <>
      <div className="grid grid-cols-3 gap-[0.7em]">
        <Kpi label="Sales today" value="KES 1.42M" note="+12% vs last Tue" tone="up" />
        <Kpi label="Orders" value="386" note="9 branches" />
        <Kpi label="Low stock" value="12 items" note="Reorder suggested" tone="warn" />
      </div>
      <Panel title="Sales this week" meta="All branches">
        <svg viewBox="0 0 300 70" className="h-[6em] w-full" preserveAspectRatio="none">
          <path d="M0 55 C30 50 45 30 75 34 S120 52 150 38 S205 12 235 20 S280 30 300 10 V70 H0Z" fill="#00AEFF" fillOpacity="0.12" />
          <path d="M0 55 C30 50 45 30 75 34 S120 52 150 38 S205 12 235 20 S280 30 300 10" fill="none" stroke="#00AEFF" strokeWidth="2" />
        </svg>
      </Panel>
      <Panel title="Branches" meta="Today">
        <Rows
          rows={[
            ['BR-01', 'Westlands', '214,300', 'ok', 'Synced'],
            ['BR-04', 'Eastleigh', '188,950', 'ok', 'Synced'],
            ['BR-07', 'Thika Road', '97,400', 'info', 'Offline'],
          ]}
        />
      </Panel>
    </>
  ),
  clinic: (
    <>
      <div className="grid grid-cols-3 gap-[0.7em]">
        <Kpi label="Waiting" value="14" note="Avg 18 min" />
        <Kpi label="Seen today" value="126" note="5 clinics" />
        <Kpi label="Claims ready" value="38" note="Checks passed" tone="up" />
      </div>
      <Panel title="Queue" meta="Front desk">
        <Rows
          rows={[
            ['A-041', 'Consultation', '09:42', 'info', 'Triage'],
            ['A-042', 'Laboratory', '09:44', 'wait', 'Waiting'],
            ['A-043', 'Pharmacy', '09:47', 'ok', 'Ready'],
            ['A-044', 'Consultation', '09:51', 'wait', 'Waiting'],
          ]}
        />
      </Panel>
    </>
  ),
  booking: (
    <>
      <Panel title="Departures" meta="October">
        <div className="grid grid-cols-7 gap-[0.3em]">
          {Array.from({ length: 28 }, (_, i) => {
            const booked = [2, 3, 4, 9, 10, 15, 16, 17, 18, 23, 24].includes(i);
            const full = [16, 17].includes(i);
            return (
              <span
                key={i}
                className={cn(
                  'flex aspect-[1.4] items-start rounded-[0.3em] p-[0.25em] font-mono text-[0.6em]',
                  full ? 'bg-brand text-white' : booked ? 'bg-brand/15 text-brand-ink' : 'bg-foreground/[0.04] text-muted-foreground',
                )}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      </Panel>
      <Panel title="Upcoming" meta="Deposits">
        <Rows
          rows={[
            ['TRP-318', 'Maasai Mara · 3N', '6 pax', 'ok', 'Paid'],
            ['TRP-322', 'Amboseli · 2N', '4 pax', 'wait', 'Deposit'],
            ['TRP-325', 'Diani · 5N', '2 pax', 'ok', 'Paid'],
          ]}
        />
      </Panel>
    </>
  ),
  dispatch: (
    <>
      <div className="grid grid-cols-[1.4fr_1fr] gap-[0.7em]">
        <div className="relative overflow-hidden rounded-[0.7em] border border-border bg-dots">
          <svg viewBox="0 0 200 140" className="h-full min-h-[13em] w-full">
            <path d="M20 120 L60 95 L95 100 L130 60 L175 30" fill="none" stroke="#00AEFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 120 L40 70 L80 50 L120 25" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 4" />
            {[
              [20, 120],
              [60, 95],
              [95, 100],
              [130, 60],
              [175, 30],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="var(--card)" stroke="#00AEFF" strokeWidth="2" />
            ))}
            <circle cx="95" cy="100" r="8" fill="#00AEFF" fillOpacity="0.2" />
          </svg>
        </div>
        <div className="space-y-[0.7em]">
          <Kpi label="On the road" value="31 / 40" note="vehicles" />
          <Kpi label="Delivered" value="214" note="Proof captured" tone="up" />
        </div>
      </div>
      <Panel title="Jobs" meta="Live">
        <Rows
          rows={[
            ['KDA 4…', 'Route 7 · 12 drops', '8 / 12', 'info', 'En route'],
            ['KCZ 9…', 'Route 3 · 9 drops', '9 / 9', 'ok', 'Done'],
            ['KDB 1…', 'Route 11 · 15 drops', '0 / 15', 'wait', 'Loading'],
          ]}
        />
      </Panel>
    </>
  ),
};

/** Parent app screen: fee balance, M-Pesa receipt and school updates. */
export function ParentPhone({ className }: { className?: string }) {
  return (
    <div className={cn('@container', className)} role="img" aria-label="Illustration of a parent app showing a paid fee balance and an M-Pesa receipt">
      <div aria-hidden style={{ fontSize: 'clamp(6px, 5.2cqi, 13px)' }}>
        <div className="rounded-[2.4em] border border-border bg-card p-[0.55em] shadow-lift">
          <div className="overflow-hidden rounded-[1.9em] border border-border bg-background">
            <div className="flex items-center justify-between px-[1.3em] pt-[0.9em] pb-[0.5em] font-mono text-[0.72em] text-muted-foreground">
              <span>09:41</span>
              <span className="h-[1.1em] w-[4.5em] rounded-full bg-foreground/80" />
              <span>4G</span>
            </div>
            <div className="space-y-[0.75em] p-[1em]">
              <p className="font-sans text-[0.8em] text-muted-foreground">Fee statement · Grade 6</p>
              <div className="rounded-[0.9em] bg-primary p-[1em] text-primary-foreground">
                <p className="font-sans text-[0.72em] opacity-70">Balance, Term 3</p>
                <p className="mt-[0.15em] font-sans text-[1.6em] leading-tight font-bold tracking-tight">KES 0.00</p>
                <p className="mt-[0.3em] flex items-center gap-[0.4em] font-sans text-[0.72em]">
                  <span className="size-[0.55em] rounded-full bg-success" />
                  Paid in full
                </p>
              </div>
              <div className="rounded-[0.9em] border border-border bg-card p-[0.85em]">
                <div className="flex items-center justify-between">
                  <p className="font-sans text-[0.8em] font-semibold">M-Pesa payment</p>
                  <Status tone="ok">Received</Status>
                </div>
                <p className="mt-[0.3em] font-mono text-[0.72em] text-muted-foreground">KES 18,500 · Today 09:41</p>
                <p className="font-mono text-[0.72em] text-muted-foreground">Receipt QJK4T7XA2M</p>
              </div>
              {['Term 3 report card is ready', 'Half-term break starts Friday'].map((note) => (
                <div key={note} className="flex items-center gap-[0.6em] rounded-[0.9em] border border-border bg-card p-[0.75em]">
                  <span className="size-[1.6em] shrink-0 rounded-[0.5em] bg-brand/15" />
                  <p className="font-sans text-[0.78em] leading-snug">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldPhone() {
  return (
    <div className="mx-auto w-[58%] rounded-[2.6em] border border-border bg-card p-[0.7em] shadow-lift">
      <div className="overflow-hidden rounded-[2em] border border-border bg-background">
        <div className="flex items-center justify-between px-[1.4em] pt-[1em] pb-[0.6em] font-mono text-[0.75em] text-muted-foreground">
          <span>09:41</span>
          <span className="h-[1.2em] w-[5em] rounded-full bg-foreground/80" />
          <span>4G</span>
        </div>
        <div className="space-y-[0.8em] p-[1.1em]">
          <div className="flex items-center justify-between">
            <p className="font-sans text-[1.15em] font-bold">Household visit</p>
            <Status tone="wait">Offline · 3 queued</Status>
          </div>
          {['Household ID', 'Village', 'Members', 'Last visit'].map((field, i) => (
            <div key={field} className="rounded-[0.7em] border border-border bg-card p-[0.7em]">
              <p className="font-sans text-[0.7em] text-muted-foreground">{field}</p>
              <p className="mt-[0.15em] font-mono text-[0.85em]">{['HH-20417', 'Ward 4', '6', '12 Oct 2026'][i]}</p>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-[0.6em]">
            <div className="grid aspect-[1.3] place-items-center rounded-[0.7em] border border-dashed border-border-strong font-mono text-[0.7em] text-muted-foreground">
              Photo ✓
            </div>
            <div className="grid aspect-[1.3] place-items-center rounded-[0.7em] border border-dashed border-border-strong font-mono text-[0.7em] text-muted-foreground">
              GPS ✓
            </div>
          </div>
          <div className="rounded-full bg-primary py-[0.8em] text-center font-sans text-[0.9em] font-semibold text-primary-foreground">
            Save visit
          </div>
          <div className="h-[0.35em] overflow-hidden rounded-full bg-foreground/10">
            <div className="h-full w-[62%] rounded-full bg-brand" />
          </div>
          <p className="text-center font-mono text-[0.7em] text-muted-foreground">Syncs automatically when back in coverage</p>
        </div>
      </div>
    </div>
  );
}
