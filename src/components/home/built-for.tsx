import { icons } from '@/components/icons';
import { Marquee } from '@/components/motion/marquee';
import { industries } from '@/content/industries';

/** "Trusted by" strip. Shows the sectors we build for rather than client logos we cannot yet name. */
export function BuiltFor() {
  return (
    <section aria-label="Industries we build for" className="border-y border-border py-8">
      <div className="container-site flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
        <p className="eyebrow shrink-0 lg:w-60">Building systems for</p>
        <Marquee duration={55} className="min-w-0 flex-1">
          {industries.map((industry) => {
            const Icon = icons[industry.icon];
            return (
              <span key={industry.slug} className="flex items-center gap-3 px-7 text-lg font-semibold tracking-tight whitespace-nowrap text-foreground/65 sm:text-xl">
                <Icon className="size-5 text-foreground/40" strokeWidth={1.6} aria-hidden />
                {industry.name}
              </span>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
