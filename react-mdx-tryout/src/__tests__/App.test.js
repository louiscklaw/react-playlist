import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from 'src/App';

test('renders learn react link', async () => {
  const { getByText, findByText } = render(<App />);

  const movie = await findByText('hello-world');

  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
