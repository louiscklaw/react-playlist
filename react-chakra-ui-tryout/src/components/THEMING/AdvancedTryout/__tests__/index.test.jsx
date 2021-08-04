import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AdvancedTryout } from '../';

describe('test AdvancedTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AdvancedTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
