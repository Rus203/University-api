const userRep = require('../repositories/userRepository')

const usersService = {
  async create (data) {
    await userRep.add(data)
  },

  async read (data) {
    return await userRep.read(data)
  },

  async update (id, changes) {
    return await userRep.update(id, changes)
  },

  async delete (id) {
    await userRep.delete(id)
  }
}

module.exports = usersService
