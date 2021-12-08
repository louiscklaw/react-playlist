import React from 'react';

export const AppContext = React.createContext();

export default ({ children }) => {
  let [word_to_highlight, setWordToHighlight] = React.useState();
  return (
    <>
      <AppContext.Provider value={{ word_to_highlight, setWordToHighlight }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
