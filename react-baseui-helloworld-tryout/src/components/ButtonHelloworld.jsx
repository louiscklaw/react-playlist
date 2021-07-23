import * as React from 'react';
import { Button } from 'baseui/button';

export default function ButtonHelloworld() {
  return <Button onClick={() => alert('click')}>Hello</Button>;
}
