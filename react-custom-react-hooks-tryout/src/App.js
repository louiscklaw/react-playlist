import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import DebounceComponent from './3-useDebounce/DebounceComponent';

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
        {/* <ToggleComponent /> */}
        {/* <TimeoutComponent /> */}
        <DebounceComponent />
        {/* <UpdateEffectComponent /> */}
        {/* <ArrayComponent /> */}
        {/* <PreviousComponent /> */}
        {/* <StateWithHistoryComponent /> */}
        {/* <StorageComponent /> */}
        {/* <AsyncComponent /> */}
        {/* <FetchComponent /> */}
        {/* <ScriptComponent /> */}
        {/* <DeepCompareEffectComponent /> */}
        {/* <EventListenerComponent /> */}
        {/* <OnScreenComponentComponent /> */}
        {/* <WindowSizeComponent /> */}
        {/* <MediaQueryComponent /> */}
        {/* <GeolocationComponent /> */}
        {/* <StateWithValidationComponent /> */}
        {/* <SizeComponent /> */}
        {/* <EffectOnceComponent /> */}
        {/* <ClickOutsideComponent /> */}
        {/* <DarkModeComponent /> */}
        {/* <CopyToClipboardComponent /> */}
        {/* <CookieComponent /> */}
        {/* <TranslationComponent /> */}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
