import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react'
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'

function ExampleTestHelloworld() {
  return (
    <>
      <Stack spacing={10} direction="row">
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Slider aria-label="slider-ex-4" defaultValue={30}>
          <SliderTrack bg="red.100">
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" as={CheckIcon} />
          </SliderThumb>
        </Slider>
      </Stack>
    </>
  )
}

export default ExampleTestHelloworld
