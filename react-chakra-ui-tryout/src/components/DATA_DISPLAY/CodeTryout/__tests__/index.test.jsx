import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CodeTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<CodeTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
