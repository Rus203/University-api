const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const userService = require('../services/userService')

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = process.env.SECRET

passport.use('jwt', new JwtStrategy(options, async (playLoad, done) => {
  userService.readById(playLoad.userId)
    .then(user => !!user === true ? done(null, { userId: playLoad.userId, roles: playLoad.roles }) : done(null, false))
    .catch(error => done(error, false))
}))

module.exports = passport
