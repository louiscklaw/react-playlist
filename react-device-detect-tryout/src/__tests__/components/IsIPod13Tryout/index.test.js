import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsIPod13Tryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsIPod13Tryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
