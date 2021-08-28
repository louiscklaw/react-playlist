import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsWearableTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsWearableTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
