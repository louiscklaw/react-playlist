import React from 'react';

import { useTranslation } from "react-i18next";

import './App.css';

import './lang';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h2>{t('Welcome to React')}</h2>
    </div>
  );
}

export default App;
