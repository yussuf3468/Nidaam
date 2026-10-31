import { Info } from 'lucide-react';

/** Explains that the projects shown are examples of our approach, not client results. */
export function SampleNotice() {
  return (
    <p className="flex max-w-3xl items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0 text-brand-ink" aria-hidden />
      <span>
        These are example projects. They show how we would approach problems we see often in each industry. They are not client case
        studies and contain no client results. Published client work will be added as projects complete.
      </span>
    </p>
  );
}
