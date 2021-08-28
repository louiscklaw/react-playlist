import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsChromiumTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsChromiumTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
