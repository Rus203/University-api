const ApplicationError = require('../utils/ApplicationError')
const { StatusCodes } = require('http-status-codes')

module.exports = (request, response, next) => {
  next(new ApplicationError('Not found', StatusCodes.NOT_FOUND))
}
