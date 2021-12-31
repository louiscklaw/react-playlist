import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('helloworld', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hellocomponents123/i);
  expect(linkElement).toBeInTheDocument();
});
