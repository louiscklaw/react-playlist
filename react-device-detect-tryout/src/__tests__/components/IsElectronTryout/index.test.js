import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsElectronTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsElectronTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
