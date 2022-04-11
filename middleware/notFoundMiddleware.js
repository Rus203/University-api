const ApplicationError = require('../utils/ApplicationError')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

module.exports = (request, response, next) => {
  next(new ApplicationError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND))
}
