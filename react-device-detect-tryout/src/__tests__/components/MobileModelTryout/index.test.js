import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('MobileModelTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/MobileModelTryout,"none"/i);
  expect(linkElement).toBeInTheDocument();
});
