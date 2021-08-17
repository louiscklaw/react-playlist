import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import helloworld_test from './tests/helloworld_test';

test('will fail', () => {
  let done = false;
  let retry = 3;
  while (!done && retry > 0) {
    try {
      console.log('running');
      expect(true).toBe(false);
      done = true;
    } catch (error) {
      retry = retry - 1;
    }
  }
  if (retry == 0 && !done) {
    console.error('failed');
  }
});

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
