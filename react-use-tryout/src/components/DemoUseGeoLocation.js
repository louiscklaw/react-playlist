import React from 'react';
import { useGeolocation } from 'react-use';

export default function Demo() {
  const state = useGeolocation();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
