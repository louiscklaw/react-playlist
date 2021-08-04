import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FlexTryout } from '../';

describe('test FlexTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<FlexTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
