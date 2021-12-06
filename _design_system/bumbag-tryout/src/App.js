import React from 'react';
import { Set, Button } from 'bumbag';

import { PageContent, Heading, Paragraph } from 'bumbag';

export default function App() {
  return (
    <PageContent>
      <Heading>Bumbag's Basic Create React App Example</Heading>
      <Paragraph>Welcome to your new Bumbag site.</Paragraph>
      <Paragraph>Now go build something great with your Bumbag!</Paragraph>

      <Set>
        <Button>Default</Button>
        <Button palette="gray">Gray</Button>
        <Button palette="primary">Primary</Button>
        <Button palette="secondary">Secondary</Button>
        <Button palette="success">Success</Button>
        <Button palette="danger">Danger</Button>
        <Button palette="warning">Warning</Button>
      </Set>
    </PageContent>
  );
}
