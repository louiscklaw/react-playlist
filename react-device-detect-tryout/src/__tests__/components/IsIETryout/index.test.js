import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsIETryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsIETryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
