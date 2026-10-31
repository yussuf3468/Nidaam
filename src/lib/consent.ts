/*
 * Cookie and storage consent, kept in the visitor's browser.
 * Essential storage (theme preference, this consent record) is always allowed.
 * Anything optional, such as analytics, must check `hasConsent('analytics')` before it
 * loads. The site currently loads no optional scripts at all.
 */

export const CONSENT_KEY = 'nidaam-consent';
export const CONSENT_EVENT = 'nidaam:consent-change';
export const OPEN_SETTINGS_EVENT = 'nidaam:open-cookie-settings';

export type Consent = { analytics: boolean; decidedAt: string; version: 1 };

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean) {
  const consent: Consent = { analytics, decidedAt: new Date().toISOString(), version: 1 };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked: the choice applies to this visit only.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}

/** True only after an explicit "Accept". Global Privacy Control always means no. */
export function hasConsent(category: 'analytics') {
  if (typeof window === 'undefined') return false;
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return false;
  return readConsent()?.[category] === true;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
