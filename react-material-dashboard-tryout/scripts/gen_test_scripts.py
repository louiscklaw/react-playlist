#!/usr/bin/env python3

import os,sys
from subprocess import check_output


template='''import React from 'react';
import {
  createRender,
  createMount,
  createShallow
} from '@material-ui/core/test-utils';

import { BrowserRouter } from 'react-router-dom';

import { ensureMocksReset } from '@shopify/jest-dom-mocks';
// import { installMockStorage } from '@shopify/jest-dom-mocks';
import { requestIdleCallback } from '@shopify/jest-dom-mocks';

import TestComponent from '{component_path}';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

test('mount {component_path} helloworld', () => {
  const mount = createMount();

  const wrapper = mount(
    <BrowserRouter>
        <TestComponent />
    </BrowserRouter>
  );

  expect(wrapper.html()).toMatchSnapshot();
  mount.cleanUp();
});
'''

component_list = [
  'src/components/Logo.js',
  'src/components/Page.js',
  # 'src/App.js',
  'src/components/GlobalStyles.js',
  'src/contexts/AppContexts.js'
  'src/icons/Facebook.js',
  'src/icons/Google.js',
  # 'src/index.js',
  'src/layouts/DashboardLayout/index.js',
  'src/layouts/DashboardLayout/NavBar/index.js',
  # 'src/layouts/DashboardLayout/NavBar/NavItem.js',
  'src/layouts/DashboardLayout/TopBar.js',
  'src/layouts/MainLayout/index.js',
  'src/layouts/MainLayout/TopBar.js',
  # 'src/mixins/chartjs.js',
  # 'src/routes.js',
  # 'src/theme/index.js',
  # 'src/theme/shadows.js',
  # 'src/theme/typography.js',
  'src/views/account/AccountView/index.js',
  'src/views/account/AccountView/Profile.js',
  'src/views/account/AccountView/ProfileDetails.js',
  'src/views/auth/LoginView.js',
  'src/views/auth/RegisterView.js',
  'src/views/customer/CustomerListView/data.js',
  'src/views/customer/CustomerListView/index.js',
  'src/views/customer/CustomerListView/Results.js',
  'src/views/customer/CustomerListView/Toolbar.js',
  'src/views/errors/NotFoundView.js',
  'src/views/product/ProductListView/data.js',
  'src/views/product/ProductListView/index.js',
  'src/views/product/ProductListView/ProductCard.js',
  'src/views/product/ProductListView/Toolbar.js',
  'src/views/reports/DashboardView/Budget.js',
  'src/views/reports/DashboardView/index.js',
  'src/views/reports/DashboardView/LatestOrders.js',
  'src/views/reports/DashboardView/LatestProducts.js',
  'src/views/reports/DashboardView/Sales.js',
  'src/views/reports/DashboardView/TasksProgress.js',
  'src/views/reports/DashboardView/TotalCustomers.js',
  'src/views/reports/DashboardView/TotalProfit.js',
  'src/views/reports/DashboardView/TrafficByDevice.js',
  'src/views/settings/SettingsView/index.js',
  'src/views/settings/SettingsView/Notifications.js',
  'src/views/settings/SettingsView/Password.js',
]

for component_filename in component_list:
  # component_filename = 'src/__tests__/components/CONTENT/Accordion/index.test.jsx'
  test_filename = component_filename.replace('src/', 'src/__tests__/unittest/').replace('.js', '.test.jsx')

  check_output(f'mkdir -p {os.path.dirname(test_filename)}'.split(' '))

  with open(test_filename,'a+') as f:
    f.truncate(0)
    component_path = component_filename.replace('src/__tests__/components', 'src/components').replace('/index.jsx','')

    temp = template
    f.write(temp.replace('{component_path}', component_path))
