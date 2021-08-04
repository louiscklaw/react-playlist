import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AccordionTryout } from '../';

describe('test AccordionTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(<AccordionTryout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
