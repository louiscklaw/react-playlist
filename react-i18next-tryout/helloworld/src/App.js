import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/Global';

import { useTranslation } from 'react-i18next';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';
  const { t, i18n } = useTranslation();

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        <h1>{t('Welcome to React')}</h1>
        hellocomponents
        {helloanotherworld}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
