const userRep = require('../repositories/userRepository')

const usersService = {
  async create (data) {
    await userRep.add(data)
  },

  async read (data) {
    return await userRep.read(data)
  },

  async readById (userId) {
    return await userRep.readOnlyOne({ id: userId })
  },

  async updateAndReturn (id, changes) {
    await userRep.update(id, changes)
    return await userRep.readOnlyOne({ id })
  },

  async deleteAndReturn (id) {
    const deletedNote = await userRep.readOnlyOne({ id })
    userRep.delete(id)
    return deletedNote
  }
}

module.exports = usersService
