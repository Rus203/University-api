const { userModel } = require('../models/index')

const userRepository = {
  async add (data) {
    return await userModel.create(data)
  },

  async addUserByRole (role, newUser) {
    await role.addUser(newUser)
  },

  async read (data = {}) {
    const users = await userModel.findAll({ where: data }, { raw: true })
    const length = Object.keys(users).length
    return (length === 1) ? users[0] : (length > 1) ? users : null
  },

  async update (id, changes) {
    return await userModel.update(changes, { where: { id } })
  },

  async delete (id) {
    await userModel.destroy({ where: { id } })
  }
}

module.exports = userRepository
