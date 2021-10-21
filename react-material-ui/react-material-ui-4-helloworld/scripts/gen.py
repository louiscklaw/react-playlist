#!/usr/bin/env python3

import os,sys

jsx_list = [
  'Layout/index.jsx',
  'Layout/Box/index.jsx',
  'Layout/Container/index.jsx',
  'Layout/Grid/index.jsx',
  'Layout/Hidden/index.jsx',
  'Layout/Image_List/index.jsx',
  # 'Inputs/index.jsx',
  'Inputs/Button/index.jsx',
  # 'Inputs/Button_Group/index.jsx',
  # 'Inputs/Checkbox/index.jsx',
  # 'Inputs/Floating_Action_Button/index.jsx',
  # 'Inputs/Date_and_Time/index.jsx',
  # 'Inputs/Radio/index.jsx',
  # 'Inputs/Select/index.jsx',
  # 'Inputs/Slider/index.jsx',
  # 'Inputs/Switch/index.jsx',
  # 'Inputs/Text_Field/index.jsx',
  # 'Inputs/Transfer_List/index.jsx',
  # 'Navigation/index.jsx',
  # 'Navigation/Bottom_Navigation/index.jsx',
  # 'Navigation/Breadcrumbs/index.jsx',
  # 'Navigation/Drawer/index.jsx',
  # 'Navigation/Link/index.jsx',
  # 'Navigation/Menu/index.jsx',
  # 'Navigation/Stepper/index.jsx',
  # 'Navigation/Tabs/index.jsx',
  # 'Surfaces/index.jsx',
  # 'Surfaces/App_Bar/index.jsx',
  # 'Surfaces/Paper/index.jsx',
  # 'Surfaces/Card/index.jsx',
  # 'Surfaces/Accordion/index.jsx',
  # 'Feedback/index.jsx',
  # 'Feedback/Progress/index.jsx',
  # 'Feedback/Dialog/index.jsx',
  # 'Feedback/Snackbar/index.jsx',
  # 'Feedback/Backdrop/index.jsx',
  # 'Data_Display/index.jsx',
  # 'Data_Display/Avatar/index.jsx',
  # 'Data_Display/Badge/index.jsx',
  # 'Data_Display/Chip/index.jsx',
  # 'Data_Display/Divider/index.jsx',
  # 'Data_Display/Icons/index.jsx',
  # 'Data_Display/Material_Icons/index.jsx',
  # 'Data_Display/List/index.jsx',
  # 'Data_Display/Table/index.jsx',
  # 'Data_Display/Tooltip/index.jsx',
  # 'Data_Display/Typography/index.jsx',
  # 'Utils/index.jsx',
  # 'Utils/Click_Away_Listener/index.jsx',
  # 'Utils/CSS_Baseline/index.jsx',
  # 'Utils/Modal/index.jsx',
  # 'Utils/No_SSR/index.jsx',
  # 'Utils/Popover/index.jsx',
  # 'Utils/Popper/index.jsx',
  # 'Utils/Portal/index.jsx',
  # 'Utils/Textarea_Autosize/index.jsx',
  # 'Utils/Transitions/index.jsx',
  # 'Utils/useMediaQuery/index.jsx',
  # 'Lab/index.jsx',
  # 'Lab/About_The_Lab/index.jsx',
  # 'Lab/Alert/index.jsx',
  # 'Lab/Autocomplete/index.jsx',
  # 'Lab/Data_Grid/index.jsx',
  # 'Lab/Data_Grid/Overview/index.jsx',
  # 'Lab/Data_Grid/Demo/index.jsx',
  # 'Lab/Data_Grid/Getting_Started/index.jsx',
  # 'Lab/Data_Grid/Layout/index.jsx',
  # 'Lab/Data_Grid/Columns/index.jsx',
  # 'Lab/Data_Grid/Rows/index.jsx',
  # 'Lab/Data_Grid/Editing/index.jsx',
  # 'Lab/Data_Grid/Sorting/index.jsx',
  # 'Lab/Data_Grid/Filtering/index.jsx',
  # 'Lab/Pagination/index.jsx',
  # 'Lab/Selection/index.jsx',
  # 'Lab/Export/index.jsx',
  # 'Lab/Components/index.jsx',
  # 'Lab/Style/index.jsx',
  # 'Lab/Localization/index.jsx',
  # 'Lab/Virtualization/index.jsx',
  # 'Lab/Accessibility/index.jsx',
  # 'Lab/Group_and_Pivot/index.jsx',
  # 'Lab/Pagination/index.jsx',
  # 'Lab/Rating/index.jsx',
  # 'Lab/Skeleton/index.jsx',
  # 'Lab/Speed_Dial/index.jsx',
  # 'Lab/Timeline/index.jsx',
  # 'Lab/Toggle_Button/index.jsx',
  # 'Lab/Tree_View/index.jsx',
]

component_template = '''import React from 'react';
import { Button } from '@material-ui/core';

export default function Helloworld$component_name$() {

  return (
    <>
      {'<$component_name$ /> helloworld not finish'}
    </>
  );
}
'''

component_test_template = '''import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import $component_name$ from '$component_path$';

describe('<$component_name$> helloworld', () => {
  describe('<$component_name$ /> mount helloworld', () => {
    let mount;

    beforeEach(() => {
      mount = createMount();
    });

    afterEach(() => {
      mount.cleanUp();
    });

    test('should work', () => {
      const wrapper = mount(
        <MockedTheme>
          <$component_name$>$component_name$</$component_name$>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<$component_name$ /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <$component_name$>$component_name$</$component_name$>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<$component_name$ /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<$component_name$>$component_name$</$component_name$>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
'''

for jsx_path in sorted(jsx_list):
  jsx_path_dirname = os.path.dirname(jsx_path)
  component_name = jsx_path_dirname.split('/')[-1] if jsx_path_dirname.find('/') > 0  else jsx_path_dirname
  component_path = f'src/components/{jsx_path_dirname}'
  mkdir_command = f'mkdir -p {component_path}'
  touch_commands = [f'touch {component_path}/index.jsx', f'touch {component_path}/index.test.jsx']

  # print(mkdir_command)
  # print(touch_commands)
  # print(component_template.replace('$component_name$',jsx_path_dirname))

  os.system(mkdir_command)
  for command in touch_commands:
    os.system(command)

  # with open(f'{component_path}/index.jsx','r+') as f_component:
  #   f_component.seek(0)
  #   f_component.truncate(0)
  #   f_component.write(component_template.replace('$component_name$',component_name))

  # with open(f'{component_path}/index.test.jsx','r+') as f_component:
  #   f_component.seek(0)
  #   f_component.truncate(0)
  #   f_component.write(component_test_template.replace('$component_name$',component_name).replace('$component_path$', component_path))

  print(f'import {component_name} from "{component_path}";')
  # print(f'<{component_name} />')
