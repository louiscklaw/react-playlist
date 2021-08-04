import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TextareaTryout } from '../';

describe('test TextareaTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<TextareaTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
