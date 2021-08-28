import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsWindowsTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsWindowsTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
