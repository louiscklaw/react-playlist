import { useMotion } from 'react-use';

export default function Demo() {
  const state = useMotion();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
