const facultyController = require('../controllers/facultyController')
const authorization = require('../middleware/authorization')
const { ADMIN, STUDENT } = require('../credentials').roles
const validation = require('../middleware/validation')
const { facultySchema } = require('../requestSchemas/index')
const { Router } = require('express')

const facultyRouter = Router()

facultyRouter.route('/:id')
  .get(authorization(STUDENT), facultyController.readFacultyById) // get faculties with filters
  .put(authorization(ADMIN), validation(facultySchema), facultyController.updateFaculty)
  .delete(authorization(ADMIN), facultyController.deleteFaculty)

facultyRouter.route('/')
  .get(authorization(STUDENT), facultyController.readFaculties) // get an id via query parameters
  .post(authorization(ADMIN), validation(facultySchema), facultyController.addFaculty)

module.exports = facultyRouter
