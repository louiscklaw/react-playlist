import React from 'react';
import Schedule from 'react-schedule-job';
import 'react-schedule-job/dist/index.css';

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const styles = { text: { margin: '70px', color: 'skyblue' } };

const HelloMsg = () => {
  return <h1 style={styles.text}>Hello!</h1>;
};

const App = () => {
  const [open, setOpen] = React.useState(false);

  const sayHello = () => {
    setOpen(true);
  };
  // this is the function which will run according to your settings

  const jobs = [
    {
      fn: sayHello,
      id: '1',
      schedule: '* * * * *',
      // this runs every minutes
    },
  ];

  function handleCloseOnClick() {
    setOpen(false);
  }

  return (
    <div>
      <pre>browser timezone {JSON.stringify({ tz })}</pre>
      <button id="close" onClick={handleCloseOnClick}>
        close
      </button>
      <Schedule
        jobs={jobs}
        timeZone={tz}
        // "UTC", "local" or "YOUR PREFERRED TIMEZONE",
        dashboard={{
          hidden: false,
          // if true, dashboard is hidden
        }}
      />
      {open && <HelloMsg />}
    </div>
  );
};

export default App;
