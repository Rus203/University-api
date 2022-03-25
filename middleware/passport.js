const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { secret } = require('../credentials')
const userService = require('../services/userService')

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = secret

passport.use(new JwtStrategy(options, async (playLoad, done) => {
  userService.readById(playLoad.userId)
    .then(user => !!user === true ? done(null, user) : done(null, false))
    .catch(error => done(error, false))
}))

module.exports = passport
