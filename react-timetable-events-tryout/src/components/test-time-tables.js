import React from 'react'
import Timetable from 'react-timetable-events'

import moment from 'moment'

class TestTimeTables extends React.Component{
  render(){
    let test={
      events:{
        monday: [
          {
            id: 1,
            name: 'Custom Event 1',
            type: 'custom',
            startTime: moment('2018-02-23T11:58:00'),
            endTime: moment('2018-02-23T13:30:00')
          }
        ]
      }
    }

    return(
      <>
        helloworld time table
        <Timetable events={test.events}/>
      </>
    )
  }
}

export default TestTimeTables