import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsIPhone13Tryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsIPhone13Tryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
