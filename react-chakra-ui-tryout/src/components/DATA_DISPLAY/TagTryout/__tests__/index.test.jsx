import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TagTryout } from '../';

describe('test badge tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<TagTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
