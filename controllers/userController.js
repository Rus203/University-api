const userService = require('../services/userService')

const userController = {
  async readUsers (request, response) {
    const data = request.query
    const students = await userService.read(data)
    response.status(200).json(students)
  },

  async readUserById (request, response) {
    const { id } = request.params
    const user = await userService.readById(id)
    response.status(200).json(user)
  },

  async updateUser (request, response) {
    const data = request.body
    const id = request.params.id
    const updatedNote = await userService.updateAndReturn(id, data)
    response.status(201).json(updatedNote)
  },

  async deleteUser (request, response) {
    const { id } = request.params
    const deletedNote = await userService.deleteAndReturn(id)
    response.status(200).json(deletedNote)
  }
}

module.exports = userController
