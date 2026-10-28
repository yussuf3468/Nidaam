import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  [
    'group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-semibold',
    'transition-[background-color,color,box-shadow,transform,border-color] duration-300 ease-out-expo',
    'disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(0_0_0/0.2),0_8px_20px_-8px_rgb(0_0_0/0.35)] hover:bg-primary/90',
        secondary:
          'border border-border bg-card text-card-foreground shadow-soft hover:border-border-strong hover:bg-card/80',
        outline: 'border border-border-strong bg-transparent text-foreground hover:bg-foreground/[0.04]',
        ghost: 'text-foreground hover:bg-foreground/[0.06]',
        link: 'rounded-md px-0 text-foreground underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-[0.9375rem]',
        lg: 'h-13 px-7 text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

/** Arrow that nudges right when its parent button is hovered. */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn('size-4 transition-transform duration-300 ease-out-expo group-hover/button:translate-x-0.5', className)}
    >
      <path d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
