import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import * as serviceWorker from './serviceWorker';

let { REACT_APP_SENTRY_IO } = process.env;

Sentry.init({
  dsn: REACT_APP_SENTRY_IO,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  debug: true,
  initialScope: {
    tags: { category: 'meny-client/meny', url: window.location.href },
    user: { id: 42, email: 'john.doe@example.com' },
  },
});

Sentry.setContext('LYNKED_META', {
  category: 'meny-client/meny',
  class: 'meny',
  url: window.location.href,
});

ReactDOM.render(
  <React.StrictMode>
    <h1>{JSON.stringify({ REACT_APP_SENTRY_IO }, null, 2)}</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
