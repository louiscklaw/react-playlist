import React from 'react';
import {
  createRender,
  createMount,
  createShallow
} from '@material-ui/core/test-utils';

import { BrowserRouter } from 'react-router-dom';

import App from 'src/App';

test('mount <App />', () => {
  const mount = createMount();

  const wrapper = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(wrapper.html()).toMatchSnapshot();
});
