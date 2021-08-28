import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsEdgeTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsEdgeTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
