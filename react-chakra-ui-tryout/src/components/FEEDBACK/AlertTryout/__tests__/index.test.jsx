import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AlertTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AlertTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
