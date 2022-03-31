const groupService = require('../services/groupService')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const groupController = {
  async addGroup (request, response, next) {
    const data = request.body
    try {
      await groupService.create(data)
      response.status(StatusCodes.CREATED).json({ message: ReasonPhrases.CREATED })
    } catch (error) {
      next(error)
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
