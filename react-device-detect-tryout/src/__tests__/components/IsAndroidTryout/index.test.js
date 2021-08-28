import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsAndroidTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsAndroidTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
