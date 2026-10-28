import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

/** Fluid page width: fills the screen up to 1760px, with gutters that grow with it. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-10 xl:px-14', className)} {...props} />;
}
