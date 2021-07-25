import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { helloFunc, helloAsync } from './helloHell';

function App({ test_branch = false }) {
  let helloanotherworld = '123';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  function sayHelloworld() {
    console.log('say helloworld');
  }

  React.useEffect(() => {
    // let { helloFunc } = helloHell;
    console.log(helloFunc());
    // console.log(helloAsync());

    helloAsync().then((res) => {
      console.log('res', res);
    });
  });

  return (
    <div className="App">
      <GlobalContextProvider>
        hellocomponents
        {helloanotherworld}
        learn react
        <button onClick={sayHelloworld}>sayHelloworld</button>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
