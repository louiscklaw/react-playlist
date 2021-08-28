import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsSamsungBrowserTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsSamsungBrowserTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
