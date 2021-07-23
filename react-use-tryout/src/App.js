import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import DemoUseAudio from 'src/components/DemoUseAudio';
import DemoUseGeoLocation from 'src/components/DemoUseGeoLocation';
import DemoUseMouseWheel from 'src/components/DemoUseMouseWheel';
import DemoUseNetworkState from 'src/components/DemoUseNetworkState';
import DemoUseQueue from 'src/components/DemoUseQueue';
import DemoUsePageLeave from 'src/components/DemoUsePageLeave';
import DemoUseFavicon from 'src/components/DemoUseFavicon';
import DemoUseDebounce from 'src/components/DemoUseDebounce';
import DemoUseSessionStorage from 'src/components/DemoUseSessionStorage';
import DemoUseLocalStorage from 'src/components/DemoUseLocalStorage';
import DemoUseCopyToClipboard from 'src/components/DemoUseCopyToClipboard';
import DemoUseLongPress from 'src/components/DemoUseLongPress';
import DemoUseHover from 'src/components/DemoUseHover';
import DemoUseKey from 'src/components/DemoUseKey';
import DemoUseIdle from 'src/components/DemoUseIdle';
import DemoUseMotion from 'src/components/DemoUseMotion';
import DemoUseVibrate from 'src/components/DemoUseVibrate';
import DemoUseSet from 'src/components/DemoUseSet';
import DemoUseMap from 'src/components/DemoUseMap';
import DemoUseList from 'src/components/DemoUseList';
import DemoUseCounter from 'src/components/DemoUseCounter';
import DemoUseToggle from 'src/components/DemoUseToggle';

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
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        hellocomponents
        {helloanotherworld}
        {JSON.stringify(helloEmpty, null, 2)}
        <DemoUseAudio />
        <DemoUseGeoLocation />
        <DemoUseMouseWheel />
        <DemoUseNetworkState />
        <DemoUseQueue />
        <DemoUseDebounce />
        <DemoUseFavicon />
        <DemoUsePageLeave />
        <DemoUseSessionStorage />
        <DemoUseLocalStorage />
        <DemoUseCopyToClipboard />
        <DemoUseLongPress />
        <DemoUseHover />
        <DemoUseKey />
        <DemoUseIdle />
        <DemoUseMotion />
        <DemoUseVibrate />
        <DemoUseSet />
        <DemoUseMap />
        <DemoUseList />
        <DemoUseToggle />
        <DemoUseCounter />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
