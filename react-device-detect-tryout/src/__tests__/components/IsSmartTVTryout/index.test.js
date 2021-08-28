import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsSmartTVTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsSmartTVTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
