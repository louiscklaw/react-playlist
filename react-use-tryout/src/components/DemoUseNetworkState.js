import { useNetworkState } from 'react-use';

export default function Demo() {
  const state = useNetworkState();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
