const passport = require('passport')

module.exports = (request, require, next) => {
  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error) {
      next(new Error(error))
    }
    request.user = user
    next()
  })(request, require, next)
}
