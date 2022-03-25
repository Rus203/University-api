const groupRep = require('../repositories/groupRepository')

const groupService = {
  async create (data) {
    await groupRep.add(data)
  },

  async read (data) {
    return await groupRep.read(data)
  },

  async readById (id) {
    return await groupRep.readOnlyOne({ id })
  },

  async updateAndReturn (id, changes) {
    await groupRep.update(id, changes)
    return await groupRep.readOnlyOne({ id })
  },

  async deleteAndReturn (id) {
    const deletedNote = await groupRep.readOnlyOne({ id })
    await groupRep.delete(id)
    return deletedNote
  }
}

module.exports = groupService
