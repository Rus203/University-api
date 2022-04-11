const ApplicationError = require('../utils/ApplicationError')
const { StatusCodes } = require('http-status-codes')

module.exports = (schema) => {
  return (request, response, next) => {
    const subject = request.body
    const { error } = request.method === 'PUT' ? schema.updating.validate(subject) : schema.base.validate(subject)
    error ? next(new ApplicationError(error.message, StatusCodes.LOCKED)) : next()
  }
}
