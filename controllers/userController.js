const userService = require('../services/userService')

const userController = {
  async readUsers (request, response) {
    const data = request.query
    const students = await userService.read(data)
    response.status(200).json(students)
  },

  async updateUser (request, response) {
    const data = request.body
    const id = request.params.id
    await userService.update(id, data)
    response.status(201).json('the current user has been updated')
  },

  async deleteUser (request, response) {
    const { id } = request.params
    await userService.delete(id)
    response.status(200).json('the current user has been deleted')
  }
}

module.exports = userController
