import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';

import HelloButton from 'src/components/HelloButton';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      {/* <HelloComponent /> */}
      hellocomponents
      {helloanotherworld}
      <HelloButton />
    </div>
  );
}

export default App;
