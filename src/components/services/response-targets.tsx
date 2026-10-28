import { responseTargets, supportHours } from '@/content/company';
import { cn } from '@/lib/utils';

/** Managed services response targets (from the capability statement). */
export function ResponseTargets({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-3xl border border-border bg-card', className)}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[0.9375rem]">
          <caption className="border-b border-border px-6 py-4 text-left text-sm text-muted-foreground">
            Support hours: {supportHours}
          </caption>
          <thead>
            <tr className="border-b border-border text-xs font-semibold text-muted-foreground">
              <th scope="col" className="px-6 py-3 font-normal">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Meaning
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Response
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Fix or workaround
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {responseTargets.map((row) => (
              <tr key={row.priority}>
                <th scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                  <span
                    className={cn(
                      'mr-2 inline-block size-2 rounded-full',
                      row.priority === 'P1' && 'bg-destructive',
                      row.priority === 'P2' && 'bg-warning',
                      row.priority === 'P3' && 'bg-brand',
                      row.priority === 'P4' && 'bg-faint',
                    )}
                    aria-hidden
                  />
                  {row.priority} · {row.name}
                </th>
                <td className="px-6 py-4 text-muted-foreground">{row.meaning}</td>
                <td className="px-6 py-4 font-semibold whitespace-nowrap">{row.response}</td>
                <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
