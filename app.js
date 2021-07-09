const express = require('express')
const bodyParserMiddleware = require('./app/middlewares/body_parser')
const requestLoggerMiddleware = require('./app/middlewares/request_logger')

const app = express()

require('dotenv').config()

// middleware for parse body in JSON
app.use(bodyParserMiddleware)

// middleware to log each request with method (GET, POST, ..) and url (without querystring)
app.use(requestLoggerMiddleware)

//routes
require('./app/routes/project')(app)
require('./app/routes/job')(app)

app.listen(process.env.PORT || 3000)

module.exports = app