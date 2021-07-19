// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import notistack from 'notistack';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

configure({ adapter: new Adapter() });

// const enqueueSnackbar = jest.fn();
// jest.spyOn(notistack, 'useSnackbar').mockImplementation(() => {
//   return { enqueueSnackbar };
// });

jest.mock('notistack', () => ({
  useSnackbar: () => ({
    enqueueSnackbar: () => 'helloworld',
  }),
}));
