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

import TestComponent from 'src/views/customer/CustomerListView/Results';

import customer_data_mock from 'src/__mocks__/customer_data_mock';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

// describe('mount src/views/product/ProductListView/ProductCard.js helloworld', () => {
//   customer_data_mock.forEach(test_product_data => {

//   });
// });
test(`mount src/views/customer/CustomerListView/Results.js`, () => {
  // let mount = createMount();

  // const wrapper = mount(<TestComponent customers={customer_data_mock} />);

  // expect(wrapper.html()).toMatchSnapshot();
  // mount.cleanUp();
  console.warn('skipping test');
});
