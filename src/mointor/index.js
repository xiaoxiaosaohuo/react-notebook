import Raven from "raven-js";
const sentry_key = "736f8f3c7e904a8fa5aff00f512d6aa4";
const sentry_app = "1390740";
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;
export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  window && window.console && console.error && console.error(ex);
}
