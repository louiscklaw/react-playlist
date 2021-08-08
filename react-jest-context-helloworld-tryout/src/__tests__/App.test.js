import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import AppContext from 'src/AppContext';
import { TestContext1 } from 'src/TestContext1';
import { TestContext2 } from 'src/TestContext2';
import { TestContext3 } from 'src/TestContext3';

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

  const helloAppContextWorld = jest.fn();
  const helloTestContext1World = jest.fn();
  const helloTestContext2World = jest.fn();
  const helloTestContext3World = jest.fn();

  const wrapper = render(
    <AppContext.Provider value={{ helloAppContextWorld }}>
      <TestContext1.Provider value={{ helloTestContext1World }}>
        <TestContext2.Provider value={{ helloTestContext2World }}>
          <TestContext3.Provider value={{ helloTestContext3World }}>
            <App />
          </TestContext3.Provider>
        </TestContext2.Provider>
      </TestContext1.Provider>
    </AppContext.Provider>
  );

  fireEvent.click(screen.getByText('helloAppContextWorld'));
});
