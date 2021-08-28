import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsTabletTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsTabletTryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
