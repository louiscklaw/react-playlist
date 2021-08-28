import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsOperaTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsOperaTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
