#!/usr/bin/env python3
# pipenv run python3 scripts/update.py

import os,sys, re
from subprocess import check_output

# pip install stringcase
import stringcase



# /tmp/material-ui/docs/src/pages/components/buttons
# git clone https://github.com/mui-org/material-ui.git
component_group_names=[
  'accordion',
  'alert',
  'app-bar',
  'autocomplete',
  'avatars',
  'backdrop',
  'bottom-navigation',
  'buttons',
  'cards',
  'checkboxes',
  'click-away-listener',
  'container',
  'dialogs',
  'dividers',
  'drawers',
  'floating-action-button',
  'hidden',
  'icons',
  'links',
  'paper',
  'rating',
  'steppers',
  'timeline',
  'tooltips',
  'selects',
  'snackbars',
  'tabs',
  'typography',
  # 'badges',
  # 'box',
  # 'breadcrumbs',
  # 'breakpoints',
  # 'button-group',
  # 'chips',
  # 'css-baseline',
  # 'grid',
  # 'image-list',
  # 'lists',
  # 'material-icons',
  # 'menus',
  # 'modal',
  # 'no-ssr',
  # 'pagination',
  # 'pickers',
  # 'popover',
  # 'popper',
  # 'portal',
  # 'progress',
  # 'radio-buttons',
  # 'skeleton',
  # 'slider',
  # 'speed-dial',
  # 'switches',
  # 'tables',
  # 'text-fields',
  # 'textarea-autosize',
  # 'toggle-button',
  # 'transfer-list',
  # 'transitions',
  # 'tree-view',
  # 'use-media-query'
  ]


index_file_template = '''import React from 'react';

$import_lines$

export default function HelloworldMaterialUiComponents() {

  return (
    <>
      <div>
        $component_lines$
      </div>
    </>
  );
}
'''

components_index_file_template='''import React from 'react';
$cg_imports$

export default function Helloworld$component_name$() {
  return (
    <>
      $cg_components$
    </>
  );
}
'''

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

src_jsx_list = list(map(lambda x: f'/tmp/material-ui/docs/src/pages/components/{x}', component_group_names))

dst_jsx_list = list(map(lambda x: x.replace('/tmp/material-ui/docs/src/pages/components','src/components'), src_jsx_list))

print('dst_jsx_list1', list(dst_jsx_list))


import_lines = []
component_lines = []

for [jsx_path, dst_jsx_path, cg_name] in zip(src_jsx_list, dst_jsx_list, component_group_names):
  result = check_output(f'find {jsx_path}'.split(' '))
  temp = result.decode('utf-8').split('\n')
  filter_out_empty = list(filter(lambda x: x != '', temp))
  get_js_only = list(filter(lambda x: re.match('.*js$', x), filter_out_empty))
  component_name = list(map(lambda x: re.match('.*/(.*).js', x)[1], get_js_only))
  full_component_paths = list(map(lambda x : f'{dst_jsx_path}/{x}', component_name))
  full_component_test_paths = list(map(lambda x : f'{dst_jsx_path}/{x}/__tests__', component_name))

  component_index_file_path = list(map(lambda x: f'{x}/index.jsx', full_component_paths))
  component_index_test_file_path = list(map(lambda x: f'{x}/index.test.jsx', full_component_test_paths))

  mkdir_commandss = list(zip(
    list(map(lambda x: f'mkdir -p {x}', full_component_paths)),
    list(map(lambda x: f'mkdir -p {x}', full_component_test_paths))
  ))
  touch_commandss = list(zip(
    list(map(lambda x: f'touch {x}', component_index_file_path)),
    list(map(lambda x: f'touch {x}', component_index_test_file_path))
  ))

  for [cmd1, cmd2] in mkdir_commandss:
    os.system(cmd1)
    os.system(cmd2)
    pass

  for [[cmd1, cmd2], src_js_file, dst_js_file] in  zip(touch_commandss, get_js_only, component_index_file_path):
    os.system(cmd1)
    os.system(cmd2)
    os.system(f'cp {src_js_file} {dst_js_file}')
    with open(dst_js_file, 'r+') as f:
      temp = f.readlines()
      out = map(lambda x: x.replace('docs/src/modules/components','src/components/utils'), temp)
      f.seek(0)
      f.truncate(0)
      f.write(''.join(out))
    pass


  # component_test_template
  for [test_file_path, c_name, comp_file_path] in zip(component_index_test_file_path, component_name, component_index_file_path):
    with open(test_file_path,'r+') as f_component:
      f_component.seek(0)
      f_component.truncate(0)
      f_component.write(component_test_template.replace('$component_name$',c_name).replace('$component_path$', comp_file_path))


  for [name, dst_js_file] in  zip(component_name , component_index_file_path):
    import_lines.append(f'import {name} from "{dst_js_file}"')
    component_lines.append(f'<{name} />')


  os.system(f'touch {dst_jsx_path}/index.jsx')

  with open(f'{dst_jsx_path}/index.jsx','r+') as f_import:
      f_import.seek(0)
      f_import.truncate(0)

      f_import.write(index_file_template.
        replace('$import_lines$', '\n'.join(import_lines)).
        replace('$component_lines$','\n'.join(component_lines)).
        replace('$component_group_name$',stringcase.pascalcase(cg_name)))

cg_imports=[]
cg_components=[]

for [dst_jsx_path, cg_name] in zip(dst_jsx_list, component_group_names):
  pascalcase_component_name = stringcase.pascalcase(cg_name)
  cg_imports.append(f'import {pascalcase_component_name} from "{dst_jsx_path}"')
  cg_components.append(f'<{pascalcase_component_name} />')

os.system(f'touch src/components/index.jsx')
with open(f'src/components/index.jsx','r+') as f_import:
    f_import.seek(0)
    f_import.truncate(0)

    f_import.write(
      components_index_file_template.
        replace('$cg_imports$','\n'.join(cg_imports)).
        replace('$cg_components$','\n'.join(
          map(lambda x: '\n'.join([
            '<div>',
            '{/* '+x+' */}',
            '<div>'+x.replace('<','').replace('>','')+'</div>',
            x,
            '</div>',
            ]), cg_components)
        )))