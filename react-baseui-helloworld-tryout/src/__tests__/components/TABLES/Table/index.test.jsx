import React from 'react';
import { render } from '@testing-library/react';

import { ensureMocksReset } from '@shopify/jest-dom-mocks';
// import { installMockStorage } from '@shopify/jest-dom-mocks';
import { requestIdleCallback } from '@shopify/jest-dom-mocks';

// import App from 'src/App';
import TestHelloworld from 'src/components/TABLES/Table';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

test('src/components/TABLES/Table helloworld', () => {
  const test_render = render(<TestHelloworld />);
  expect(test_render).toMatchSnapshot();
});

