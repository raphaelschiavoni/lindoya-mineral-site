/**
 * Camada de eventos centralizada, preparada para Google Tag Manager.
 * Empurra eventos para o dataLayer quando disponível; caso contrário,
 * registra no console em ambiente de desenvolvimento.
 */
export type AnalyticsEvent =
  | "click_whatsapp"
  | "click_become_distributor"
  | "submit_distributor_form"
  | "submit_contact_form"
  | "view_product"
  | "download_commercial_material"
  | "search_store"
  | "click_store_route"
  | "click_sales_contact"
  | "newsletter_signup";

type TrackPayload = {
  event: AnalyticsEvent;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(payload: TrackPayload): void {
  if (typeof window === "undefined") return;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  } else if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", payload);
  }
}
