import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import useCountdown from '@bradgarropy/use-countdown';

function App({ test_branch = false }) {
  const countdown = useCountdown({
    minutes: 0,
    seconds: 5,
    format: 'mm:ss',
    onCompleted: () => console.log('onCompleted'),
  });

  return (
    <div className="App">
      <div>hellocountdown</div>
      <div>{JSON.stringify(countdown)}</div>
    </div>
  );
}

export default App;
