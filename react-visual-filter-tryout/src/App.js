import React from 'react'
import VisualFilter from 'react-visual-filter'

import './App.css'

const FIELDS = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    operators: ['eq', 'ne', 'ct', 'nct', 'sw', 'fw', 'in', 'nn'],
  },
  { name: 'age', type: 'number', label: 'Age', operators: ['eq', 'ne', 'gt', 'lt'] },
  {
    name: 'birth_date',
    type: 'date',
    label: 'Birth date',
    operators: ['eq', 'ne', 'gt', 'lt', 'in', 'nn'],
  },
  {
    name: 'preference',
    type: 'list',
    label: 'Language',
    operators: ['eq', 'ne'],
    list: [
      { name: 'python', label: 'Python' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'go', label: 'Go' },
    ],
  },
]

function App() {
  let [debug_data, setDebugData] = React.useState(null)
  const handleChange = data => {
    console.log(data)
    setDebugData(data)
  }

  return (
    <div className="App">
      <div>
        <VisualFilter fields={FIELDS} dateFormat="Y-M-D" onChange={handleChange} />
      </div>
      <div>helloworld</div>
      <div>
        <pre>{JSON.stringify(debug_data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
