import request from 'request';

let TEST_API_ENDPOINT = 'http://localhost:5001/lynked-demo-tryout/us-central1';

describe('testing-server-routes', () => {
  it('test_runShopClosedProcedure', () => {
    request(
      `${TEST_API_ENDPOINT}/api/runShopClosedProcedure?rest_id=wF5SRAl2k5G1SD7GiRda`,
      (error, response, body) => {
        expect(JSON.parse(body)).toStrictEqual({ result: 'OK' });
      }
    );
  });
});
