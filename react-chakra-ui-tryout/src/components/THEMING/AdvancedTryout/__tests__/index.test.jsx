import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AdvancedTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AdvancedTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
