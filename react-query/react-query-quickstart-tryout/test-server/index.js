const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

var cb_done = function (req, res, next) {
  console.log('LOGGED')
  res.send('done')
}

app.get('/test-get', function (req, res) {
  console.log('get called')
  console.log('para:' + JSON.stringify(req.query, null, 2))

  res.status(200).send('hello test-get')
})

app.get('/test-get-json', function (req, res) {
  console.log('test-get-json called')
  console.log('para:' + JSON.stringify(req.query, null, 2))

  res.status(200).send({ hello: 'world' })
})

app.get('/test-unstable-get-json', function (req, res) {
  console.log('test-get-json called')
  console.log('para:' + JSON.stringify(req.query, null, 2))

  let random_result = Math.random()
  console.log('random_result', random_result)
  if (random_result > 0.66) {
    res.status(200).send({ hello: 'world' })
  } else {
    res.status(400).send({ hello: 'fail' })
  }
})

app.get('/test-long-processing-json', function (req, res) {
  console.log('test-get-json called')
  console.log('para:' + JSON.stringify(req.query, null, 2))

  setTimeout(() => {
    res.status(200).send({ hello: 'test-long-processing-json' })
  }, 5000)
})

app.post('/test-post', function (req, res) {
  console.log('post called')
  console.log('para:' + JSON.stringify(req.query, null, 2))
  res.status(200).send('hello test-get')
})

app.get('/redirect', (req, res) => {
  res.redirect('/call-done')
})

app.get('/call-done', function (req, res) {
  console.log('call-done')
  res.send('call done')
})

console.log('endpoint running at http://127.0.0.1:3001/redirect')
console.log('endpoint running at http://127.0.0.1:3001/test-get-json')
console.log('endpoint running at http://127.0.0.1:3001/test-get')
console.log('endpoint running at http://127.0.0.1:3001/test-long-processing-json')
console.log('endpoint running at http://127.0.0.1:3001/test-post')
console.log('Server running at http://127.0.0.1:3001/')
app.listen(3001)

//

//

var http = require('http')

http
  .createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' })

    // Send the response body as "Hello World"
    response.end('Hello World\n')
  })
  .listen(8081)

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/')
