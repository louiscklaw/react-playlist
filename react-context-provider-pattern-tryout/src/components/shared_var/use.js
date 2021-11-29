import { useContext } from 'react';
import SharedVarContext from './context';

export default function useSharedVar() {
  return useContext(SharedVarContext);
}
