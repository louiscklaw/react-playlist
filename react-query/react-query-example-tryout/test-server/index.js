const express = require('express')
const app = express()

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
  console.log('get called')
  console.log('para:' + JSON.stringify(req.query, null, 2))

  res.status(200).send({ hello: 'world' })
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

console.log('Server running at http://127.0.0.1:3001/')
console.log('endpoint running at http://127.0.0.1:3001/test-get')
console.log('endpoint running at http://127.0.0.1:3001/test-get-json')
console.log('endpoint running at http://127.0.0.1:3001/test-post')
console.log('endpoint running at http://127.0.0.1:3001/redirect')
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
