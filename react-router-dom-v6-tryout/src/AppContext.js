import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { StateMachineContextProvider } from 'src/contexts/StateMachineContext';

import TestInitComponent from 'src/components/TestInitComponent';

export const AppContext = React.createContext();

export default function AppContextProvider({ children }) {
  let [rest_id, setRestId] = React.useState();

  React.useEffect(() => {
    console.log('AppContextProvider', 'rest_id', rest_id);
  }, [rest_id]);

  return (
    <AppContext.Provider value={{ rest_id, setRestId }}>
      helloworld rest_id {JSON.stringify(rest_id, null, 2)}
      <StateMachineContextProvider>{children}</StateMachineContextProvider>
    </AppContext.Provider>
  );
}
