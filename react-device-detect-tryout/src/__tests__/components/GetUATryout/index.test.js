import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('GetUATryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/getUA/i);
  expect(linkElement).toBeInTheDocument();
});
