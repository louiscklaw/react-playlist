import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('DeviceTypeTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/deviceDetectTryout,{"isBrowser":true/i);
  expect(linkElement).toBeInTheDocument();
});
