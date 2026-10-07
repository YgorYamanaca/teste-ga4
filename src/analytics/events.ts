export const ANALYTICS_EVENTS = {
  ADD_CART: "add_cart",
  TEST: "test",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export const ANALYTIC_CORE_COMMAND = {
  CONFIG: "config",
  EVENT: "event",
};
