const groupService = require('../services/groupService')

const groupController = {
  async addGroup (request, response) {
    const data = request.body
    await groupService.create(data)
    response.status(200).send('the new group has been added successfully')
  },

  async readGroups (request, response) {
    const data = request.query
    const groups = await groupService.read(data)
    response.status(200).json(groups)
  },

  async readGroupById (request, response) {
    const { id } = request.params
    const group = await groupService.readById(id)
    response.status(200).send(group)
  },

  async updateGroup (request, response) {
    const data = request.body
    const id = request.params.id
    const updatedNote = await groupService.updateAndReturn(id, data)
    response.status(201).json(updatedNote)
  },

  async deleteGroup (request, response) {
    const { id } = request.params
    const deletedNote = await groupService.deleteAndReturn(id)
    response.status(200).json(deletedNote)
  }
}

module.exports = groupController
