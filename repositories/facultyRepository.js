const { facultyModel } = require('../models/index')

const facultyRepository = {
  async add (data) {
    return await facultyModel.create(data)
  },

  async read (data = {}) {
    const faculties = await facultyModel.findAll({ where: data }, { raw: true })
    const length = Object.keys(faculties).length
    return (length === 1) ? faculties[0] : length > 1 ? faculties : null
  },

  async update (id, changes) {
    return await facultyModel.update(changes, { where: { id } })
  },

  async delete (id) {
    await facultyModel.destroy({ where: { id } })
  }
}

module.exports = facultyRepository
