import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonExampleButton = () => <Button>Click Here</Button>;
const ButtonAsAhrefExampleButton = () => (
  <Button as="a" href="/home">
    To homepage
  </Button>
);

export { ButtonExampleButton, ButtonAsAhrefExampleButton };
