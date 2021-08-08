import React from 'react';
import { render } from '@testing-library/react';
import ComponentHelloworld from './index';

test('helloworld', () => {
  const { getByText } = render(<ComponentHelloworld />);
  const linkElement = getByText(/HELLO WORLD/i);
  expect(linkElement).toBeInTheDocument();
});
