import { useContext } from 'react';
import UserContext from './context';

export default function useUser() {
  return useContext(UserContext);
}
