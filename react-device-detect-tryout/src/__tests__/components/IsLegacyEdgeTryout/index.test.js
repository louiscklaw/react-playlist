import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsLegacyEdgeTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsLegacyEdgeTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
