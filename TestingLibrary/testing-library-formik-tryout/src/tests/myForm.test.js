// myForm.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MyForm } from './myForm.js';

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
  render(<MyForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/first name/i), 'John');
  userEvent.type(screen.getByLabelText(/last name/i), 'Dee');
  userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    })
  );
});
