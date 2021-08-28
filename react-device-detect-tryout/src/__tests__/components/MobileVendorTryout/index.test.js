import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('MobileVendorTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/MobileVendorTryout,"none"/i);
  expect(linkElement).toBeInTheDocument();
});
