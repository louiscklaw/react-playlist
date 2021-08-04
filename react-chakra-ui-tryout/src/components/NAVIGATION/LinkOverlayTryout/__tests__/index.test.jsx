import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { LinkOverlayTryout } from '../';

describe('test LinkOverlayTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<LinkOverlayTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
