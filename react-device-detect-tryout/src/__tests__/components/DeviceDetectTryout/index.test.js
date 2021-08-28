import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('DeviceDetectTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/deviceDetectTryout/i);
  expect(linkElement).toBeInTheDocument();
});
