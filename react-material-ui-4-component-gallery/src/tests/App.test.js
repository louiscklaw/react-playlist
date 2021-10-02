import { render, screen } from '@testing-library/react';
import App from '../App';

test('App helloworld', () => {
  render(<App />);
  const linkElement = screen.getByText(/helloworld/i);
  expect(linkElement).toBeInTheDocument();
});
