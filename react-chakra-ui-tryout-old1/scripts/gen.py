#!/usr/bin/env python3

import os,sys

tsx_list = [
  'DATA_DISPLAY/BadgeTryout/index.tsx',
  'DATA_DISPLAY/CloseButtonTryout/index.tsx',
  'DATA_DISPLAY/CodeTryout/index.tsx',
  'DATA_DISPLAY/DividerTryout/index.tsx',
  'DATA_DISPLAY/KbdTryout/index.tsx',
  'DATA_DISPLAY/ListTryout/index.tsx',
  'DATA_DISPLAY/StatTryout/index.tsx',
  'DATA_DISPLAY/TableTryout/index.tsx',
  'DATA_DISPLAY/TagTryout/index.tsx',
  'DISCLOSURE/AccordionTryout/index.tsx',
  'DISCLOSURE/TabsTryout/index.tsx',
  'DISCLOSURE/VisuallyHiddenTryout/index.tsx',
  'FEEDBACK/AlertTryout/index.tsx',
  'FEEDBACK/CircularProgressTryout/index.tsx',
  'FEEDBACK/ProgressTryout/index.tsx',
  'FEEDBACK/SkeletonTryout/index.tsx',
  'FEEDBACK/SpinnerTryout/index.tsx',
  'FEEDBACK/ToastTryout/index.tsx',
  'FORMS/ButtonTryout/index.tsx',
  'FORMS/CheckboxTryout/index.tsx',
  'FORMS/EditableTryout/index.tsx',
  'FORMS/FormControlTryout/index.tsx',
  'FORMS/IconButtonTryout/index.tsx',
  'FORMS/InputTryout/index.tsx',
  'FORMS/NumberInputTryout/index.tsx',
  'FORMS/PinInputTryout/index.tsx',
  'FORMS/RadioTryout/index.tsx',
  'FORMS/SelectTryout/index.tsx',
  'FORMS/SliderTryout/index.tsx',
  'FORMS/SwitchTryout/index.tsx',
  'FORMS/TextareaTryout/index.tsx',
  'HOOKS/UseBooleanTryout/index.tsx',
  'HOOKS/UseBreakpointValueTryout/index.tsx',
  'HOOKS/UseClipboardTryout/index.tsx',
  'HOOKS/UseControllableTryout/index.tsx',
  'HOOKS/UseDisclosureTryout/index.tsx',
  'HOOKS/UseMediaQueryTryout/index.tsx',
  'HOOKS/UseMergeRefsTryout/index.tsx',
  'HOOKS/UseOutsideClickTryout/index.tsx',
  'HOOKS/UsePrefersReducedMotionTryout/index.tsx',
  'HOOKS/UseThemeTryout/index.tsx',
  'HOOKS/UseTokenTryout/index.tsx',
  'LAYOUT/AspectRatioTryout/index.tsx',
  'LAYOUT/BoxTryout/index.tsx',
  'LAYOUT/CenterTryout/index.tsx',
  'LAYOUT/ContainerTryout/index.tsx',
  'LAYOUT/FlexTryout/index.tsx',
  'LAYOUT/GridTryout/index.tsx',
  'LAYOUT/SimpleGridTryout/index.tsx',
  'LAYOUT/StackTryout/index.tsx',
  'LAYOUT/WrapTryout/index.tsx',
  'MEDIA_AND_ICONS/AvatarTryout/index.tsx',
  'MEDIA_AND_ICONS/IconTryout/index.tsx',
  'MEDIA_AND_ICONS/ImageTryout/index.tsx',
  'NAVIGATION/BreadcrumbTryout/index.tsx',
  'NAVIGATION/LinkTryout/index.tsx',
  'NAVIGATION/LinkOverlayTryout/index.tsx',
  'OTHERS/PortalTryout/index.tsx',
  'OTHERS/TransitionsTryout/index.tsx',
  'OVERLAY/AlertDialogTryout/index.tsx',
  'OVERLAY/DrawerTryout/index.tsx',
  'OVERLAY/MenuTryout/index.tsx',
  'OVERLAY/ModalTryout/index.tsx',
  'OVERLAY/PopoverTryout/index.tsx',
  'OVERLAY/TooltipTryout/index.tsx',
  'THEMING/AdvancedTryout/index.tsx',
  'THEMING/ComponentStyleTryout/index.tsx',
  'THEMING/CustomizeThemeTryout/index.tsx',
  'THEMING/DefaultThemeTryout/index.tsx',
  'TYPOGRAPHY/HeadingTryout/index.tsx',
  'TYPOGRAPHY/TextTryout/index.tsx'
  ]

components_path = '/home/logic/_workspace/react-playlist/react-chakra-ui-tryout/src/components'

template='''import React from 'react'
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'





export function {{component_name}}() {
  return (
    <div>
      {{component_name}}
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
      <div>   </div>
    </div>
  )
}
'''

import re

for tsx_file in sorted(tsx_list):
  component_file = f'{components_path}/{tsx_file}'
  component_name = re.match(r'.*?/(.*?)/.*', tsx_file).groups(1)[0]
  # print(component_name)

  # print("import {"+component_name+"} from '"+tsx_file+"'")
  print(f"<{component_name} /> ")

  with open(component_file, 'r+') as fo:

    fo.truncate(0)
    fo.write(template.replace('{{component_name}}',component_name))