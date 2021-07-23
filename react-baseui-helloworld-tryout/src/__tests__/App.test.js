import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

import { ensureMocksReset } from '@shopify/jest-dom-mocks';
import { installMockStorage } from '@shopify/jest-dom-mocks';

import { requestIdleCallback } from '@shopify/jest-dom-mocks';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

test('helloworld', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/123/i);
  expect(linkElement).toBeInTheDocument();
});
