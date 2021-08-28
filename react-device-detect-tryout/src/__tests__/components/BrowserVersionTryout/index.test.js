import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('BrowserVersionTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/browserVersionTryout,"537"/i);
  expect(linkElement).toBeInTheDocument();
});
