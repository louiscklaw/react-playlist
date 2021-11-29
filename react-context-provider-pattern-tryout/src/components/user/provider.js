import { useState } from 'react';
import UserContext from './context';

export default function UserProvider({ children }) {
  const [name, setName] = useState('World');
  const value = {
    state: { name },
    actions: { setName },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
