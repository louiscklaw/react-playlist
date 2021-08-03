import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { UseTokenTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<UseTokenTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
