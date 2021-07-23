import React from 'react';
import {
  createRender,
  createMount,
  createShallow
} from '@material-ui/core/test-utils';

import { BrowserRouter } from 'react-router-dom';
import AppContexts from 'src/contexts/AppContexts';

import App from 'src/App';

test('test App', () => {
  let render = createRender();

  const wrapper = render(<App />);

  expect(wrapper.html()).toMatchSnapshot();
});

test('shallow <App />', () => {
  let shallow = createShallow();

  const wrapper = shallow(<App />);

  expect(wrapper.html()).toMatchSnapshot();
});

test('mount <App />', () => {
  let mount = createMount();

  const wrapper = mount(
    <BrowserRouter>
      <AppContexts>
        <App />
      </AppContexts>
    </BrowserRouter>
  );

  expect(wrapper.html()).toMatchSnapshot();
});
