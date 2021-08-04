import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { StatTryout } from '../';

describe('test StatTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<StatTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
