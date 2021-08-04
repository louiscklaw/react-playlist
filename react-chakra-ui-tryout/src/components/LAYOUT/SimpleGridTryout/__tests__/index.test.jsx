import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SimpleGridTryout } from '../';

describe('test SimpleGridTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<SimpleGridTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
