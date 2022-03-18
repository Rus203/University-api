const facultyRep = require('../repositories/facultyRepository')

const facultyService = {
  async create (data) {
    await facultyRep.add(data)
  },

  async read (data) {
    return await facultyRep.read(data)
  },

  async update (id, changes) {
    return await facultyRep.update(id, changes)
  },

  async delete (id) {
    await facultyRep.delete(id)
  }
}

module.exports = facultyService
