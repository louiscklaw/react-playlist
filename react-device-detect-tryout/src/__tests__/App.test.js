import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('helloworld', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is rendered only in browser/i);
  expect(linkElement).toBeInTheDocument();
});
