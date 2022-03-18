const { roleModel } = require('../models/index')

const roleRepository = {
  async add (data) {
    return await roleModel.create(data)
  },

  async read (data = {}) {
    const roles = await roleModel.findAll({ where: data }, { raw: true })
    const length = Object.keys(roles).length
    return (length === 1) ? roles[0] : (length >= 2) ? roles : null
  },

  async delete (id) {
    await roleModel.destroy({ where: { id } })
  },

  async getRolesOfUser (user) {
    const allHimRoles = await user.getRoles({ raw: true })
    const roles = []
    for (const key in allHimRoles) {
      roles.push(allHimRoles[key].name)
    }
    return roles
  }
}

module.exports = roleRepository
