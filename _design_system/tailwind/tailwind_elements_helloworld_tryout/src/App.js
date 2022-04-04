import React from 'react';
import HelloComponent from 'src/components/HelloComponent';
import AlertsComponent from 'src/components/AlertsComponent';

import AccordionHelloworld from 'src/components/General/AccordionHelloworld';
import AlertsHelloworld from 'src/components/General/AlertsHelloworld';
import AvatarHelloworld from 'src/components/General/AvatarHelloworld';
import BadgesHelloworld from 'src/components/General/BadgesHelloworld';
import ButtonGroupHelloworld from 'src/components/General/ButtonGroupHelloworld';
import ButtonsHelloworld from 'src/components/General/ButtonsHelloworld';
import CardsHelloworld from 'src/components/General/CardsHelloworld';
import CarouselHelloworld from 'src/components/General/CarouselHelloworld';
import ChartsHelloworld from 'src/components/General/ChartsHelloworld';
import ChipsHelloworld from 'src/components/General/ChipsHelloworld';
import CollapseHelloworld from 'src/components/General/CollapseHelloworld';
import DropdownHelloworld from 'src/components/General/DropdownHelloworld';
import GalleryHelloworld from 'src/components/General/GalleryHelloworld';
import HeadersHelloworld from 'src/components/General/HeadersHelloworld';
import HeadingsHelloworld from 'src/components/General/HeadingsHelloworld';
import HoverEffectsHelloworld from 'src/components/General/HoverEffectsHelloworld';
import IconsHelloworld from 'src/components/General/IconsHelloworld';
import ImagesHelloworld from 'src/components/General/ImagesHelloworld';
import JumbotronHelloworld from 'src/components/General/JumbotronHelloworld';
import LinkHelloworld from 'src/components/General/LinkHelloworld';
// import List_groupHelloworld from 'src/components/General/List_groupHelloworld';
import LoginFormHelloworld from 'src/components/General/LoginFormHelloworld';
// import MaskHelloworld from 'src/components/General/MaskHelloworld';
import ModalHelloworld from 'src/components/General/ModalHelloworld';
// import NotificationsHelloworld from 'src/components/General/NotificationsHelloworld';
import OffcanvasHelloworld from 'src/components/General/OffcanvasHelloworld';
// import ParagraphsHelloworld from 'src/components/General/ParagraphsHelloworld';
import PopoverHelloworld from 'src/components/General/PopoverHelloworld';
import ProgressHelloworld from 'src/components/General/ProgressHelloworld';
import RatingHelloworld from 'src/components/General/RatingHelloworld';
import ScrollBackToTopButtonHelloworld from 'src/components/General/ScrollBackToTopButtonHelloworld';
import SocialButtonsHelloworld from 'src/components/General/SocialButtonsHelloworld';
// import SpinnersHelloworld from 'src/components/General/SpinnersHelloworld';
import StepperHelloworld from 'src/components/General/StepperHelloworld';
import TablesHelloworld from 'src/components/General/TablesHelloworld';
import TestimonialsHelloworld from 'src/components/General/TestimonialsHelloworld';
// import TimelineHelloworld from 'src/components/General/TimelineHelloworld';
import ToastHelloworld from 'src/components/General/ToastHelloworld';
import TooltipHelloworld from 'src/components/General/TooltipHelloworld';
import TypographyHelloworld from 'src/components/General/TypographyHelloworld';
// import VideoHelloworld from 'src/components/General/VideoHelloworld';
import VideoCarouselHelloworld from 'src/components/General/VideoCarouselHelloworld';

// import BreadcrumbsComponent from 'src/components/Navigation/BreadcrumbsComponent';
// import CheckboxComponent from 'src/components/Forms/CheckboxComponent';
// import DatepickerComponent from 'src/components/Forms/DatepickerComponent';
// import FileInputComponent from 'src/components/Forms/FileInputComponent';
// import FooterComponent from 'src/components/Navigation/FooterComponent';
// import FormTemplatesComponent from 'src/components/Forms/FormTemplatesComponent';
// import InputsComponent from 'src/components/Forms/InputsComponent';
// import MegaMenuComponent from 'src/components/Navigation/MegaMenuComponent';
import MultiselectComponent from 'src/components/Forms/MultiselectComponent';
// import NavbarComponent from 'src/components/Navigation/NavbarComponent';
// import PaginationComponent from 'src/components/Navigation/PaginationComponent';
// import PillsComponent from 'src/components/Navigation/PillsComponent';
import RadioComponent from 'src/components/Forms/RadioComponent';
import RangeComponent from 'src/components/Forms/RangeComponent';
import RippleComponent from 'src/components/Methods/RippleComponent';
// import ScrollspyComponent from 'src/components/Navigation/ScrollspyComponent';
import SearchComponent from 'src/components/Forms/SearchComponent';
import SelectComponent from 'src/components/Forms/SelectComponent';
// import SidenavComponent from 'src/components/Navigation/SidenavComponent';
import SwitchComponent from 'src/components/Forms/SwitchComponent';
// import TabsComponent from 'src/components/Navigation/TabsComponent';
// import TextareaComponent from 'src/components/Forms/TextareaComponent';
import TimepickerComponent from 'src/components/Forms/TimepickerComponent';

import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* 
        <HelloComponent />
        <div>AlertsComponent</div>
        <AlertsComponent />
        <div style={{ padding: '1rem' }}>AccordionHelloworld</div>
        <AccordionHelloworld />
        <div style={{ padding: '1rem' }}>AlertsHelloworld</div>
        <AlertsHelloworld />
        <div style={{ padding: '1rem' }}>AvatarHelloworld</div>
        <AvatarHelloworld />
        <div style={{ padding: '1rem' }}>BadgesHelloworld</div>
        <BadgesHelloworld />
        <div style={{ padding: '1rem' }}>ButtonGroupHelloworld</div>
        <ButtonGroupHelloworld />
        <div style={{ padding: '1rem' }}>ButtonsHelloworld</div>
        <ButtonsHelloworld />
        <div style={{ padding: '1rem' }}>CardsHelloworld</div>
        <CardsHelloworld />
        <div style={{ padding: '1rem' }}>CarouselHelloworld</div>
        <CarouselHelloworld />
        <div style={{ padding: '1rem' }}>ChartsHelloworld</div>
        <ChartsHelloworld />
        <div style={{ padding: '1rem' }}>ChipsHelloworld</div>
        <ChipsHelloworld />
        <div style={{ padding: '1rem' }}>CollapseHelloworld</div>
        <CollapseHelloworld />
        <div style={{ padding: '1rem' }}>DropdownHelloworld</div>
        <DropdownHelloworld />
        <div style={{ padding: '1rem' }}>GalleryHelloworld</div>
        <GalleryHelloworld />
        <div style={{ padding: '1rem' }}>HeadersHelloworld</div>
        <HeadersHelloworld />
        <div style={{ padding: '1rem' }}>HeadingsHelloworld</div>
        <HeadingsHelloworld />{' '}
        <div style={{ padding: '1rem' }}>HoverEffectsHelloworld</div>
        <HoverEffectsHelloworld />
        <div style={{ padding: '1rem' }}>IconsHelloworld</div>
        <IconsHelloworld />
        <div style={{ padding: '1rem' }}>ImagesHelloworld</div>
        <ImagesHelloworld />
        <div style={{ padding: '1rem' }}>JumbotronHelloworld</div>
        <JumbotronHelloworld />
        <div style={{ padding: '1rem' }}>LinkHelloworld</div>
        <LinkHelloworld />

       <div style={{ padding: '1rem' }}>List_groupHelloworld</div>
        <List_groupHelloworld /> 
        <div style={{ padding: '1rem' }}>LoginFormHelloworld</div>
        <LoginFormHelloworld />
        <div style={{ padding: '1rem' }}>MaskHelloworld</div>
        <MaskHelloworld />
        <div style={{ padding: '1rem' }}>ModalHelloworld</div>
        <ModalHelloworld />

        <div style={{ padding: '1rem' }}>NotificationsHelloworld</div>
        <NotificationsHelloworld />
        
        <div style={{ padding: '1rem' }}>OffcanvasHelloworld</div>
      <OffcanvasHelloworld />  
        <div style={{ padding: '1rem' }}>ParagraphsHelloworld</div>
        <ParagraphsHelloworld />
        <div style={{ padding: '1rem' }}>PopoverHelloworld</div>
        <PopoverHelloworld />
        <div style={{ padding: '1rem' }}>ProgressHelloworld</div>
        <ProgressHelloworld />
        <div style={{ padding: '1rem' }}>RatingHelloworld</div>
        <RatingHelloworld />
        <div style={{ padding: '1rem' }}>ScrollBackToTopButtonHelloworld</div>
        <ScrollBackToTopButtonHelloworld />
        <div style={{ padding: '1rem' }}>SocialButtonsHelloworld</div>
        <SocialButtonsHelloworld />
        <div style={{ padding: '1rem' }}>SpinnersHelloworld</div>
        <SpinnersHelloworld />
        <div style={{ padding: '1rem' }}>StepperHelloworld</div>
        <StepperHelloworld />
        <div style={{ padding: '1rem' }}>TablesHelloworld</div>
        <TablesHelloworld />
        <div style={{ padding: '1rem' }}>TestimonialsHelloworld</div>
        <TestimonialsHelloworld />
        <div style={{ padding: '1rem' }}>TimelineHelloworld</div>
        <TimelineHelloworld />
        <div style={{ padding: '1rem' }}>ToastHelloworld</div>
        <ToastHelloworld />
        <div style={{ padding: '1rem' }}>TooltipHelloworld</div>
        <TooltipHelloworld />
        <div style={{ padding: '1rem' }}>TypographyHelloworld</div>
        <TypographyHelloworld />
        <div style={{ padding: '1rem' }}>VideoHelloworld</div>
        <VideoHelloworld />

        {/* <div> not playing video</div>
        <div style={{ padding: '1rem' }}>VideoCarouselHelloworld</div>
        <VideoCarouselHelloworld /> 
        
        <div style={{ padding: '1rem' }}>BreadcrumbsComponent</div>
        <BreadcrumbsComponent />

        <div style={{ padding: '1rem' }}>CheckboxComponent</div>
        <CheckboxComponent />

        <div style={{ padding: '1rem' }}>DatepickerComponent</div>
        <DatepickerComponent />
        <div style={{ padding: '1rem' }}>FileInputComponent</div>
        <FileInputComponent />
        <div style={{ padding: '1rem' }}>FooterComponent</div>
        <FooterComponent />
        <div style={{ padding: '1rem' }}>FormTemplatesComponent</div>
        <FormTemplatesComponent />
        <div style={{ padding: '1rem' }}>InputsComponent</div>
        <InputsComponent />
        <div style={{ padding: '1rem' }}>MegaMenuComponent</div>
        <MegaMenuComponent />
        <div style={{ padding: '1rem' }}>MultiselectComponent</div>
        <MultiselectComponent />
        <div style={{ padding: '1rem' }}>NavbarComponent</div>
        <NavbarComponent />
        <div style={{ padding: '1rem' }}>PaginationComponent</div>
        <PaginationComponent />
        <div style={{ padding: '1rem' }}>PillsComponent</div>
        <PillsComponent />
        <div style={{ padding: '1rem' }}>RadioComponent</div>
        <RadioComponent />
        <div style={{ padding: '1rem' }}>RangeComponent</div>
        <RangeComponent />
      */}

        <div style={{ padding: '1rem' }}>RippleComponent</div>
        <RippleComponent />
        {/*
        <div style={{ padding: '1rem' }}>ScrollspyComponent</div>
        <ScrollspyComponent />
        <div style={{ padding: '1rem' }}>SearchComponent</div>
        <SearchComponent />
        <div style={{ padding: '1rem' }}>SelectComponent</div>
        <SelectComponent />
        <div style={{ padding: '1rem' }}>SidenavComponent</div>
        <SidenavComponent />
        <div style={{ padding: '1rem' }}>SwitchComponent</div>
        <SwitchComponent />
        <div style={{ padding: '1rem' }}>TabsComponent</div>
        <TabsComponent />
        <div style={{ padding: '1rem' }}>TextareaComponent</div>
        <TextareaComponent />
      */}
        <div style={{ padding: '1rem' }}>TimepickerComponent</div>
        <TimepickerComponent />
        {/*
         */}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
