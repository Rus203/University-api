const { groupModel, userModel } = require('../models/index')

const groupRepository = {
  async add (data) {
    return await groupModel.create(data)
  },

  async read (data = {}) {
    return await groupModel.findAll({
      where: data,
      include: {
        model: userModel,
        attributes: { exclude: ['userId'] }
      }
    })
  },

  async readOnlyOne (data) {
    return await groupModel.findOne({
      where: data,
      include: {
        model: userModel,
        attributes: { exclude: ['userId'] }
      }
    })
  },

  async update (id, changes) {
    return await groupModel.update(changes, { where: { id } })
  },

  async delete (id) {
    await groupModel.destroy({ where: { id } })
  }
}

module.exports = groupRepository
