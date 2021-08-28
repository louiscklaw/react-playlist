import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('OsNameTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/OsNameTryout,"linux"/i);
  expect(linkElement).toBeInTheDocument();
});
