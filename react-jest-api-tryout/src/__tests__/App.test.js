import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('renders app click button', () => {
  const helloFunc = require('src/helloHell');
  const helloAsync = require('src/helloHell');

  jest.spyOn(helloFunc, 'helloFunc').mockReturnValue('c');

  jest.spyOn(helloAsync, 'helloAsync').mockImplementation(
    () =>
      new Promise((res, rej) => {
        res('another world');
      })
  );

  const wrapper = render(<App />);

  fireEvent.click(screen.getByText('sayHelloworld'));
});
