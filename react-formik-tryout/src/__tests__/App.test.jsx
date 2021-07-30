import React from 'react';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from 'src/App';

test('renders learn react link', () => {
  const tree = renderer.create(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // expect(wrapper.html()).toMatchSnapshot();
  expect(tree).toMatchSnapshot();
});
