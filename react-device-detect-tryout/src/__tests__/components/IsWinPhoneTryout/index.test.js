import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsWinPhoneTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsWinPhoneTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
