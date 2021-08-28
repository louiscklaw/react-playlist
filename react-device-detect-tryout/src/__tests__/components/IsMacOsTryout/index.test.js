import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsMacOsTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsMacOsTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
