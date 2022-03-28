const facultyController = require('../controllers/facultyController')
const authorization = require('../middleware/authorization')
const { ADMIN, STUDENT } = require('../credentials').roles

const { Router } = require('express')

const facultyRouter = Router()

facultyRouter.route('/:id')
  .get(authorization(STUDENT), facultyController.readFacultyById) // get faculties with filters
  .put(authorization(ADMIN), facultyController.updateFaculty)
  .delete(authorization(ADMIN), facultyController.deleteFaculty)

facultyRouter.route('/')
  .get(authorization(STUDENT), facultyController.readFaculties) // get an id via query parameters
  .post(authorization(ADMIN), facultyController.addFaculty)

module.exports = facultyRouter
