const userService = require('../services/userService')
const { StatusCodes } = require('http-status-codes')

const userController = {
  async readUsers (request, response) {
    const data = request.query
    const students = await userService.read(data)
    response.status(StatusCodes.OK).json(students)
  },

  async readUserById (request, response) {
    const { id } = request.params
    const user = await userService.readById(id)
    response.status(StatusCodes.OK).json(user)
  },

  async updateUser (request, response) {
    const data = request.body
    const id = request.params.id
    const updatedNote = await userService.updateAndReturn(id, data)
    response.status(StatusCodes.OK).json(updatedNote)
  },

  async deleteUser (request, response) {
    const { id } = request.params
    const deletedNote = await userService.deleteAndReturn(id)
    response.status(StatusCodes.OK).json(deletedNote)
  }
}

module.exports = userController
