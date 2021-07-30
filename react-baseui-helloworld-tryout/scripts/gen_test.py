#!/usr/bin/env python3

import os,sys


template='''import React from 'react';
import { render } from '@testing-library/react';

import { ensureMocksReset } from '@shopify/jest-dom-mocks';
// import { installMockStorage } from '@shopify/jest-dom-mocks';
import { requestIdleCallback } from '@shopify/jest-dom-mocks';

// import App from 'src/App';
import TestHelloworld from '{component_path}';

beforeEach(() => {
  requestIdleCallback.mock();
});

afterEach(() => {
  requestIdleCallback.restore();
  ensureMocksReset();
});

test('{component_path} helloworld', () => {
  const test_render = render(<TestHelloworld />);
  expect(test_render).toMatchSnapshot();
});

'''

component_list = [
  'src/__tests__/components/NAVIGATION/Breadcrumbs/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Link/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Pagination/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Tabs/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Navigation_Bar/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Header_Navigation/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Side_Navigation/index.test.jsx',
  'src/__tests__/components/NAVIGATION/Tabs_Motion/index.test.jsx',
  'src/__tests__/components/ButtonHelloworld.jsx',
  'src/__tests__/components/Hello.jsx',
  'src/__tests__/components/INPUTS/Button/index.test.jsx',
  'src/__tests__/components/INPUTS/Checkbox/index.test.jsx',
  'src/__tests__/components/INPUTS/Combobox/index.test.jsx',
  'src/__tests__/components/INPUTS/Input/index.test.jsx',
  'src/__tests__/components/INPUTS/Radio/index.test.jsx',
  'src/__tests__/components/INPUTS/Slider/index.test.jsx',
  'src/__tests__/components/INPUTS/Textarea/index.test.jsx',
  'src/__tests__/components/INPUTS/Button_Group/index.test.jsx',
  'src/__tests__/components/INPUTS/Form_Control/index.test.jsx',
  'src/__tests__/components/INPUTS/Payment_Card/index.test.jsx',
  'src/__tests__/components/INPUTS/Phone_Input/index.test.jsx',
  'src/__tests__/components/INPUTS/Pin_Code/index.test.jsx',
  'src/__tests__/components/PICKERS/Menu/index.test.jsx',
  'src/__tests__/components/PICKERS/Rating/index.test.jsx',
  'src/__tests__/components/PICKERS/Select/index.test.jsx',
  'src/__tests__/components/PICKERS/File_Uploader/index.test.jsx',
  'src/__tests__/components/DATE_and_TIME/Datepicker/index.test.jsx',
  'src/__tests__/components/DATE_and_TIME/Time_Picker/index.test.jsx',
  'src/__tests__/components/DATE_and_TIME/Timezone_Picker/index.test.jsx',
  'src/__tests__/components/CONTENT/Accordion/index.test.jsx',
  'src/__tests__/components/CONTENT/Avatar/index.test.jsx',
  'src/__tests__/components/CONTENT/Heading/index.test.jsx',
  'src/__tests__/components/CONTENT/Icon/index.test.jsx',
  'src/__tests__/components/CONTENT/List/index.test.jsx',
  'src/__tests__/components/CONTENT/Tag/index.test.jsx',
  'src/__tests__/components/CONTENT/Typography/index.test.jsx',
  'src/__tests__/components/CONTENT/Drag_and_Drop_List/index.test.jsx',
  'src/__tests__/components/CONTENT/Layout_Grid/index.test.jsx',
  'src/__tests__/components/CONTENT/Tree_View/index.test.jsx',
  'src/__tests__/components/TABLES/Table/index.test.jsx',
  'src/__tests__/components/TABLES/Data_Table/index.test.jsx',
  'src/__tests__/components/TABLES/Grid_Table/index.test.jsx',
  'src/__tests__/components/TABLES/Flex_Table/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Notification/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Skeleton/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Snackbar/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Spinner/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Toast/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Progress_Bar/index.test.jsx',
  'src/__tests__/components/PROGRESS_and_VALIDATION/Progress_Steps/index.test.jsx',
  'src/__tests__/components/SURFACES/Card/index.test.jsx',
  'src/__tests__/components/SURFACES/Drawer/index.test.jsx',
  'src/__tests__/components/SURFACES/Modal/index.test.jsx',
  'src/__tests__/components/SURFACES/Popover/index.test.jsx',
  'src/__tests__/components/SURFACES/Tooltip/index.test.jsx',
  'src/__tests__/components/UTILITY/AspectRatioBox/index.test.jsx',
  'src/__tests__/components/UTILITY/BaseProvider/index.test.jsx',
  'src/__tests__/components/UTILITY/Block/index.test.jsx',
  'src/__tests__/components/UTILITY/FlexGrid/index.test.jsx',
  'src/__tests__/components/UTILITY/Layer/index.test.jsx',
  'src/__tests__/components/UTILITY/UseStyletron/index.test.jsx',
  'src/__tests__/components/UTILITY/Styled/index.test.jsx',
  'src/__tests__/components/UTILITY/Tokens/index.test.jsx',
  'src/__tests__/components/UTILITY/A11y_Validator/index.test.jsx',
]

for filename in component_list:
  # filename = 'src/__tests__/components/CONTENT/Accordion/index.test.jsx'
  with open(filename,'a+') as f:
    f.truncate(0)
    component_path = filename.replace('src/__tests__/components', 'src/components').replace('/index.test.jsx','')

    temp = template
    f.write(temp.replace('{component_path}', component_path))
