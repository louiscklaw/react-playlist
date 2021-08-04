import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { LinkInlineWithText } from '../';

describe('test LinkInlineWithText tryout', () => {
  test('helloworld', () => {
    const tree = renderer
      .create(
        <ChakraProvider>
          <LinkInlineWithText />
        </ChakraProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
