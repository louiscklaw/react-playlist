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
import ExampleTestRadio from 'src/example/test_radio'
import ExampleTestSelect from 'src/example/test_select'
import ExampleTestSlider from 'src/example/test_slider'
import ExampleTestSwitch from 'src/example/test_switch'
import ExampleTestTextarea from 'src/example/test_textarea'
import ExampleTestBadge from 'src/example/test_badge'
import ExampleTestCloseButton from 'src/example/test_close_button'
import ExampleTestCode from 'src/example/test_code'
import ExampleTestKbd from 'src/example/test_kbd'
import ExampleTestList from 'src/example/test_list'
import ExampleTestStat from 'src/example/test_stat'

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <ExampleTestBadge />
      <ExampleTestCloseButton />
      <ExampleTestCode />
      <ExampleTestStat />
      <ExampleTestList />
      <ExampleTestKbd />
      <ExampleTestBox />
      <ExampleTestButton />
      <ExampleTestCheckBox />
      <ExampleTestFormControl />
      <ExampleTestIconButton />
      <ExampleTestInput />
      <ExampleTestNumberInput />
      <ExampleTestPinInput />
      <ExampleTestRadio />
      <ExampleTestSelect />
      <ExampleTestSlider />
      <ExampleTestSwitch />
      <ExampleTestTextarea />
    </Box>
  )
}

export default App
