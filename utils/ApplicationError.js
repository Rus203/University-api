const { StatusCodes, ReasonPhrases } = require('http-status-codes')

module.exports = function (message = ReasonPhrases.BAD_REQUEST, statusCode = StatusCodes.BAD_REQUEST) {
  this.message = message
  this.status = 'Error'
  this.statusCode = statusCode
  this.isOperational = true
}
