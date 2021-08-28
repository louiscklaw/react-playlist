import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsSafariTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsSafariTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
