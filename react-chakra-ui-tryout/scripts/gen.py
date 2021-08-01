#!/usr/bin/env python3

import os,sys

jsx_list = [
  'DATA_DISPLAY/BadgeTryout/index.jsx',
  'DATA_DISPLAY/CloseButtonTryout/index.jsx',
  'DATA_DISPLAY/CodeTryout/index.jsx',
  'DATA_DISPLAY/DividerTryout/index.jsx',
  'DATA_DISPLAY/KbdTryout/index.jsx',
  'DATA_DISPLAY/ListTryout/index.jsx',
  'DATA_DISPLAY/StatTryout/index.jsx',
  'DATA_DISPLAY/TableTryout/index.jsx',
  'DATA_DISPLAY/TagTryout/index.jsx',
  'DISCLOSURE/AccordionTryout/index.jsx',
  'DISCLOSURE/TabsTryout/index.jsx',
  'DISCLOSURE/VisuallyHiddenTryout/index.jsx',
  'FEEDBACK/AlertTryout/index.jsx',
  'FEEDBACK/CircularProgressTryout/index.jsx',
  'FEEDBACK/ProgressTryout/index.jsx',
  'FEEDBACK/SkeletonTryout/index.jsx',
  'FEEDBACK/SpinnerTryout/index.jsx',
  'FEEDBACK/ToastTryout/index.jsx',
  'FORMS/ButtonTryout/index.jsx',
  'FORMS/CheckboxTryout/index.jsx',
  'FORMS/EditableTryout/index.jsx',
  'FORMS/FormControlTryout/index.jsx',
  'FORMS/IconButtonTryout/index.jsx',
  'FORMS/InputTryout/index.jsx',
  'FORMS/NumberInputTryout/index.jsx',
  'FORMS/PinInputTryout/index.jsx',
  'FORMS/RadioTryout/index.jsx',
  'FORMS/SelectTryout/index.jsx',
  'FORMS/SliderTryout/index.jsx',
  'FORMS/SwitchTryout/index.jsx',
  'FORMS/TextareaTryout/index.jsx',
  'HOOKS/UseBooleanTryout/index.jsx',
  'HOOKS/UseBreakpointValueTryout/index.jsx',
  'HOOKS/UseClipboardTryout/index.jsx',
  'HOOKS/UseControllableTryout/index.jsx',
  'HOOKS/UseDisclosureTryout/index.jsx',
  'HOOKS/UseMediaQueryTryout/index.jsx',
  'HOOKS/UseMergeRefsTryout/index.jsx',
  'HOOKS/UseOutsideClickTryout/index.jsx',
  'HOOKS/UsePrefersReducedMotionTryout/index.jsx',
  'HOOKS/UseThemeTryout/index.jsx',
  'HOOKS/UseTokenTryout/index.jsx',
  'LAYOUT/AspectRatioTryout/index.jsx',
  'LAYOUT/BoxTryout/index.jsx',
  'LAYOUT/CenterTryout/index.jsx',
  'LAYOUT/ContainerTryout/index.jsx',
  'LAYOUT/FlexTryout/index.jsx',
  'LAYOUT/GridTryout/index.jsx',
  'LAYOUT/SimpleGridTryout/index.jsx',
  'LAYOUT/StackTryout/index.jsx',
  'LAYOUT/WrapTryout/index.jsx',
  'MEDIA_AND_ICONS/AvatarTryout/index.jsx',
  'MEDIA_AND_ICONS/IconTryout/index.jsx',
  'MEDIA_AND_ICONS/ImageTryout/index.jsx',
  'NAVIGATION/BreadcrumbTryout/index.jsx',
  'NAVIGATION/LinkTryout/index.jsx',
  'NAVIGATION/LinkOverlayTryout/index.jsx',
  'OTHERS/PortalTryout/index.jsx',
  'OTHERS/TransitionsTryout/index.jsx',
  'OVERLAY/AlertDialogTryout/index.jsx',
  'OVERLAY/DrawerTryout/index.jsx',
  'OVERLAY/MenuTryout/index.jsx',
  'OVERLAY/ModalTryout/index.jsx',
  'OVERLAY/PopoverTryout/index.jsx',
  'OVERLAY/TooltipTryout/index.jsx',
  'THEMING/AdvancedTryout/index.jsx',
  'THEMING/ComponentStyleTryout/index.jsx',
  'THEMING/CustomizeThemeTryout/index.jsx',
  'THEMING/DefaultThemeTryout/index.jsx',
  'TYPOGRAPHY/HeadingTryout/index.jsx',
  'TYPOGRAPHY/TextTryout/index.jsx'
  ]

components_path = '/home/logic/_workspace/react-playlist/react-chakra-ui-tryout/src/components'

template='''import React from 'react'
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'


function TestHelloworld01()  { return <>TestHelloworld01</>; }
function TestHelloworld02()  { return <>TestHelloworld02</>; }
function TestHelloworld03()  { return <>TestHelloworld03</>; }
function TestHelloworld04()  { return <>TestHelloworld04</>; }
function TestHelloworld05()  { return <>TestHelloworld05</>; }
function TestHelloworld06()  { return <>TestHelloworld06</>; }
function TestHelloworld07()  { return <>TestHelloworld07</>; }
function TestHelloworld08()  { return <>TestHelloworld08</>; }
function TestHelloworld09()  { return <>TestHelloworld09</>; }
function TestHelloworld10() { return <>TestHelloworld10</>; }
function TestHelloworld11() { return <>TestHelloworld11</>; }
function TestHelloworld12() { return <>TestHelloworld12</>; }
function TestHelloworld13() { return <>TestHelloworld13</>; }
function TestHelloworld14() { return <>TestHelloworld14</>; }
function TestHelloworld15() { return <>TestHelloworld15</>; }
function TestHelloworld16() { return <>TestHelloworld16</>; }
function TestHelloworld17() { return <>TestHelloworld17</>; }
function TestHelloworld18() { return <>TestHelloworld18</>; }
function TestHelloworld19() { return <>TestHelloworld19</>; }
function TestHelloworld20() { return <>TestHelloworld20</>; }


export function {{component_name}}() {
  return (
    <div>
      {{component_name}}
      <div> TestHelloworld01   <TestHelloworld01 />  </div>
      <div> TestHelloworld02   <TestHelloworld02 />  </div>
      <div> TestHelloworld03   <TestHelloworld03 />  </div>
      <div> TestHelloworld04   <TestHelloworld04 />  </div>
      <div> TestHelloworld05   <TestHelloworld05 />  </div>
      <div> TestHelloworld06   <TestHelloworld06 />  </div>
      <div> TestHelloworld07   <TestHelloworld07 />  </div>
      <div> TestHelloworld08   <TestHelloworld08 />  </div>
      <div> TestHelloworld09   <TestHelloworld09 />  </div>
      <div> TestHelloworld10   <TestHelloworld10 />  </div>
      <div> TestHelloworld11   <TestHelloworld11 />  </div>
      <div> TestHelloworld12   <TestHelloworld12 />  </div>
      <div> TestHelloworld13   <TestHelloworld13 />  </div>
      <div> TestHelloworld14   <TestHelloworld14 />  </div>
      <div> TestHelloworld15   <TestHelloworld15 />  </div>
      <div> TestHelloworld16   <TestHelloworld16 />  </div>
      <div> TestHelloworld17   <TestHelloworld17 />  </div>
      <div> TestHelloworld18   <TestHelloworld18 />  </div>
      <div> TestHelloworld19   <TestHelloworld19 />  </div>
      <div> TestHelloworld20   <TestHelloworld20 />  </div>
    </div>
  )
}
'''

import re

for jsx_file in sorted(jsx_list):
  component_file = f'{components_path}/{jsx_file}'
  component_name = re.match(r'.*?/(.*?)/.*', jsx_file).groups(1)[0]
  # print(component_name)

  # print("import {"+component_name+"} from '"+jsx_file+"'")
  print(f"<{component_name} /> ")

  with open(component_file, 'r+') as fo:

    fo.truncate(0)
    fo.write(template.replace('{{component_name}}',component_name))