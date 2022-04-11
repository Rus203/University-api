const jwt = require('jsonwebtoken')

const token = {
  async generateToken (data) {
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: 24 * 60 * 60 * 1000 }) // 1 day
    return token
  }
}

module.exports = token
