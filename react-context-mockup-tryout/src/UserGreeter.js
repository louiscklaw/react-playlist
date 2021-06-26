import React from 'react';

import { UserContext } from './UserContext';

export default function UserGreeter() {
  const user = React.useContext(UserContext);

  if (!user) return 'Hello stranger!';
  return `Hello ${user.name}!`;
}
