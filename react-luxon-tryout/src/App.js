import React from 'react';

import {DateTime, Duration} from 'luxon'

import './App.css';

function App() {
  let [dt, setDt] = React.useState(DateTime.local())
  let [now, setNow] = React.useState(DateTime.local())
  let [dur, setDur] = React.useState(Duration.fromObject({hours: 2, minutes: 7}))

  React.useEffect(()=>{
    setTimeout(() => {
      setNow(DateTime.local())
    }, 1000);
  })

  return (
    <div className="App">
      helloworld
      {JSON.stringify(now)}

      <div>
        <div>ISO 8601</div>
        <div>{JSON.stringify(DateTime.fromISO("2017-05-15T08:30:00"))}</div>
      </div>

      <div>
        <div>Getting at components</div>
        <div>{JSON.stringify(dt.year)}</div>
        <div>{JSON.stringify(dt.month)}</div>
        <div>{JSON.stringify(dt.day)}</div>
        <div>{JSON.stringify(dt.second)}</div>
        <div>{JSON.stringify(dt.weekday)}</div>
      </div>

      <div>
        <div>Other fun accessors</div>
        <div>{JSON.stringify(dt.zoneName)}</div>
        <div>{JSON.stringify(dt.offset)}</div>
        <div>{JSON.stringify(dt.daysInMonth)}</div>
      </div>

      <div>
        <div>Math</div>
        <div>{JSON.stringify(dt.plus({hours: 3, minutes: 2}))}</div>
        <div>{JSON.stringify(dt.minus({days: 7}))}</div>
        <div>{JSON.stringify(dt.startOf('day'))}</div>
        <div>{JSON.stringify(dt.endOf('hour'))}</div>
      </div>

      <div>
        <div>Durations</div>
        <div>{JSON.stringify(dt.plus(dur))}</div>
        <div>{JSON.stringify(dur.hours)}</div>
        <div>{JSON.stringify(dur.minutes)}</div>
        <div>{JSON.stringify(dur.seconds)}</div>
      </div>




    </div>
  );
}

export default App;
