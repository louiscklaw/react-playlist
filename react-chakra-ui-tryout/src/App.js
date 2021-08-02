import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';

import { BadgeTryout } from 'src/components/DATA_DISPLAY/BadgeTryout';
import { CloseButtonTryout } from 'src/components/DATA_DISPLAY/CloseButtonTryout';
import { CodeTryout } from 'src/components/DATA_DISPLAY/CodeTryout';
import { DividerTryout } from 'src/components/DATA_DISPLAY/DividerTryout';
import { KbdTryout } from 'src/components/DATA_DISPLAY/KbdTryout';
import { ListTryout } from 'src/components/DATA_DISPLAY/ListTryout';
import { StatTryout } from 'src/components/DATA_DISPLAY/StatTryout';
import { TableTryout } from 'src/components/DATA_DISPLAY/TableTryout';
import { TagTryout } from 'src/components/DATA_DISPLAY/TagTryout';
import { AccordionTryout } from 'src/components/DISCLOSURE/AccordionTryout';
import { TabsTryout } from 'src/components/DISCLOSURE/TabsTryout';
import { VisuallyHiddenTryout } from 'src/components/DISCLOSURE/VisuallyHiddenTryout';
import { AlertTryout } from 'src/components/FEEDBACK/AlertTryout';
import { CircularProgressTryout } from 'src/components/FEEDBACK/CircularProgressTryout';
import { ProgressTryout } from 'src/components/FEEDBACK/ProgressTryout';
import { SkeletonTryout } from 'src/components/FEEDBACK/SkeletonTryout';
import { SpinnerTryout } from 'src/components/FEEDBACK/SpinnerTryout';
import { ToastTryout } from 'src/components/FEEDBACK/ToastTryout';
import { ButtonTryout } from 'src/components/FORMS/ButtonTryout';
import { CheckboxTryout } from 'src/components/FORMS/CheckboxTryout';
import { EditableTryout } from 'src/components/FORMS/EditableTryout';
import { FormControlTryout } from 'src/components/FORMS/FormControlTryout';
import { IconButtonTryout } from 'src/components/FORMS/IconButtonTryout';
import { InputTryout } from 'src/components/FORMS/InputTryout';
import { NumberInputTryout } from 'src/components/FORMS/NumberInputTryout';
import { PinInputTryout } from 'src/components/FORMS/PinInputTryout';
import { RadioTryout } from 'src/components/FORMS/RadioTryout';
import { SelectTryout } from 'src/components/FORMS/SelectTryout';
import { SliderTryout } from 'src/components/FORMS/SliderTryout';
import { SwitchTryout } from 'src/components/FORMS/SwitchTryout';
import { TextareaTryout } from 'src/components/FORMS/TextareaTryout';
import { UseBooleanTryout } from 'src/components/HOOKS/UseBooleanTryout';
import { UseBreakpointValueTryout } from 'src/components/HOOKS/UseBreakpointValueTryout';
import { UseClipboardTryout } from 'src/components/HOOKS/UseClipboardTryout';
import { UseControllableTryout } from 'src/components/HOOKS/UseControllableTryout';
import { UseDisclosureTryout } from 'src/components/HOOKS/UseDisclosureTryout';
import { UseMediaQueryTryout } from 'src/components/HOOKS/UseMediaQueryTryout';
import { UseMergeRefsTryout } from 'src/components/HOOKS/UseMergeRefsTryout';
import { UseOutsideClickTryout } from 'src/components/HOOKS/UseOutsideClickTryout';

import { AspectRatioTryout } from 'src/components/LAYOUT/AspectRatioTryout';
import { BoxTryout } from 'src/components/LAYOUT/BoxTryout';
import { CenterTryout } from 'src/components/LAYOUT/CenterTryout';
import { ContainerTryout } from 'src/components/LAYOUT/ContainerTryout';
import { FlexTryout } from 'src/components/LAYOUT/FlexTryout';
import { GridTryout } from 'src/components/LAYOUT/GridTryout';
import { SimpleGridTryout } from 'src/components/LAYOUT/SimpleGridTryout';
import { StackTryout } from 'src/components/LAYOUT/StackTryout';
import { WrapTryout } from 'src/components/LAYOUT/WrapTryout';
import { AvatarTryout } from 'src/components/MEDIA_AND_ICONS/AvatarTryout';
import { IconTryout } from 'src/components/MEDIA_AND_ICONS/IconTryout';
import { ImageTryout } from 'src/components/MEDIA_AND_ICONS/ImageTryout';
import { BreadcrumbTryout } from 'src/components/NAVIGATION/BreadcrumbTryout';
import { LinkOverlayTryout } from 'src/components/NAVIGATION/LinkOverlayTryout';
import { LinkTryout } from 'src/components/NAVIGATION/LinkTryout';
import { PortalTryout } from 'src/components/OTHERS/PortalTryout';
import { TransitionsTryout } from 'src/components/OTHERS/TransitionsTryout';
import { AlertDialogTryout } from 'src/components/OVERLAY/AlertDialogTryout';
import { DrawerTryout } from 'src/components/OVERLAY/DrawerTryout';
import { MenuTryout } from 'src/components/OVERLAY/MenuTryout';
import { ModalTryout } from 'src/components/OVERLAY/ModalTryout';
import { PopoverTryout } from 'src/components/OVERLAY/PopoverTryout';
import { TooltipTryout } from 'src/components/OVERLAY/TooltipTryout';
import { AdvancedTryout } from 'src/components/THEMING/AdvancedTryout';
import { ComponentStyleTryout } from 'src/components/THEMING/ComponentStyleTryout';
import { CustomizeThemeTryout } from 'src/components/THEMING/CustomizeThemeTryout';
import { DefaultThemeTryout } from 'src/components/THEMING/DefaultThemeTryout';
import { HeadingTryout } from 'src/components/TYPOGRAPHY/HeadingTryout';
import { TextTryout } from 'src/components/TYPOGRAPHY/TextTryout';

function App() {
  return (
    <BrowserRouter>
      <Box textAlign="center" fontSize="xl">
        helloworld
        <BadgeTryout />
        <CloseButtonTryout />
        <CodeTryout />
        <DividerTryout />
        <KbdTryout />
        <ListTryout />
        <StatTryout />
        <TableTryout />
        <TagTryout />
        <AccordionTryout />
        <TabsTryout />
        <VisuallyHiddenTryout />
        <AlertTryout />
        <CircularProgressTryout />
        <ProgressTryout />
        <SkeletonTryout />
        <SpinnerTryout />
        <ToastTryout />
        <ButtonTryout />
        <CheckboxTryout />
        <EditableTryout />
        <FormControlTryout />
        <IconButtonTryout />
        <InputTryout />
        <NumberInputTryout />
        <PinInputTryout />
        <RadioTryout />
        <SelectTryout />
        <SliderTryout />
        <SwitchTryout />
        <TextareaTryout />
        <UseBooleanTryout />
        <UseBreakpointValueTryout />
        <UseClipboardTryout />
        <UseControllableTryout />
        <UseDisclosureTryout />
        <UseMediaQueryTryout />
        <UseMergeRefsTryout />
        <UseOutsideClickTryout />
        {/* <UsePrefersReducedMotionTryout /> */}
        {/* <UseThemeTryout /> */}
        {/* <UseTokenTryout /> */}
        <AspectRatioTryout />
        <BoxTryout />
        <CenterTryout />
        <ContainerTryout />
        <FlexTryout />
        <GridTryout />
        <SimpleGridTryout />
        <StackTryout />
        <WrapTryout />
        <AvatarTryout />
        <IconTryout />
        <ImageTryout />
        <BreadcrumbTryout />
        <LinkOverlayTryout />
        <LinkTryout />
        <PortalTryout />
        <TransitionsTryout />
        <AlertDialogTryout />
        <DrawerTryout />
        <MenuTryout />
        <ModalTryout />
        <PopoverTryout />
        <TooltipTryout />
        <AdvancedTryout />
        <ComponentStyleTryout />
        <CustomizeThemeTryout />
        <DefaultThemeTryout />
        <HeadingTryout />
        <TextTryout />
      </Box>
    </BrowserRouter>
  );
}

export default App;
