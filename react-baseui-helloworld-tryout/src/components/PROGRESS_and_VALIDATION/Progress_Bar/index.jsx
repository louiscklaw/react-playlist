import * as React from 'react';
import { ProgressBar } from 'baseui/progress-bar';

export default () => {
  const [value, setValue] = React.useState(10);
  return <ProgressBar value={value} successValue={100} />;
};
