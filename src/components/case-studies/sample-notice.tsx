import { Info } from 'lucide-react';
import { site } from '@/content/site';

/** Explains that case studies are illustrative while `site.labelSampleContent` is on. */
export function SampleNotice() {
  if (!site.labelSampleContent) return null;
  return (
    <p className="flex max-w-3xl items-start gap-3 rounded-2xl border border-dashed border-border-strong bg-card/60 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0 text-brand-ink" aria-hidden />
      <span>
        These are illustrative engagements: representative examples of the systems we build and the results they are designed to
        deliver. Organisations are not named and figures are indicative. Published client work will replace them.
      </span>
    </p>
  );
}
