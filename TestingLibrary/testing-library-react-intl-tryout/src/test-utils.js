// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/pt';

function render(ui, { locale = 'pt', ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export const setupTests = () => {
  // https://formatjs.io/docs/guides/runtime-requirements/#nodejs
  if (global.Intl) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  } else {
    global.Intl = IntlPolyfill;
  }
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
