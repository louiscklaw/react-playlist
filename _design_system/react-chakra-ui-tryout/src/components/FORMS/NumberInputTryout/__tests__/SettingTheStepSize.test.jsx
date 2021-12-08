import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ChakraProvider } from '@chakra-ui/react';

import { SettingTheStepSize } from '../';

describe('test SettingTheStepSize tryout', () => {
  test('helloworld', () => {
    const tree = renderer.create(
      <ChakraProvider>
      <SettingTheStepSize />
      </ChakraProvider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
