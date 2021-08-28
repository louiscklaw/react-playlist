import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsEdgeChromiumTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsEdgeChromiumTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
