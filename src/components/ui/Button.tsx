import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'default' | 'outline' | 'ghost' | 'quiet';
type Size = 'sm' | 'default' | 'lg' | 'toolbar' | 'xl' | 'icon' | 'icon-lg';

const base =
  'inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent ' +
  'text-sm font-medium outline-none transition-all duration-150 active:translate-y-px ' +
  'focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 ' +
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const variants: Record<Variant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/80',
  outline: 'border-border bg-transparent hover:bg-card dark:border-input dark:hover:bg-input/30',
  ghost: 'text-muted-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10',
  quiet: 'bg-black/5 text-foreground hover:bg-black/8 dark:bg-white/10 dark:hover:bg-white/15',
};

const sizes: Record<Size, string> = {
  sm: 'h-7 px-2.5 text-[13px]',
  default: 'h-8 px-2.5',
  lg: 'h-9 px-3',
  toolbar: 'h-9 px-3 text-[13px]',
  xl: 'h-11 px-6 text-[15px]',
  icon: 'size-8',
  'icon-lg': 'size-9',
};

export interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
}

export function buttonStyles({ variant = 'default', size = 'default' }: ButtonStyleProps = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps;

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size }, className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonStyleProps;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonStyles({ variant, size }, className)} {...props} />;
}
