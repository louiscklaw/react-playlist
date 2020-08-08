import React from 'react';

import {nanoid} from 'nanoid';

import './App.css';

function App() {
  let [test_nanoid, setTestNanoid] = React.useState(nanoid())

  React.useEffect(()=>{
    setTimeout(() => {
      setTestNanoid(nanoid())
    }, 1000);
  })

  return (
    <div className="App">
      helloworld
      <div>
        {test_nanoid}
      </div>
    </div>
  );
}

export default App;
