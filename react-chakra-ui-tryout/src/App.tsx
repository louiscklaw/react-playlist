import React from 'react'
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react'

import ExampleTestBox from 'src/example/test_box'
import ExampleTestButton from 'src/example/test_button'
import ExampleTestCheckBox from 'src/example/test_checkbox'
import ExampleTestFormControl from 'src/example/test_form_control'
import ExampleTestIconButton from 'src/example/test_iconbutton'
import ExampleTestInput from 'src/example/test_input'
import ExampleTestNumberInput from 'src/example/test_number_input'
import ExampleTestPinInput from 'src/example/test_pin_input'

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <ExampleTestBox />
      <ExampleTestButton />
      <ExampleTestCheckBox />
      <ExampleTestFormControl />
      <ExampleTestIconButton />
      <ExampleTestInput />
      <ExampleTestNumberInput />
      <ExampleTestPinInput />
    </Box>
  )
}

export default App
