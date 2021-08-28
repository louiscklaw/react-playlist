import React from 'react';
import { act, render } from '@testing-library/react';
import App from 'src/App';

test('helloworld', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hellocountdown/i);
  expect(linkElement).toBeInTheDocument();
});

const sleep = (sleep_s) => {
  return new Promise((res, rej) => {
    setTimeout(res, sleep_s);
  });
};

test('timer should countdown', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/"seconds":5/i);
  expect(linkElement).toBeInTheDocument();

  await act(async () => {
    await sleep(6000).then(() => {
      const linkElement = getByText(/"seconds":0/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
}, 10000);
