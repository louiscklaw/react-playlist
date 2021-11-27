import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const isHuman = () => {
  const agents = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebot',
    'ia_archiver',
    'sitecheckerbotcrawler',
  ];
  return !navigator.userAgent.match(new RegExp(agents.join('|'), 'i'));
};

if (isHuman()) {
  // performance consideration
  // the app is highly orientated by the routes data
  // fetching should be done to avoid unnecessary rendering
  // Target: render only if development or prerendering or in registered app or lazy loading page
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  let prerenderStyle = document.querySelector("style[prerender]");

  console.log('canonicalLink', canonicalLink);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
