import React from 'react';
import { useKey } from 'react-use';

export default function Demo() {
  const [count, set] = React.useState(0);
  const increment = () => set((count) => ++count);
  useKey('ArrowUp', increment);

  return <div>Press arrow up: {count}</div>;
}
