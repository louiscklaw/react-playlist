import * as React from 'react';
import { ProgressSteps, NumberedStep } from 'baseui/progress-steps';
import { Button } from 'baseui/button';

export default () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <ProgressSteps current={current}>
      <NumberedStep title="Verify Address">
        <p>Address on file: 1455 Market Street</p>
        <Button size="compact" onClick={() => setCurrent(1)}>
          Next
        </Button>
      </NumberedStep>
      <NumberedStep title="Verify Payment">Payment verified</NumberedStep>
    </ProgressSteps>
  );
};
