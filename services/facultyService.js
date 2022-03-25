const facultyRep = require('../repositories/facultyRepository')

const facultyService = {
  async create (data) {
    facultyRep.add(data)
  },

  async read (data) {
    return await facultyRep.read(data)
  },

  async readById (facultyId) {
    return await facultyRep.readOnlyOne({ id: facultyId })
  },

  async updateAndReturn (id, changes) {
    await facultyRep.update(id, changes)
    return facultyRep.readById(id) // and also it
  },

  async deleteAndReturn (id) {
    const deletedNote = await facultyRep.readById(id)
    facultyRep.delete(id) // and also it
    return deletedNote
  }
}

module.exports = facultyService
