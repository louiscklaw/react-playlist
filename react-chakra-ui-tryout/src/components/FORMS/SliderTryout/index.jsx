import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { MdGraphicEq } from 'react-icons/md';

function Usage() {
  return (
    <>
      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
function ChangingTheSliderColorScheme() {
  return (
    <>
      <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
function ChangingTheSliderOrientation() {
  return (
    <>
      <Slider
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
function CustomizingTheSlider() {
  return (
    <>
      <Slider aria-label="slider-ex-4" defaultValue={30}>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="tomato" as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
    </>
  );
}
function DiscreteSliders() {
  return (
    <>
      <Slider defaultValue={60} min={0} max={300} step={30}>
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </>
  );
}
function GettingTheFinalValueWhenDraggingTheSlider() {
  return (
    <>
      <Slider aria-label="slider-ex-5" onChangeEnd={(val) => console.log(val)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
function ConfigureThumbFocusWithFocusThumbOnChange() {
  let [value, setValue] = React.useState(1);
  return (
    <>
      <Slider aria-label="slider-ex-5" value={value} focusThumbOnChange={false}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
function TestHelloworld08() {
  return <>TestHelloworld08</>;
}
function TestHelloworld09() {
  return <>TestHelloworld09</>;
}
function TestHelloworld10() {
  return <>TestHelloworld10</>;
}
function TestHelloworld11() {
  return <>TestHelloworld11</>;
}
function TestHelloworld12() {
  return <>TestHelloworld12</>;
}
function TestHelloworld13() {
  return <>TestHelloworld13</>;
}
function TestHelloworld14() {
  return <>TestHelloworld14</>;
}
function TestHelloworld15() {
  return <>TestHelloworld15</>;
}
function TestHelloworld16() {
  return <>TestHelloworld16</>;
}
function TestHelloworld17() {
  return <>TestHelloworld17</>;
}
function TestHelloworld18() {
  return <>TestHelloworld18</>;
}
function TestHelloworld19() {
  return <>TestHelloworld19</>;
}
function TestHelloworld20() {
  return <>TestHelloworld20</>;
}

export function SliderTryout() {
  return (
    <div>
      SliderTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        ChangingTheSliderColorScheme <ChangingTheSliderColorScheme />
      </div>
      <div>
        ChangingTheSliderOrientation <ChangingTheSliderOrientation />
      </div>
      <div>
        CustomizingTheSlider <CustomizingTheSlider />
      </div>
      <div>
        DiscreteSliders <DiscreteSliders />
      </div>
      <div>
        GettingTheFinalValueWhenDraggingTheSlider{' '}
        <GettingTheFinalValueWhenDraggingTheSlider />
      </div>
      <div>
        ConfigureThumbFocusWithFocusThumbOnChange{' '}
        <ConfigureThumbFocusWithFocusThumbOnChange />
      </div>
    </div>
  );
}
