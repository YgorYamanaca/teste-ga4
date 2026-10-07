import { ANALYTIC_CORE_COMMAND } from "./events";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const debug = import.meta.env.VITE_GA_DEBUG === "true";

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (!measurementId || !window.gtag) {
    return;
  }

  window.gtag(ANALYTIC_CORE_COMMAND.EVENT, eventName, {
    ...params,
    ...(debug && { debug_mode: true }),
  });
}

export function setUserId(userId: string) {
  window.gtag?.(ANALYTIC_CORE_COMMAND.CONFIG, measurementId, {
    user_id: userId,
    ...(debug && { debug_mode: true }),
  });
}

export function clearUserId() {
  window.gtag?.(ANALYTIC_CORE_COMMAND.CONFIG, measurementId, {
    user_id: null,
    ...(debug && { debug_mode: true }),
  });
}
