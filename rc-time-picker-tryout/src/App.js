import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import moment from 'moment-timezone';

function App() {
  let [debug, setDebug] = React.useState({ hello: 'world' });

  const onChange = (utc_value) => {
    if (utc_value) {
      setDebug(utc_value.format('HH:mm'));
    }
  };
  return (
    <div className="App">
      <div style={{ height: '100%', width: '100%', backgroundColor: 'gold' }}>
        rc-time-picker
      </div>
      <div>
        <TimePicker
          defaultValue={moment()}
          showSecond={false}
          minuteStep={15}
          onChange={onChange}
        />
      </div>

      <pre>{JSON.stringify(debug, null, 2)}</pre>
    </div>
  );
}

export default App;
