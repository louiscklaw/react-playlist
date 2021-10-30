import { render, screen } from '@testing-library/react';
import React from 'react';

import Helloworld from './components/Helloworld';

test('renders helloworld', () => {
  render(<Helloworld />);
  const linkElement = screen.getByText(/helloworld/i);
  expect(linkElement).toBeInTheDocument();
});
