import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsDesktopTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsDesktopTryout,true/i);
  expect(linkElement).toBeInTheDocument();
});
