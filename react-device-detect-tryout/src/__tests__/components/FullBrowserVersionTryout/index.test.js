import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('fullBrowserVersionTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/fullBrowserVersion,"537.36"/i);
  expect(linkElement).toBeInTheDocument();
});
