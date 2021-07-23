import React from 'react';
import { useLongPress } from 'react-use';

export default function Demo() {
  const onLongPress = () => {
    console.log('calls callback after long pressing 300ms');
  };

  const defaultOptions = {
    isPreventDefault: true,
    delay: 300,
  };
  const longPressEvent = useLongPress(onLongPress, defaultOptions);

  return <button {...longPressEvent}>useLongPress</button>;
}
