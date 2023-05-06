const express = require('express')
const app = express()
const SERVER_PORT = 4002;
const API_PORT = 3001;

app.use(express.static('public'))

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

console.log(`Server running at http://127.0.0.1:${API_PORT}/`)
console.log(`endpoint running at http://127.0.0.1:${API_PORT}/test-get`)
console.log(`endpoint running at http://127.0.0.1:${API_PORT}/test-get-json`)
console.log(`endpoint running at http://127.0.0.1:${API_PORT}/test-post`)
console.log(`endpoint running at http://127.0.0.1:${API_PORT}/redirect`)
app.listen(API_PORT)

// var http = require('http')

// http
//   .createServer()
//   .listen(SERVER_PORT)

// // Console will print the message
// console.log(`Server running at http://127.0.0.1:${SERVER_PORT}/`)
