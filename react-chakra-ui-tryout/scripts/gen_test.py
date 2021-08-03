#!/usr/bin/env python3

import os,sys
import subprocess

dst_jsx_list = [
  'DATA_DISPLAY/CloseButtonTryout',
  'DATA_DISPLAY/CodeTryout',
  'DATA_DISPLAY/DividerTryout',
  'DATA_DISPLAY/KbdTryout',
  'DATA_DISPLAY/ListTryout',
  'DATA_DISPLAY/StatTryout',
  'DATA_DISPLAY/TableTryout',
  'DATA_DISPLAY/TagTryout',
  'DISCLOSURE/AccordionTryout',
  'DISCLOSURE/TabsTryout',
  'DISCLOSURE/VisuallyHiddenTryout',
  'FEEDBACK/AlertTryout',
  'FEEDBACK/CircularProgressTryout',
  'FEEDBACK/ProgressTryout',
  'FEEDBACK/SkeletonTryout',
  'FEEDBACK/SpinnerTryout',
  'FEEDBACK/ToastTryout',
  'FORMS/ButtonTryout',
  'FORMS/CheckboxTryout',
  'FORMS/EditableTryout',
  'FORMS/FormControlTryout',
  'FORMS/IconButtonTryout',
  'FORMS/InputTryout',
  'FORMS/NumberInputTryout',
  'FORMS/PinInputTryout',
  'FORMS/RadioTryout',
  'FORMS/SelectTryout',
  'FORMS/SliderTryout',
  'FORMS/SwitchTryout',
  'FORMS/TextareaTryout',
  'HOOKS/UseBooleanTryout',
  'HOOKS/UseBreakpointValueTryout',
  'HOOKS/UseClipboardTryout',
  'HOOKS/UseControllableTryout',
  'HOOKS/UseDisclosureTryout',
  'HOOKS/UseMediaQueryTryout',
  'HOOKS/UseMergeRefsTryout',
  'HOOKS/UseOutsideClickTryout',
  'HOOKS/UsePrefersReducedMotionTryout',
  'HOOKS/UseThemeTryout',
  'HOOKS/UseTokenTryout',
  'LAYOUT/AspectRatioTryout',
  'LAYOUT/BoxTryout',
  'LAYOUT/CenterTryout',
  'LAYOUT/ContainerTryout',
  'LAYOUT/FlexTryout',
  'LAYOUT/GridTryout',
  'LAYOUT/SimpleGridTryout',
  'LAYOUT/StackTryout',
  'LAYOUT/WrapTryout',
  'MEDIA_AND_ICONS/AvatarTryout',
  'MEDIA_AND_ICONS/IconTryout',
  'MEDIA_AND_ICONS/ImageTryout',
  'NAVIGATION/BreadcrumbTryout',
  'NAVIGATION/LinkTryout',
  'NAVIGATION/LinkOverlayTryout',
  'OTHERS/PortalTryout',
  'OTHERS/TransitionsTryout',
  'OVERLAY/AlertDialogTryout',
  'OVERLAY/DrawerTryout',
  'OVERLAY/MenuTryout',
  'OVERLAY/ModalTryout',
  'OVERLAY/PopoverTryout',
  'OVERLAY/TooltipTryout',
  'THEMING/AdvancedTryout',
  'THEMING/ComponentStyleTryout',
  'THEMING/CustomizeThemeTryout',
  'THEMING/DefaultThemeTryout',
  'TYPOGRAPHY/HeadingTryout',
]

# src/components/DATA_DISPLAY/BadgeTryout/__tests__

template='''import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { {component_name} } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<{component_name} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
'''

for dst_jsx_path in dst_jsx_list:

  src_path = f'src/components/DATA_DISPLAY/BadgeTryout/__tests__'
  dst_path = f'src/components/{dst_jsx_path}/__tests__'

  os.system(f'mkdir -p {dst_path}')
  os.system(f'cp -r {src_path}/* {dst_path}')

  dst_test_file = f'{dst_path}/index.test.jsx'
  with open(dst_test_file, 'r+') as f:
    f.truncate(0)
    f.write(template.replace('{component_name}',dst_jsx_path.split('/')[1]))