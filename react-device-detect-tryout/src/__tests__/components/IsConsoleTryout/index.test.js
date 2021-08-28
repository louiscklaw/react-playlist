import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsConsoleTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsConsoleTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
