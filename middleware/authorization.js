const { StatusCodes } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')
module.exports = (role) => { // role = must be admin/student
  return (request, response, next) => {
    if (!request.user.roles.includes(role)) {
      next(new ApplicationError('Not enough permission', StatusCodes.FORBIDDEN))
    } else next()
  }
}
