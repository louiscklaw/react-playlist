import { useIdle } from 'react-use';

export default function Demo() {
  const isIdle = useIdle(3e3);

  return (
    <div>
      <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
    </div>
  );
}
