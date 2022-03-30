const facultyService = require('../services/facultyService')
const ApplicationError = require('../utils/ApplicationError')
const { StatusCodes } = require('http-status-codes')

const facultyController = {
  async addFaculty (request, response, next) {
    const data = request.body
    try {
      await facultyService.create(data)
      response.status(StatusCodes.CREATED).send({ message: 'the faculty has been added successfully' })
    } catch {
      next(new ApplicationError('You wrote wrong data', StatusCodes.BAD_REQUEST))
    }
  },

  async readFaculties (request, response) {
    const data = request.query
    const faculties = await facultyService.read(data)
    response.status(StatusCodes.OK).json(faculties)
  },

  async readFacultyById (request, response) {
    const { id } = request.params
    const faculty = await facultyService.readById(id)
    response.status(StatusCodes.OK).json(faculty)
  },

  async updateFaculty (request, response) {
    const { name, phoneNumber } = request.body
    const id = request.params.id
    const updatedNote = await facultyService.updateAndReturn(id, { name, phoneNumber })
    response.status(StatusCodes.OK).json(updatedNote)
  },

  async deleteFaculty (request, response) {
    const { id } = request.params
    const deletedNote = await facultyService.deleteAndReturn(id)
    response.status(StatusCodes.OK).json(deletedNote)
  }
}

module.exports = facultyController
