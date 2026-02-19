type TrackParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  if (process.env.NODE_ENV !== "production") {
    // Lightweight local visibility during development.
    // eslint-disable-next-line no-console
    console.log("[track]", eventName, params);
  }
}
