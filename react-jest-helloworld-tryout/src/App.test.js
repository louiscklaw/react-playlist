import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

import helloHell from 'src/helloHell';

// jest.mock('./helloHell');
// jest.mock('src/helloHell');

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders app test_branch true', () => {
//   const { getByText } = render(<App test_branch={true} />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders app click button', () => {
  const helloFunc = require('./helloHell');
  const helloAsync = require('./helloHell');

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
