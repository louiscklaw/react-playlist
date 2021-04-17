import React, { Component } from 'react'
import EasyEdit from 'react-easy-edit'

function App() {
  const save = value => {
    alert(value)
  }
  const cancel = () => {
    alert('Cancelled')
  }

  return (
    <>
      <div>
        <EasyEdit
          type="text"
          onSave={save}
          onCancel={cancel}
          saveButtonLabel="Save Me"
          cancelButtonLabel="Cancel Me"
          attributes={{ name: 'awesome-input', id: 1 }}
          instructions="Star this repo!"
        />
      </div>
      <div>
        <EasyEdit
          type="radio"
          value="one"
          onSave={save}
          options={[
            { label: 'First option', value: 'one' },
            { label: 'Second option', value: 'two' },
          ]}
          instructions="Custom instructions"
        />
      </div>
      <div>
        <EasyEdit type="date" onSave={save} instructions="Select your date of birth" />
      </div>
      <div>
        <EasyEdit
          type="select"
          options={[
            { label: 'First option', value: 'one' },
            { label: 'Second option', value: 'two' },
          ]}
          onSave={save}
          placeholder="My Placeholder"
          instructions="Custom instructions"
        />
      </div>
      <div>
        <EasyEdit
          type="datalist"
          options={[
            { label: 'First option', value: 'one' },
            { label: 'Second option', value: 'two' },
          ]}
          onSave={save}
          instructions="Custom instructions"
        />
      </div>
      <div>
        <EasyEdit
          type="checkbox"
          options={[
            { label: 'First option', value: 'one' },
            { label: 'Second option', value: 'two' },
          ]}
          onSave={save}
          value={['one', 'two']} // this will preselect both options
        />
      </div>
    </>
  )
}

export default App
