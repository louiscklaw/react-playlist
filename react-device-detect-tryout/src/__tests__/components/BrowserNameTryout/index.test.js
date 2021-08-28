import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('BrowserNameTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/browserName,"WebKit"/i);
  expect(linkElement).toBeInTheDocument();
});
