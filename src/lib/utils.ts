import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFormatter = new Intl.DateTimeFormat('en-KE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Africa/Nairobi',
});

/** "28 October 2026" */
export function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

/** True when `href` is the current page or one of its sub-pages. */
export function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

/** Two-digit index label: 1 -> "01". */
export function pad2(n: number) {
  return String(n).padStart(2, '0');
}
