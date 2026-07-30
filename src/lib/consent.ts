import { useSyncExternalStore } from "react";

export type ConsentValue = "all" | "essential";

const STORAGE_KEY = "cookie-consent";
export const CONSENT_EVENT = "gha-consent-change";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "all" || value === "essential" ? value : null;
}

export function setConsent(value: ConsentValue) {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function hasAdConsent(): boolean {
  return getConsent() === "all";
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerConsentSnapshot() {
  return false;
}

// Reads ad/tracking consent as reactive external state — no scripts or ad
// slots render until this flips true, so SSR and first client render both
// safely start at "not consented" (getServerConsentSnapshot).
export function useHasAdConsent(): boolean {
  return useSyncExternalStore(subscribeToConsent, hasAdConsent, getServerConsentSnapshot);
}
