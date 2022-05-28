import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';
import { boot } from './app';
import project from '../package.json';

Sentry.init({
  release: `${project.name}@${project.version}`,
  dsn: 'https://89402cd2f8344ebfb6e7733b96764853@o214695.ingest.sentry.io/6449929',
  integrations: [new BrowserTracing()],
  tracesSampleRate: Number(process.env.SENTRY_SAMPLE_RATE),
});

boot();
