const axios = require('axios')

// test-long-processing-json
const fetch_test_long_processing_json = () =>
  fetch('http://127.0.0.1:3001/test-long-processing-json', {
    timeout: 1000,
  }).then(res => res.json())

export default fetch_test_long_processing_json
