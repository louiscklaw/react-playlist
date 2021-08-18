import retry from 'jest-retries';

retry('will fail', 5, () => {
  console.log('running');
  const random_num = Math.random();
  console.log(random_num);
  expect(random_num > 0.75).toBe(true);
});

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
