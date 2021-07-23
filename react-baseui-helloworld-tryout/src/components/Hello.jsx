import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

import BreadcrumbsHelloworld from 'src/components/NAVIGATION/Breadcrumbs';
import LinkHelloworld from 'src/components/NAVIGATION/Link';
import PaginationHelloworld from 'src/components/NAVIGATION/Pagination';
import TabsHelloworld from 'src/components/NAVIGATION/Tabs';
import NavigationBarHelloworld from 'src/components/NAVIGATION/Navigation_Bar';
import HeaderNavigationHelloworld from 'src/components/NAVIGATION/Header_Navigation';
import SideNavigationHelloworld from 'src/components/NAVIGATION/Side_Navigation';
import Tabs_Motion_Helloworld from 'src/components/NAVIGATION/Tabs_Motion';
import ButtonHelloworld from 'src/components/INPUTS/Button';
import CheckboxHelloworld from 'src/components/INPUTS/Checkbox';
import ComboboxHelloworld from 'src/components/INPUTS/Combobox';
import InputHelloworld from 'src/components/INPUTS/Input';
import RadioHelloworld from 'src/components/INPUTS/Radio';
import SliderHelloworld from 'src/components/INPUTS/Slider';
import TextareaHelloworld from 'src/components/INPUTS/Textarea';
import ButtonGroupHelloworld from 'src/components/INPUTS/Button_Group';
import FormControlHelloworld from 'src/components/INPUTS/Form_Control';
import PaymentCardHelloworld from 'src/components/INPUTS/Payment_Card';
import PhoneInputHelloworld from 'src/components/INPUTS/Phone_Input';
import PinCodeHelloworld from 'src/components/INPUTS/Pin_Code';
import MenuHelloworld from 'src/components/PICKERS/Menu';
import RatingHelloworld from 'src/components/PICKERS/Rating';
import SelectHelloworld from 'src/components/PICKERS/Select';
import FileUploaderHelloworld from 'src/components/PICKERS/File_Uploader';
import DatepickerHelloworld from 'src/components/DATE_and_TIME/Datepicker';
import TimePickerHelloworld from 'src/components/DATE_and_TIME/Time_Picker';
import TimezonePickerHelloworld from 'src/components/DATE_and_TIME/Timezone_Picker';
import AccordionHelloworld from 'src/components/CONTENT/Accordion';
import AvatarHelloworld from 'src/components/CONTENT/Avatar';
import HeadingHelloworld from 'src/components/CONTENT/Heading';
import IconHelloworld from 'src/components/CONTENT/Icon';
import ListHelloworld from 'src/components/CONTENT/List';
import TagHelloworld from 'src/components/CONTENT/Tag';
import TypographyHelloworld from 'src/components/CONTENT/Typography';
import DragAndDropListHelloworld from 'src/components/CONTENT/Drag_and_Drop_List';
import LayoutGridHelloworld from 'src/components/CONTENT/Layout_Grid';
import TreeViewHelloworld from 'src/components/CONTENT/Tree_View';
import TableHelloworld from 'src/components/TABLES/Table';
import DataTableHelloworld from 'src/components/TABLES/Data_Table';
import GridTableHelloworld from 'src/components/TABLES/Grid_Table';
import FlexTableHelloworld from 'src/components/TABLES/Flex_Table';
import NotificationHelloworld from 'src/components/PROGRESS_and_VALIDATION/Notification';
import SkeletonHelloworld from 'src/components/PROGRESS_and_VALIDATION/Skeleton';
import SnackbarHelloworld from 'src/components/PROGRESS_and_VALIDATION/Snackbar';
import SpinnerHelloworld from 'src/components/PROGRESS_and_VALIDATION/Spinner';
import ToastHelloworld from 'src/components/PROGRESS_and_VALIDATION/Toast';
import ProgressBarHelloworld from 'src/components/PROGRESS_and_VALIDATION/Progress_Bar';
import ProgressStepsHelloworld from 'src/components/PROGRESS_and_VALIDATION/Progress_Steps';
import CardHelloworld from 'src/components/SURFACES/Card';
import DrawerHelloworld from 'src/components/SURFACES/Drawer';
import ModalHelloworld from 'src/components/SURFACES/Modal';
import PopoverHelloworld from 'src/components/SURFACES/Popover';
import TooltipHelloworld from 'src/components/SURFACES/Tooltip';
import AspectRatioBoxHelloworld from 'src/components/UTILITY/AspectRatioBox';
import BaseProviderHelloworld from 'src/components/UTILITY/BaseProvider';
import BlockHelloworld from 'src/components/UTILITY/Block';
import FlexGridHelloworld from 'src/components/UTILITY/FlexGrid';
import LayerHelloworld from 'src/components/UTILITY/Layer';
import UseStyletronHelloworld from 'src/components/UTILITY/UseStyletron';
import StyledHelloworld from 'src/components/UTILITY/Styled';
import TokensHelloworld from 'src/components/UTILITY/Tokens';
import A11yValidatorHelloworld from 'src/components/UTILITY/A11y_Validator';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default function Hello() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <div>
            <StatefulInput />
          </div>
          <div>
            <ButtonHelloworld />
          </div>
          <div>
            <BreadcrumbsHelloworld />
          </div>
          <div>
            <BreadcrumbsHelloworld />
          </div>
          <div>
            <LinkHelloworld />
          </div>
          <div>
            <PaginationHelloworld />
          </div>
          <div>
            <TabsHelloworld />
          </div>
          <div>
            <NavigationBarHelloworld />
          </div>
          <div>
            <HeaderNavigationHelloworld />
          </div>
          <div>
            <SideNavigationHelloworld />
          </div>
          <div>
            <ButtonHelloworld />
          </div>
          <div>
            <CheckboxHelloworld />
          </div>
          <div>
            <ComboboxHelloworld />
          </div>
          <div>
            <InputHelloworld />
          </div>
          <div>
            <RadioHelloworld />
          </div>
          <div>
            <SliderHelloworld />
          </div>
          <div>
            <TextareaHelloworld />
          </div>
          <div>
            <ButtonGroupHelloworld />
          </div>
          <div>
            <FormControlHelloworld />
          </div>
          <div>
            <PaymentCardHelloworld />
          </div>
          <div>
            <PhoneInputHelloworld />
          </div>
          <div>
            <PinCodeHelloworld />
          </div>
          <div>
            <MenuHelloworld />
          </div>
          <div>
            <RatingHelloworld />
          </div>
          <div>
            <SelectHelloworld />
          </div>
          <div>
            <FileUploaderHelloworld />
          </div>
          <div>
            <DatepickerHelloworld />
          </div>
          <div>
            <TimePickerHelloworld />
          </div>
          <div>
            <TimezonePickerHelloworld />
          </div>
          <div>
            <AccordionHelloworld />
          </div>
          <div>
            <AvatarHelloworld />
          </div>
          <div>
            <HeadingHelloworld />
          </div>
          <div>
            <IconHelloworld />
          </div>
          <div>
            <ListHelloworld />
          </div>
          <div>
            <TagHelloworld />
          </div>
          <div>
            <TypographyHelloworld />
          </div>
          <div>
            <DragAndDropListHelloworld />
          </div>
          <div>
            <LayoutGridHelloworld />
          </div>
          <div>
            <TreeViewHelloworld />
          </div>
          <div>
            <TableHelloworld />
          </div>
          <div>
            <DataTableHelloworld />
          </div>
          <div>
            <GridTableHelloworld />
          </div>
          <div>
            <FlexTableHelloworld />
          </div>
          <div>
            <NotificationHelloworld />
          </div>
          <div>
            <SkeletonHelloworld />
          </div>
          <div>
            <SnackbarHelloworld />
          </div>
          <div>
            <SpinnerHelloworld />
          </div>
          <div>
            <ToastHelloworld />
          </div>
          <div>
            <ProgressBarHelloworld />
          </div>
          <div>
            <ProgressStepsHelloworld />
          </div>
          <div>
            <CardHelloworld />
          </div>
          <div>
            <DrawerHelloworld />
          </div>
          <div>
            <ModalHelloworld />
          </div>
          <div>
            <PopoverHelloworld />
          </div>
          <div>
            <TooltipHelloworld />
          </div>
          <div>
            <AspectRatioBoxHelloworld />
          </div>
          <div>
            <BaseProviderHelloworld />
          </div>
          <div>
            <BlockHelloworld />
          </div>
          <div>
            <FlexGridHelloworld />
          </div>
          <div>
            <LayerHelloworld />
          </div>
          <div>
            <UseStyletronHelloworld />
          </div>
          <div>
            <StyledHelloworld />
          </div>
          <div>
            <TokensHelloworld />
          </div>
          <div>
            <A11yValidatorHelloworld />
          </div>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}
