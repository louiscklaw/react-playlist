import { useState } from 'react';
import SharedVarContext from './context';

export default function SharedVarProvider({ children }) {
  const [name, setName] = useState('World');
  const value = {
    state: { name },
    actions: { setName },
  };
  return (
    <SharedVarContext.Provider value={value}>
      {children}
    </SharedVarContext.Provider>
  );
}
