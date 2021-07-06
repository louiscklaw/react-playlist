import React from 'react';
import { render } from '@testing-library/react';
import { createMount } from '@material-ui/core/test-utils';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('<App />', () => {
  it('should work', () => {
    let mount = createMount();
    const wrapper = mount(<App />);

    wrapper.find('#sayHelloworld').simulate('click');

    mount.cleanUp();
  });
});
