import request from 'request';

let TEST_API_ENDPOINT = 'http://localhost:5001/lynked-demo-tryout/us-central1';

describe('helloworld', () => {
  test('admin_get_helloworld', () => {
    request(
      `${TEST_API_ENDPOINT}/api/admin_get_helloworld`,
      (error, response, body) => {
        expect(JSON.parse(body)).toStrictEqual({ helloworld: 'helloworld' });
      }
    );
  });
  test('manage_get_helloworld', () => {
    request(
      `${TEST_API_ENDPOINT}/api/manage_get_helloworld`,
      (error, response, body) => {
        expect(JSON.parse(body)).toStrictEqual({ helloworld: 'helloworld' });
      }
    );
  });
  test('client_get_helloworld', () => {
    request(
      `${TEST_API_ENDPOINT}/api/client_get_helloworld`,
      (error, response, body) => {
        expect(JSON.parse(body)).toStrictEqual({ helloworld: 'helloworld' });
      }
    );
  });
});
