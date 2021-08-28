import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsIOSTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsIOSTryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
