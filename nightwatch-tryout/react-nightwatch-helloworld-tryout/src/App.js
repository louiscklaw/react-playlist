import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  let [text_helloworld, setTextHelloworld] = React.useState('hello_1div');
  const helloButtonClick = () => {
    setTextHelloworld('hello hell, hello hell, hello hell');
  };

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        <div style={{ height: '100vh', width: '100vw' }}>
          hellocomponents
          {helloanotherworld}
          <button name="btnK" onClick={helloButtonClick}>
            helloworld
          </button>
          <div id="hello_div">{text_helloworld}</div>
          <input type="text" onChange={() => {}} />
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
