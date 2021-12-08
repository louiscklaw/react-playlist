import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';

import { Context2 } from 'src/contexts/context2';
import { Context3 } from 'src/contexts/context3';

function App() {
  let { hello2, setHello2, sampleHelloworld2 } = React.useContext(Context2);
  let { sampleHelloworld3 } = React.useContext(Context3);

  return (
    <div className="App">
      helloworld {hello2}{' '}
      <button onClick={(e) => sampleHelloworld2()}>sampleHelloworld2</button>;
      <button onClick={(e) => sampleHelloworld3()}>sampleHelloworld3</button>;
      <button onClick={(e) => setHello2('test')}>test</button>
      hellp App
    </div>
  );
}

export default App;
