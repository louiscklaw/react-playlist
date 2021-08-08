// users.js
import axios from 'axios';

import { helloworldFunction } from './helloworldFunction';

class Users {
  static all() {
    console.log(helloworldFunction());

    return axios
      .get('/users.json')
      .then((resp) => resp.data)
      .then((resp_data) => {
        console.log('helloworld', resp_data);
        return resp_data;
      });
  }
}

export default Users;
