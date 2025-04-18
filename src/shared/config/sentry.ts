import * as Sentry from '@sentry/react';

export const InitSentry = ({ subid }: { subid: string }) => {
  Sentry.init({
    // dsn: 'https://8cfdfb4b1a1183a42cc358080132afce@o4509077073100800.ingest.de.sentry.io/4509078945202256',
    replaysSessionSampleRate: 0.9,
    replaysOnErrorSampleRate: 1.0,
    initialScope: scope => {
      scope.setTags({ subid: subid });
      return scope;
    },
    integrations: [
      Sentry.replayIntegration({
        maskAllText: false,
      }),
    ],
  });
};
