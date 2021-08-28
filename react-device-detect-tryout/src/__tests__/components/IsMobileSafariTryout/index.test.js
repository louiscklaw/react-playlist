import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsMobileSafariTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsMobileSafariTryout,""/i);
  expect(linkElement).toBeInTheDocument();
});
