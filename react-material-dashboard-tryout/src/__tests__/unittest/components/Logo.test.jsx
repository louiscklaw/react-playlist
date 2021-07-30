import React from 'react';
import {
  createRender,
  createMount,
  createShallow
} from '@material-ui/core/test-utils';

import { BrowserRouter } from 'react-router-dom';

import { ensureMocksReset } from '@shopify/jest-dom-mocks';
// import { installMockStorage } from '@shopify/jest-dom-mocks';
import { requestIdleCallback } from '@shopify/jest-dom-mocks';

import TestComponent from 'src/components/Logo';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

test('mount src/components/Logo.js helloworld', () => {
  const mount = createMount();

  const wrapper = mount(
    <BrowserRouter>
      <TestComponent />
    </BrowserRouter>
  );

  expect(wrapper.html()).toMatchSnapshot();
  mount.cleanUp();
});
