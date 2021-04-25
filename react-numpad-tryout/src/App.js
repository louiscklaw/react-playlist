import React from 'react'
import NumPad from 'react-numpad'

function App() {
  const appointmentDates = {
    '01.04.2018': ['08:00', '09:00', '10:00', '11:00'],
    '03.04.2018': ['08:00', '09:00', '10:00'],
    '04.04.2018': ['08:00', '09:00', '10:00', '11:00', '17:00'],
    '09.04.2018': ['08:00', '10:00', '11:00', '15:00'],
  }

  return (
    <div className="App">
      <NumPad.Number
        onChange={value => {
          console.log('value', value)
        }}
        label={'Total'}
        placeholder={'my placeholder'}
        value={100}
        decimal={2}
      />

      <NumPad.Calendar
        onChange={value => console.log('changed', value)}
        label="Data di nascita"
        locale="it"
        dateFormat="DD.MM.YYYY"
        min="01.01.1900"
        markers={['01.03.2018', '06.03.2018']}
      />

      <NumPad.Appointment
        dateFormat={'DD.MM.YYYY'}
        dates={appointmentDates}
        locale={'it'}
        onChange={value => console.log('value', value)}
      />
    </div>
  )
}

export default App
