import { cn } from '@/lib/utils';

type Token = [string, 'k' | 'f' | 's' | 'c' | 'p' | 'v'];

// A small, real-looking excerpt: matching an M-Pesa payment to an invoice.
const lines: Token[][] = [
  [['// payments/reconcile.ts', 'c']],
  [['export async function ', 'k'], ['reconcile', 'f'], ['(payment: ', 'p'], ['MpesaPayment', 'v'], [') {', 'p']],
  [['  const ', 'k'], ['invoice ', 'v'], ['= ', 'p'], ['await ', 'k'], ['invoices.', 'v'], ['findByRef', 'f'], ['(payment.ref);', 'p']],
  [['  if ', 'k'], ['(!invoice) ', 'p'], ['return ', 'k'], ['exceptions.', 'v'], ['queue', 'f'], ['(payment);', 'p']],
  [['  await ', 'k'], ['ledger.', 'v'], ['post', 'f'], ['({ invoice, payment });', 'p']],
  [['  await ', 'k'], ['sms.', 'v'], ['receipt', 'f'], ['(payment.phone, ', 'p'], ["'Payment received'", 's'], [');', 'p']],
  [['}', 'p']],
];

const tone = {
  k: 'text-[#c678dd] dark:text-[#d7a6f0]',
  f: 'text-brand-ink',
  s: 'text-[#3f9a5b] dark:text-[#8fd19e]',
  c: 'text-faint',
  p: 'text-foreground/70',
  v: 'text-foreground',
};

/** Decorative code panel for the Custom Software card. */
export function CodeSnippet({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-border bg-background/70', className)} aria-hidden>
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <i className="size-2 rounded-full bg-foreground/15" />
        <i className="size-2 rounded-full bg-foreground/15" />
        <i className="size-2 rounded-full bg-foreground/15" />
        <span className="ml-3 font-mono text-[0.6875rem] text-muted-foreground">reconcile.ts</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.6875rem] text-success">
          <span className="size-1.5 rounded-full bg-success" />
          tests passing
        </span>
      </div>
      <pre className="overflow-hidden px-4 py-4 font-mono text-[0.75rem] leading-6 sm:text-[0.8125rem]">
        {lines.map((line, i) => (
          <div key={i} className="flex whitespace-pre">
            <span className="mr-4 w-4 shrink-0 text-right text-faint/70 select-none">{i + 1}</span>
            <span>
              {line.map(([text, kind], j) => (
                <span key={j} className={tone[kind]}>
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
