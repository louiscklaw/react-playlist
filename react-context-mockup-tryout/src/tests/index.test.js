import React from 'react';

import { render } from '@testing-library/react';

import { UserContext } from '../UserContext';
import UserGreeter from '../UserGreeter';

test('UserGreeter salutes an anonymous user', () => {
  render(
    <UserContext.Provider value={null}>
      <UserGreeter />
    </UserContext.Provider>
  );
  // expect(screen.getByText('Hello stranger!')).toBeInTheDocument();
});

test('UserGreeter salutes a user', () => {
  const user = { name: 'Giorgio' };
  render(
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
  // expect(screen.getByText(`Hello ${user.name}!`)).toBeInTheDocument();
});
