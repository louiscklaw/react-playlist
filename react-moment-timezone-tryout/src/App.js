import React from 'react';
import 'moment/locale/ja';

import Moment from 'react-moment';
import 'moment-timezone'

// import moment from 'moment'
import moment from 'moment-timezone';


import './App.css';

function App() {
  const dateToFormat = Date.now();
  const three_day_ago = dateToFormat  - 3600*24*3*1000
  console.log(dateToFormat)

  const test = 1608635919000

  // const day_delta_array = Array(3).fill(0).map((x, idx) => idx)
  const day_array_in_utc = [[
    moment().tz(moment.tz.guess()).add(0,'day').startOf('day').format('HH:mm:ss D MMM'),
    moment().tz(moment.tz.guess()).add(0,'day').startOf('day').utc(),
    moment().tz(moment.tz.guess()).add(0,'day').endOf('day').utc()
  ]]

  var jun = moment("2014-06-01T00:00:00Z");
  console.log('Asia/Hong_Kong',jun.tz('Asia/Hong_Kong').format('ha z') )

  for(let i=1; i<30;i++){
    day_array_in_utc.push([
      moment().tz(moment.tz.guess()).subtract(i, 'days').format('D MMM'),
      moment().tz(moment.tz.guess()).subtract(i, 'days').startOf('day'),
      moment().tz(moment.tz.guess()).subtract(i, 'days').endOf('day')
    ])
  }

  // day_array_in_utc.push([
  //   moment().tz(moment.tz.guess()).subtract(1, 'days').format('D MMM'),
  //   moment().tz(moment.tz.guess()).subtract(1, 'days').startOf('day'),
  //   moment().tz(moment.tz.guess()).subtract(1, 'days').endOf('day')
  // ])

  // day_array_in_utc.push([
  //   moment().tz(moment.tz.guess()).subtract(2, 'days').format('D MMM'),
  //   moment().tz(moment.tz.guess()).subtract(2, 'days').startOf('day'),
  //   moment().tz(moment.tz.guess()).subtract(2, 'days').endOf('day')
  // ])

  // day_array_in_utc.push([
  //   moment().tz(moment.tz.guess()).subtract(3, 'days').format('D MMM'),
  //   moment().tz(moment.tz.guess()).subtract(3, 'days').startOf('day'),
  //   moment().tz(moment.tz.guess()).subtract(3, 'days').endOf('day')
  // ])

  // day_array_in_utc.push([
  //   moment().tz(moment.tz.guess()).subtract(4, 'days').format('D MMM'),
  //   moment().tz(moment.tz.guess()).subtract(4, 'days').startOf('day'),
  //   moment().tz(moment.tz.guess()).subtract(4, 'days').endOf('day')
  // ])

  // day_array_in_utc.push([
  //   moment().tz(moment.tz.guess()).subtract(5, 'days').format('D MMM'),
  //   moment().tz(moment.tz.guess()).subtract(5, 'days').startOf('day'),
  //   moment().tz(moment.tz.guess()).subtract(5, 'days').endOf('day')
  // ])

  // day_array_in_utc.push([
  //   moment().tz(moment.tz.guess()).subtract(6, 'days').format('D MMM'),
  //   moment().tz(moment.tz.guess()).subtract(6, 'days').startOf('day'),
  //   moment().tz(moment.tz.guess()).subtract(6, 'days').endOf('day')
  // ])
  // const dateToFormat1 = day_array_in_utc
  // console.log(dateToFormat1)

  // console.log(day_array_in_utc[3][1]*1)

  const checkDayInBetween = (date_to_check, from, to) => {
    // true of date input in between, false if not
    console.log('date_to_check', date_to_check)
    console.log('from', from)
    console.log('to', to)

    console.log('date_to_check >= from', date_to_check >= from)
    console.log('date_to_check < to', date_to_check < to)
    return date_to_check >= from && date_to_check < to

  }

  console.log('moment',moment)

  return (
    <div className="App">
        <pre>
          <div>{moment().tz(moment.tz.guess()).startOf('day').valueOf()}</div>
          <div>{moment().tz(moment.tz.guess()).endOf('day').valueOf()}</div>
          <div>{moment().tz(moment.tz.guess()).startOf('day').format('HH:mm:ss D MMM')}</div>
          <div>{moment().tz(moment.tz.guess()).endOf('day').format('HH:mm:ss D MMM')}</div>
          <div>
            add 0 day,
            {moment().tz(moment.tz.guess()).add(0,'day').startOf('day').format('HH:mm:ss D MMM')},
            {moment().tz(moment.tz.guess()).add(0,'day').endOf('day').format('HH:mm:ss D MMM')}
          </div>

          <div>
            subtract 1 day,
            {moment().tz(moment.tz.guess()).subtract(1,'day').startOf('day').format('HH:mm:ss D MMM')},
            {moment().tz(moment.tz.guess()).subtract(1,'day').endOf('day').format('HH:mm:ss D MMM')}
          </div>

          <div>
            subtract 2 day,
            {moment().tz(moment.tz.guess()).subtract(2,'day').startOf('day').format('HH:mm:ss D MMM')},
            {moment().tz(moment.tz.guess()).subtract(2,'day').endOf('day').format('HH:mm:ss D MMM')}
          </div>



        </pre>

        <pre> start of day {day_array_in_utc[0][1]*1} {moment.utc(day_array_in_utc[0][1]).format('D MMM')}</pre>
        <pre> current time {dateToFormat} {moment.utc(dateToFormat).format('D MMM')}</pre>
        <pre>   end of day {day_array_in_utc[0][2]*1} {moment.utc(day_array_in_utc[0][2]).format('D MMM')}</pre>


        {/* <div> {test} </div> */}
        <Moment locale="ja" fromNow>{dateToFormat}</Moment>
        <Moment locale="ja" fromNow>{test}</Moment>

        <div>
          <div>三日前 test</div>
          <div>
            <Moment locale="ja" fromNow>{three_day_ago}</Moment>
          </div>
          <div>
            <pre>  現在:{moment().valueOf()}</pre>
          </div>
          <div>
            <pre>三日前:{three_day_ago.valueOf()}</pre>
          </div>
          <pre>
            <div>
              test 0
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[0][1].valueOf(), day_array_in_utc[0][2].valueOf() ) )}  { JSON.stringify( day_array_in_utc[0][1].valueOf() )} { JSON.stringify( day_array_in_utc[0][2].valueOf() )}
            </div>
            <div>test 1
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[1][1].valueOf(), day_array_in_utc[1][2].valueOf() ) )}   { JSON.stringify( day_array_in_utc[1][1].valueOf() )} { JSON.stringify( day_array_in_utc[1][2].valueOf() )}
            </div>
            <div>test 2
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[2][1].valueOf(), day_array_in_utc[2][2].valueOf() ) )}  { JSON.stringify( day_array_in_utc[2][1].valueOf() )} { JSON.stringify( day_array_in_utc[2][2].valueOf() )}
            </div>
            <div>test 3
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[3][1].valueOf(), day_array_in_utc[3][2].valueOf() ) )}  { JSON.stringify( day_array_in_utc[3][1].valueOf() )} { JSON.stringify( day_array_in_utc[3][2].valueOf() )}
            </div>
            <div>test 4
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[4][1].valueOf(), day_array_in_utc[4][2].valueOf() ) )}  { JSON.stringify( day_array_in_utc[4][1].valueOf() )} { JSON.stringify( day_array_in_utc[4][2].valueOf() )}
            </div>
            <div>test 5
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[5][1].valueOf(), day_array_in_utc[5][2].valueOf() ) )} { JSON.stringify( day_array_in_utc[5][1].valueOf() )} { JSON.stringify( day_array_in_utc[5][2].valueOf() )}
            </div>
            <div>test 6
              { JSON.stringify( checkDayInBetween(three_day_ago, day_array_in_utc[6][1].valueOf(), day_array_in_utc[6][2].valueOf() ) )}   { JSON.stringify( day_array_in_utc[6][1].valueOf() )} { JSON.stringify( day_array_in_utc[6][2].valueOf() )}
            </div>
          {/* <div>1 day before {checkDayInBetween(three_day_ago, day_array_in_utc[0])}</div> */}
          </pre>
        </div>


        <pre>
          {JSON.stringify(day_array_in_utc, null, 2)}
        </pre>


    </div>
  );
}

export default App;
