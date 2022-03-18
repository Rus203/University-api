const roleRep = require('../repositories/roleRepository')
const { roles } = require('../credentials')

const roleService = {
  async create () {
    await roleRep.add(roles.DEFAULT)
  },

  async read (data) {
    return await roleRep.read(data)
  },

  async delete (id) {
    await roleRep.delete(id)
  },

  async initRoles () {
    for (const key in roles) {
      const has = await roleRep.read({ name: roles[key] })
      if (!has && key !== 'DEFAULT') await roleRep.add({ name: roles[key] })
    }
  }
}

module.exports = roleService
