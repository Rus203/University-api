const groupService = require('../services/groupService')
const { StatusCodes } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')

const groupController = {
  async addGroup (request, response, next) {
    const data = request.body
    try {
      await groupService.create(data)
      response.status(StatusCodes.CREATED).send('the new group has been added successfully')
    } catch {
      next(new ApplicationError('You wrote wrong data', StatusCodes.BAD_REQUEST))
    }
  },

  async readGroups (request, response) {
    const data = request.query
    const groups = await groupService.read(data)
    response.status(StatusCodes.OK).json(groups)
  },

  async readGroupById (request, response) {
    const { id } = request.params
    const group = await groupService.readById(id)
    response.status(StatusCodes.OK).send(group)
  },

  async updateGroup (request, response) {
    const data = request.body
    const id = request.params.id
    const updatedNote = await groupService.updateAndReturn(id, data)
    response.status(StatusCodes.OK).json(updatedNote)
  },

  async deleteGroup (request, response) {
    const { id } = request.params
    const deletedNote = await groupService.deleteAndReturn(id)
    response.status(StatusCodes.OK).json(deletedNote)
  }
}

module.exports = groupController
