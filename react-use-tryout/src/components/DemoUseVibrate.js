import { useVibrate, useToggle } from 'react-use';

export default function Demo() {
  const [vibrating, toggleVibrating] = useToggle(false);

  useVibrate(vibrating, [300, 100, 200, 100, 1000, 300], false);

  return (
    <div>
      <button onClick={toggleVibrating}>
        {vibrating ? 'Stop' : 'Vibrate'}
      </button>
    </div>
  );
}
