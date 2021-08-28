import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsMobileOnlyTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsMobileOnlyTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
