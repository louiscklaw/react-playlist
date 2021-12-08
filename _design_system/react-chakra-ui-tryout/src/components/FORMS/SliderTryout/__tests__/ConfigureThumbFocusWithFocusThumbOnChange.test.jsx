import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { ConfigureThumbFocusWithFocusThumbOnChange } from '../';

describe('test ConfigureThumbFocusWithFocusThumbOnChange tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <ConfigureThumbFocusWithFocusThumbOnChange />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
