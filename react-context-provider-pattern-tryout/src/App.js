import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

// import UserProvider from 'src/components/user/provider';
// import ShowName from 'src/components/user/show';
// import EditName from 'src/components/user/edit';

import SharedVarProvider from 'src/components/shared_var/provider';
import ShowName from 'src/components/shared_var/show';
import EditName from 'src/components/shared_var/edit';

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

  return (
    <div className="App">
      {/* <UserProvider>
        <h1>Welcome</h1>
        <ShowName />
        <EditName />
      </UserProvider> */}
      <SharedVarProvider>
        <h1>Welcome</h1>
        <ShowName />
        <EditName />
      </SharedVarProvider>
    </div>
  );
}

export default App;
