import React from 'react';
import useDebouncedHighlight from './hooks/useDebouncedHighlight';

export const AppContext = React.createContext();

export default ({ children }) => {
  let [word_to_highlight, immed_value, setWordToHighlight] =
    useDebouncedHighlight();
  return (
    <>
      <AppContext.Provider
        value={{ word_to_highlight, immed_value, setWordToHighlight }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
