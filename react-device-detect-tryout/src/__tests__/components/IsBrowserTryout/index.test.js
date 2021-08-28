import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('isBrowserTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsBrowserTryout,true/i);
  expect(linkElement).toBeInTheDocument();
});
