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

import TestComponent from 'src/views/product/ProductListView/ProductCard';

import product_data_mock from 'src/__mocks__/product_data_mock';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

describe('mount src/views/product/ProductListView/ProductCard.js helloworld', () => {
  product_data_mock.forEach(test_product_data => {
    test(`mount src/views/product/ProductListView/ProductCard.js ${test_product_data.title}`, () => {
      let mount = createMount();

      const wrapper = mount(
        <BrowserRouter>
          <TestComponent product={test_product_data} />
        </BrowserRouter>
      );

      expect(wrapper.html()).toMatchSnapshot();
      mount.cleanUp();
    });
  });
});
