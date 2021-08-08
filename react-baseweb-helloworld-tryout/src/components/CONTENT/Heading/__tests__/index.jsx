import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from '../index.jsx';

test('renders learn react link', () => {
  const render_result = render(<TestComponent />);
  expect(render_result.container.innerHTML).toMatchSnapshot();
});
