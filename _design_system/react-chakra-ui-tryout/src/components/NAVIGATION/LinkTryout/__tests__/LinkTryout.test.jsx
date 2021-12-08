import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { LinkTryout } from '../';
import { BrowserRouter } from 'react-router-dom';

describe('test LinkTryout tryout', () => {
  test('helloworld', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ChakraProvider>
            <LinkTryout />
          </ChakraProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
