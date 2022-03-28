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
    const allHisRoles = await user.getRoles({ raw: true })
    const roles = []
    for (const key in allHisRoles) {
      roles.push(allHisRoles[key].name)
    }
    return roles

    // const hisRole = await user.getRoles()
    // console.log(`his role - ${JSON.stringify(hisRole[0].name, null, 2)}`)
    // return hisRole
  }
}

module.exports = roleRepository
