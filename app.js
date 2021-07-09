const express = require('express')
const logger = require('./app/lib/logger')
const bodyParserMiddleware = require('./app/middlewares/body_parser')
const requestLoggerMiddleware = require('./app/middlewares/request_logger')

const app = express()

require('dotenv').config()

// middlewares for parse body in JSON
app.use(bodyParserMiddleware)

// middlewares to log each request with method (GET, POST, ..) and url (without querystring)
app.use(requestLoggerMiddleware)

// routes
app.get('/', (request, response) => {
  return response.status(200).json({ message: 'OK' })
})

require('./app/routes/project')(app)
//require('./app/routes/job')(app)

app.listen(process.env.PORT || 3000)

module.exports = app