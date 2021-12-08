import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { ReturnFocus } from '../';

describe('test ReturnFocus tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <ReturnFocus />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
