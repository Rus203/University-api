const facultyController = require('../controllers/facultyController')

const { Router } = require('express')

const facultyRouter = Router()

facultyRouter.route('/:id')
  .get(facultyController.readFacultyById) // get faculties with filters
  .put(facultyController.updateFaculty)
  .delete(facultyController.deleteFaculty)

facultyRouter.route('/')
  .get(facultyController.readFaculties) // get an id via query parameters
  .post(facultyController.addFaculty)

module.exports = facultyRouter
