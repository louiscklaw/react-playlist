import React from 'react';
import { TestContext1 } from 'src/TestContext1';
import { TestContext2 } from 'src/TestContext2';
import { TestContext3 } from 'src/TestContext3';
import { AppContext } from './AppContext';

function App() {
  let { helloAppContextWorld } = React.useContext(AppContext);
  let { helloTestContext1World } = React.useContext(TestContext1);
  let { helloTestContext2World } = React.useContext(TestContext2);
  let { helloTestContext3World } = React.useContext(TestContext3);

  return (
    <>
      learn react
      <button onClick={helloAppContextWorld}>helloAppContextWorld</button>
      <button onClick={helloTestContext1World}>helloTestContext1World</button>
      <button onClick={helloTestContext2World}>helloTestContext2World</button>
      <button onClick={helloTestContext3World}>helloTestContext3World</button>
    </>
  );
}

export default App;
