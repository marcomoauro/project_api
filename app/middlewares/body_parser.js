const bodyParser = require('body-parser')

module.exports = (request, response, next) => {
  bodyParser.json({limit: '50mb', extended: true})(request, response, next)
}