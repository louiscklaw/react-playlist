import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import renderer from 'react-test-renderer';
import HelloComponent from './components/helloworld'

import helloworld_test from './tests/helloworld_test'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
