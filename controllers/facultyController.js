const facultyService = require('../services/facultyService')

const facultyController = {
  async addFaculty (request, response) {
    const data = request.body
    await facultyService.create(data)
    response.status(200).send({ message: 'the faculty has been added successfully' })
  },

  async readFaculties (request, response) {
    const data = request.query
    const faculties = await facultyService.read(data)
    response.status(200).json(faculties)
  },

  async readFacultyById (request, response) {
    const { id } = request.params
    const faculty = await facultyService.readById(id)
    response.status(200).json(faculty)
  },

  async updateFaculty (request, response) {
    const { name, phoneNumber } = request.body
    const id = request.params.id
    const updatedNote = await facultyService.updateAndReturn(id, { name, phoneNumber })
    response.status(201).json(updatedNote)
  },

  async deleteFaculty (request, response) {
    const { id } = request.params
    const deletedNote = await facultyService.deleteAndReturn(id)
    response.status(201).json(deletedNote)
  }
}

module.exports = facultyController
