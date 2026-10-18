import { site } from '../config/site';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

/**
 * Submit an email address to the configured newsletter endpoint.
 * Falls back to a simulated request when no endpoint is configured.
 */
export async function subscribe(email: string): Promise<void> {
  const { endpoint } = site.newsletter;

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email: email.trim() }),
  });

  if (!response.ok) {
    throw new Error(`Subscription failed with status ${response.status}`);
  }
}
