const passport = require('passport')
const ApplicationError = require('../utils/ApplicationError')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

module.exports = (request, require, next) => {
  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error) {
      next(new ApplicationError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST))
    } else if (!request.headers.authorization) {
      next(new ApplicationError(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED))
    } else {
      request.user = user
      next()
    }
  })(request, require, next)
}
