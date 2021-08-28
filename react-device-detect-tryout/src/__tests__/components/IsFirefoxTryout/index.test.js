import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsFirefoxTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsFirefoxTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
