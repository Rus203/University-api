const authService = require('../services/authService')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const authController = {
  async singUp (request, response, next) {
    const data = request.body
    try {
      await authService.singUp(data)
      response.status(StatusCodes.CREATED).json({ message: ReasonPhrases.CREATED })
    } catch (error) {
      next(error)
    }
  },

  async singIn (request, response, next) {
    const data = request.body
    try {
      const token = await authService.singIn(data)
      response.status(StatusCodes.OK).send(token)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = authController
