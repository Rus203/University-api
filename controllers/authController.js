const authService = require('../services/authService')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')

const authController = {
  async singUp (request, response, next) {
    const data = request.body
    try {
      await authService.singUp(data)
      response.status(StatusCodes.CREATED).send('the new user has been successfully registered ')
    } catch {
      next(new ApplicationError('You wrote wrong data', StatusCodes.BAD_REQUEST))
    }
  },

  async singIn (request, response, next) {
    const data = request.body
    try {
      const token = await authService.singIn(data)
      response.status(StatusCodes.OK).send(token)
    } catch {
      next(new ApplicationError(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED))
    }
  }
}

module.exports = authController
