import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

test('OsTypesTryout', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /OsTypesTryout,{"IOS":"iOS","Android":"Android","WindowsPhone":"Windows Phone","Windows":"Windows","MAC_OS":"Mac OS"}/i
  );
  expect(linkElement).toBeInTheDocument();
});
