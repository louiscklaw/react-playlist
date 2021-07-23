import * as React from 'react';
import { Button } from 'baseui/button';

export default function HelloButton() {
  return <Button onClick={() => alert('click')}>Hello</Button>;
}
