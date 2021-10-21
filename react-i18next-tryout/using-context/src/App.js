import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/Global';

import { useTranslation } from 'react-i18next';
import { LANGUAGE_PREF_KEY } from 'src/constants';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';
  const { t, i18n } = useTranslation();

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  const changeLangToEn = () => {
    localStorage.setItem(LANGUAGE_PREF_KEY, 'en');
    window.location.reload();
  };

  const changeLangToFr = () => {
    localStorage.setItem(LANGUAGE_PREF_KEY, 'fr');
    window.location.reload();
  };

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        <h1>{t('Welcome to React')}</h1>
        hellocomponents
        {helloanotherworld}
        <button onClick={changeLangToEn}> change lang to En</button>
        <button onClick={changeLangToFr}> change lang to Fr</button>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
