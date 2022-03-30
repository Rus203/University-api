const { userModel } = require('../models/index')

const userRepository = {
  async add (data) {
    return await userModel.create(data)
  },

  async addUserByRole (role, newUser) {
    await role.addUser(newUser)
  },

  async read (data = {}) {
    return await userModel.findAll({ where: data })
  },

  async readOnlyOne (data) {
    return await userModel.findOne({ where: data })
  },

  async update (id, changes) {
    return await userModel.update(changes, { where: { id } })
  },

  async delete (id) {
    await userModel.destroy({ where: { id } })
  }
}

module.exports = userRepository
