import React from 'react'
import VisualFilter from 'react-visual-filter'

import FIELDS from './FIELDS'

const PRE_POPULATED = [
  {
    id: 'cond-1',
    field: 'name',
    type: 'text',
    operator: 'ct',
    value: 'blablabla',
  },
  {
    id: 'cond-3',
    field: 'birth_date',
    type: 'date',
    operator: 'eq',
    value: '2021-6-34',
  },
]

export default function VisualFilterExample() {
  let [filter_output, setFilterOutput] = React.useState({})

  const handleChange = data => {
    console.log(data)
    setFilterOutput(data)
  }

  return (
    <>
      <div style={{ height: '5rem' }}>
        <VisualFilter
          conditions={PRE_POPULATED}
          fields={FIELDS}
          dateFormat="Y-M-D"
          onChange={handleChange}
        />
      </div>
      <div>
        <pre>{JSON.stringify(filter_output, null, 2)}</pre>
      </div>
    </>
  )
}
