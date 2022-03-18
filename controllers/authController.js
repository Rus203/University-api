const authService = require('../services/authService')

const authController = {
  async singUp (request, response) {
    const data = request.body
    await authService.singUp(data)
    response.status(201).send('the new user has been successfully registered ')
  },

  async singIn (request, response) {
    const data = request.body
    const token = await authService.singIn(data)
    response.status(200).send(token)
  }
}

module.exports = authController
