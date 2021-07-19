import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { BrowserRouter } from 'react-router-dom';
import App from 'src/App';

test('app_render_helloworld', () => {
  const { container, getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();

  // expect(getByText('Hello, World!')).toBeInTheDocument();

  // expect(container.firstChild).toMatchInlineSnapshot(`
  //   <h1>
  //     Hello, World!
  //   </h1>
  // `);
});
