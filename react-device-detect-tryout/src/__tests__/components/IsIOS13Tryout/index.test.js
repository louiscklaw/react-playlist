import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsIOS13Tryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsIOS13Tryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
