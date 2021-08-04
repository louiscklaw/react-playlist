import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TooltipTryout } from '../';

describe('test TooltipTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<TooltipTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
