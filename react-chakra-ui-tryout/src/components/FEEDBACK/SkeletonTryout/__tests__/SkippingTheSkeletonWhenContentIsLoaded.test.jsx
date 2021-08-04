import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { SkippingTheSkeletonWhenContentIsLoaded } from '../';

describe('test SkippingTheSkeletonWhenContentIsLoaded tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <SkippingTheSkeletonWhenContentIsLoaded />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
