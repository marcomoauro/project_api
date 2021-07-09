const logger = require('../lib/logger')

module.exports = (request, response, next) => {
  logger.info(`Started ${request.method} for ${request._parsedUrl.pathname}`)
  next()
}