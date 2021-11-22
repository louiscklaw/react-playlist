import React, { useCallback, useState } from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

const functions = new Set();

function App() {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  // const incrementDelta = useCallback(() => setDelta((delta) => delta + 1), []);
  // const increment = useCallback(() => setC((c) => c + delta), [delta]);

  const incrementDelta = () => setDelta((delta) => delta + 1);
  const increment = () => setC((c) => c + delta);

  const incrementBoth = useCallback(() => {
    incrementDelta();
    increment();
  }, [increment, incrementDelta]);

  // Register the functions so we can count them
  functions.add(incrementBoth);
  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <div className="App">
      <GlobalContextProvider>
        <div>
          <div> Delta is {delta} </div>
          <div> Counter is {c} </div>
          <br />
          <div>
            <button onClick={incrementDelta}>Increment Delta</button>
            <button onClick={increment}>Increment Counter</button>
          </div>
          <br />
          <div> Newly Created Functions: {functions.size - 2} </div>
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
