const express = require('express')
const logger = require('./app/lib/logger')
const bodyParserMiddleware = require('./app/middleware/body_parser')
const requestLoggerMiddleware = require('./app/middleware/request_logger')

const app = express()

// middleware for parse body in JSON
app.use(bodyParserMiddleware)

// middleware to log each request with method (GET, POST, ..) and url (without querystring)
app.use(requestLoggerMiddleware)

// routes
app.get('/', (request, response) => {
  return response.status(200).json({ message: 'OK' })
})

app.listen(process.env.PORT || 3000)

module.exports = app