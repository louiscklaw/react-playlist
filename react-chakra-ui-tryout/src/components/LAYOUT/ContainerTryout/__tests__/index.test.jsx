import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ContainerTryout } from '../';

describe('test ContainerTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<ContainerTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
