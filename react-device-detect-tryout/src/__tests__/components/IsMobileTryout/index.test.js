import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsMobileTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsMobileTryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
