const groupRep = require('../repositories/groupRepository')

const groupService = {
  async create (data) {
    await groupRep.add(data)
  },

  async read (data) {
    return await groupRep.read(data)
  },

  async update (id, changes) {
    return await groupRep.update(id, changes)
  },

  async delete (id) {
    await groupRep.delete(id)
  }
}

module.exports = groupService
