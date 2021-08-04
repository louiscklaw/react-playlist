import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AlertDialogTryout } from '../';

describe('test AlertDialogTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AlertDialogTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
