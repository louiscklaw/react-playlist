import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('BrowserTypesTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/"Chrome":"Chrome"/i);
  expect(linkElement).toBeInTheDocument();
});
