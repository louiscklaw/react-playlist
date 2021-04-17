import React from 'react'
import NumberFormat from 'react-number-format'

import './App.css'

function App() {
  return (
    <div className="App">
      <div>helloworld</div>
      <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      <NumberFormat
        value={2456981}
        className="foo"
        displayType={'text'}
        thousandSeparator={false}
        prefix={'HKD '}
        renderText={(value, props) => <div {...props}>{value}</div>}
      />
      <div>Prefix and thousand separator : Format currency in input</div>
      <NumberFormat thousandSeparator={true} prefix={'$'} />
      <div>Format with pattern : Format credit card in an input</div>
      <NumberFormat format="#### #### #### ####" />
      <div>Format with mask : Format credit card in an input</div>
      <NumberFormat format="#### #### #### ####" mask="_" />

      <div>Format with mask as array</div>
      <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} />

      <div>Format phone number</div>
      <NumberFormat format="+1 (###) ###-####" mask="_" />
    </div>
  )
}

export default App
