import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { useSpring, animated } from 'react-spring';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';

  let helloEmpty;

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  console.log('helloEmpty', helloEmpty);

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        hellocomponents
        {helloanotherworld}
        {JSON.stringify(helloEmpty, null, 2)}
        <animated.div style={props}>I will fade in</animated.div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
