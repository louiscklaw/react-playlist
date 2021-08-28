import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('EngineVersionTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/engineVersion,"537.36"/i);
  expect(linkElement).toBeInTheDocument();
});
