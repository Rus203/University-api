const facultyService = require('../services/facultyService')

const facultyController = {
  async addFaculty (request, response) {
    const data = request.body
    await facultyService.create(data)
    response.status(200).send('the new faculty has been added successfully')
  },

  async readFaculties (request, response) {
    const data = request.query
    const bands = await facultyService.read(data)
    response.status(200).json(bands)
  },

  async updateFaculty (request, response) {
    const data = request.body
    const id = request.params.id
    await facultyService.update(id, data)
    response.status(201).json('the current faculty has been updated')
  },

  async deleteFaculty (request, response) {
    const { id } = request.params
    await facultyService.delete(id)
    response.status(200).json('the current faculty has been deleted')
  }
}

module.exports = facultyController
