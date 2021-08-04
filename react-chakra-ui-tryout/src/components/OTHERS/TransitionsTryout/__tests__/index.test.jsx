import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TransitionsTryout } from '../';

describe('test TransitionsTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<TransitionsTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
