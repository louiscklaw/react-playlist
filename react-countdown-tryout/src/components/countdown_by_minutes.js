import React from 'react'
import { DateTime, Interval } from 'luxon'



function CountdownByMinutes(props){
  const default_value = {
    datetime_alarm: null,
    alarm_due: null,
    alarm_enable: false,
    time_remaining: -1,
    times_up: false,
    alert_enable: false,
    alert_remaining: null,
    alert_remaining_seconds: 10
  }

  let [countdown_minutes, setCountdownMinutes] = React.useState(0)
  let [countdown_seconds, setCountdownSeconds] = React.useState(0)

  let [datetime_now, setDateTimeNow] = React.useState(DateTime.local())
  let [datetime_alarm, setDatetimeAlarm] = React.useState(default_value.datetime_alarm)
  let [alarm_due, setAlarmDue] = React.useState(default_value.alarm_due)
  let [alarm_enable, setAlarmEnable] = React.useState(default_value.alarm_enable)
  let [time_remaining, setTimeRemaining] = React.useState(default_value.time_remaining)
  let [times_up , setTimesUp] = React.useState(default_value.times_up)

  let [alert_enable, setAlertEnable] = React.useState(default_value.alert_enable)
  let [alert_remaining, setAlertRemaining] = React.useState(default_value.alert_remainig_seconds)
  let [alerting, setAlerting] = React.useState(false)

  const checkCountdownValid = (in_countdown) => {
    return in_countdown > 0
  }

  const handleCountdownOnChange = (e) =>{
    console.log(`input changed to ${e.target.value} minutes later`)
  }

  const handleSetOnClick = (e) => {
    console.log(`countdown set click`)
    let value_minutes = document.querySelector('#countdown-input-minutes').value
    let value_seconds = document.querySelector('#countdown-input-seconds').value

    if (checkCountdownValid(1)){
      setDatetimeAlarm( datetime_now.plus({
        minutes: value_minutes,
        seconds: value_seconds
      }) )
      setAlarmEnable(true)
    }
  }

  React.useEffect( () => {
    setInterval( () => {
      setDateTimeNow( DateTime.local() )
    }, 1000 );
  }, [] )

  React.useEffect(()=>{
    if (datetime_alarm != null){
      setAlarmEnable(true)
    }else{
      setAlarmEnable(false)
    }
  },[datetime_alarm])



  const getRemainingSeconds = (seconds_in) =>{
    if (seconds_in >= 0){
      return Math.floor(seconds_in)
    }else{
      return 0
    }
  }

  React.useEffect(()=>{
    if (time_remaining > 0){
      console.log('time_remaining',time_remaining)
    }else{
    //   let due_seconds = Interval.fromDateTimes(datetime_alarm, datetime_now)
    //   setAlarmDue( Math.floor(due_seconds.length('seconds')))
    }
  },[time_remaining])

  const resetSettings = () => {
    setAlertEnable(default_value.alert_enable)
    setTimeRemaining(default_value.time_remaining)
    setAlerting(false)
  }
  const enableAlert = () => {
    setAlerting(true)
    setAlertEnable(true)
    setTimeout(() => {
      // reset settings after alert
      resetSettings()
    }, 10000);
  }

  React.useEffect( () => {
    if ( alarm_enable ) {
      let remaining_seconds = Interval.fromDateTimes( datetime_now, datetime_alarm )
      setTimeRemaining( remaining_seconds.length( 'seconds' ) )
    }
  }, [ alarm_enable, datetime_now ] )

  const resetOnClick = ()=>{
    console.log('resetOnClick')
  }

  React.useEffect(()=>{
    console.log('alerting',alerting)

    if (alarm_enable==true && time_remaining==null && alerting==false){
      enableAlert()
    }

  },[datetime_now])

  return(
    <>
      <div>countdown by minutes</div>

      <div>Minutes to countdown</div>
      <input id="countdown-input-minutes" onChange={handleCountdownOnChange} defaultValue={countdown_minutes} />
      <input id="countdown-input-seconds" onChange={handleCountdownOnChange} defaultValue={countdown_seconds} />
      <button onClick={handleSetOnClick}>SET</button>

      <button onClick={resetOnClick}>Reset</button>

      <table>
        <tbody>
          <tr>
            <td>Timenow</td>
            <span>{ JSON.stringify(datetime_now) }</span>
          </tr>
          <tr>
            <td>Alarm will occur in: </td>
            <span>{ JSON.stringify(datetime_alarm) }</span>
          </tr>
          <tr>
            <td>Time remaining: </td>
            <span>{ JSON.stringify(time_remaining) } seconds</span>
          </tr>
          <tr>
            <td>Alarm Due: </td>
            <span>{ JSON.stringify(alarm_due) }</span>
          </tr>
          <tr>
            <td>Alarm Enable: </td>
            <span>{ JSON.stringify(alarm_enable) }</span>
          </tr>
          <tr>
            <td>Alert Enable: </td>
            <span>{ JSON.stringify(alert_enable) }</span>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default CountdownByMinutes