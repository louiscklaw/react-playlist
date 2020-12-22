import React from 'react';
import 'moment/locale/ja';

import Moment from 'react-moment';
import 'moment-timezone'
import moment from 'moment'

import './App.css';

function App() {
  const dateToFormat = Date.now();
  const test = 1608635919000

  console.log(dateToFormat)

  const day_delta_array = Array(3).fill(0).map((x, idx) => idx)
  const day_array_in_utc = day_delta_array.map((day_delta, idx) => {
    let day_result = moment().subtract(day_delta, 'days')
    return [
      day_result.format('D MMM'),
      moment().subtract(idx, 'days').startOf('day').utc().unix(),
      moment().subtract(idx, 'days').endOf('day').utc().unix()
    ]
  })

  const day_string = day_array_in_utc.map(day_in_utc => moment())

  const dateToFormat1 = day_array_in_utc

  console.log(dateToFormat1)
  console.log(day_array_in_utc)


  return (
    <div className="App">
        <div> {dateToFormat} </div>
        <div> {moment().subtract('0', 'days').endOf('day').utc().unix()*1000}</div>
        <div> start of day {day_array_in_utc[0][1]*1000} </div>
        <div> end of day {day_array_in_utc[0][2]*1000} </div>

        {/* <div> {test} </div> */}
        <Moment locale="ja" fromNow>{dateToFormat}</Moment>
        <Moment locale="ja" fromNow>{test}</Moment>


    </div>
  );
}

export default App;
