// users.test.js
import axios from 'axios';
import Users from '../users';

import { helloworldFunction } from '../helloworldFunction';

jest.mock('axios');
jest.mock('../helloworldFunction');

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  helloworldFunction.mockImplementation(() => 42);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  console.error('hello error');
  console.log('after hello error');

  return Users.all().then((data) => expect(data).toEqual(users));
});
