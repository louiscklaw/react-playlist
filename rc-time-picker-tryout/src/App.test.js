import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { dummyFuncHelloworld } from 'src/utils/dummyFuncHelloworld';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('dummyFuncHelloworld', () => {
  expect(dummyFuncHelloworld(1)).toEqual(2);
});
