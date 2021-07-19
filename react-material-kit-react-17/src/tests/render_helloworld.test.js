import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

test('render_helloworld', () => {
  const { container, getByText } = render(<h1>Hello, World!</h1>);

  expect(getByText('Hello, World!')).toBeInTheDocument();

  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Hello, World!
    </h1>
  `);
});
