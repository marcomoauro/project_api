const winston = require('winston')
const transports = [new winston.transports.Console()]

module.exports = winston.createLogger(
  {
    transports,
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.colorize({all: true}),
      winston.format.simple()
    )
  }
)
