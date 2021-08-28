import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsChromeTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsChromeTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
