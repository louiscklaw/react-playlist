import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('IsYandexTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/IsYandexTryout,false/i);
  expect(linkElement).toBeInTheDocument();
});
