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

  async updateGroup (request, response) {
    const data = request.body
    const id = request.params.id
    await groupService.update(id, data)
    response.status(201).json('the current group has been updated')
  },

  async deleteGroup (request, response) {
    const { id } = request.params
    await groupService.delete(id)
    response.status(200).json('the current group has been deleted')
  }
}

module.exports = groupController
