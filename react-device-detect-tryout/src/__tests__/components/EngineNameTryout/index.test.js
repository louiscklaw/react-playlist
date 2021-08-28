import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('EngineNameTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/engineName,"WebKit"/i);
  expect(linkElement).toBeInTheDocument();
});
