import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('OsVersionTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/OsVersionTryout,"none"/i);
  expect(linkElement).toBeInTheDocument();
});
