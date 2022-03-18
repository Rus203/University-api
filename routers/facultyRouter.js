const facultyController = require('../controllers/facultyController')

const { Router } = require('express')

const facultyRouter = Router()

facultyRouter.route('/:id')
  .put(facultyController.updateFaculty)
  .delete(facultyController.deleteFaculty)

facultyRouter.route('/')
  .get(facultyController.readFaculties) // get an id via query parameters
  .post(facultyController.addFaculty)

module.exports = facultyRouter
