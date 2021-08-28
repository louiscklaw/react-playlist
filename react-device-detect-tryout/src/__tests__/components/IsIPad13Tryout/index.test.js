import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsIPad13Tryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsIPad13Tryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
