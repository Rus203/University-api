const { groupModel, facultyModel, userModel } = require('../models/index')

const facultyRepository = {
  async add (data) {
    return await facultyModel.create(data)
  },

  async read (data = {}) {
    return await facultyModel.findAll({
      where: data,
      include: {
        model: groupModel,
        attributes: { exclude: ['facultyId'] },
        include: {
          model: userModel,
          attributes: { exclude: ['groupId'] }
        }
      }
    })
  },

  async readOnlyOne (data) {
    return await facultyModel.findOne({
      where: data,
      include: {
        model: groupModel,
        attributes: { exclude: ['facultyId'] },
        include: {
          model: userModel,
          attributes: { exclude: ['groupId'] }
        }
      }
    })
  },

  async update (id, changes) {
    return await facultyModel.update(changes, { where: { id } })
  },

  async delete (id) {
    await facultyModel.destroy({ where: { id } })
  }
}

module.exports = facultyRepository
