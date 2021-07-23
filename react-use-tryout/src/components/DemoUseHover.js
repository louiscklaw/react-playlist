import React from 'react';
import { useHover } from 'react-use';

export default function Demo() {
  const element = (hovered) => <div>Hover me! {hovered && 'Thanks!'}</div>;
  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
}
