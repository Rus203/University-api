const { groupModel } = require('../models/index')

const groupRepository = {
  async add (data) {
    return await groupModel.create(data)
  },

  async read (data = {}) {
    const groups = await groupModel.findAll({ where: data }, { raw: true })
    const length = Object.keys(groups).length
    return (length === 1) ? groups[0] : (length > 1) ? groups : null
  },

  async update (id, changes) {
    return await groupModel.update(changes, { where: { id } })
  },

  async delete (id) {
    await groupModel.destroy({ where: { id } })
  }
}

module.exports = groupRepository
