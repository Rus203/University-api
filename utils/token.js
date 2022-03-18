const jwt = require('jsonwebtoken')
const { secret } = require('../credentials')

const token = {
  async generateToken (data) {
    const token = jwt.sign(data, secret, { expiresIn: 24 * 60 * 60 * 1000 }) // 1 day
    return token
  }
}

module.exports = token
