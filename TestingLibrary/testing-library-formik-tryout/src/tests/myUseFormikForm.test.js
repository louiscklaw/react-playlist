// MyUseFormikForm.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MyUseFormikForm } from './MyUseFormikForm.js';

test('rendering and submitting a basic Formik form, hello_mary', async () => {
  const handleSubmit = jest.fn();
  const { container } = render(<MyUseFormikForm onSubmit={handleSubmit} />);

  userEvent.type(
    screen.getByRole('textbox', { name: 'First Name' }),
    'hello_mary'
  );

  userEvent.type(screen.getByTestId('password'), 'hello_password');
  // userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());

  expect(container).toMatchSnapshot();
});

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
  const { container } = render(<MyUseFormikForm onSubmit={handleSubmit} />);

  userEvent.type(
    screen.getByRole('textbox', { name: 'First Name' }),
    'hello john'
  );
  userEvent.type(screen.getByTestId('username'), 'hello_username');

  userEvent.type(screen.getByTestId('password'), 'hello_password');
  // userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'hello john',
      username: 'hello_username',
      password: 'hello_password',
    })
  );
  expect(container).toMatchSnapshot();
});
