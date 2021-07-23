import * as React from 'react';
import { ProgressSteps, Step } from 'baseui/progress-steps';
import { Button } from 'baseui/button';

export default () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <ProgressSteps current={current}>
      <Step title="Verify Address">
        <p>Address on file: 1455 Market Street</p>
        <Button size="compact" onClick={() => setCurrent(1)}>
          Next
        </Button>
      </Step>
      <Step title="Verify Payment">Payment verified</Step>
    </ProgressSteps>
  );
};
