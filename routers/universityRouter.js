const facultyController = require('../controllers/facultyController')
const groupController = require('../controllers/groupController')
// const userController = require('../controllers/userController')

const { Router } = require('express')

const universityRouter = Router()

// the routing of faculties
universityRouter.route('/faculties/:facultyId?')
  .get(facultyController.readFaculties)
  .post(facultyController.addFaculty)
  .put(facultyController.updateFaculty)
  .delete(facultyController.deleteFaculty)

// the routing of groups
universityRouter.route('/faculties/:facultyId/groups/:groupId?')
  .get(groupController.readGroups)
  .post(groupController.addGroup)
  .put(groupController.updateGroup)
  // .delete(groupController.deleteGroup)

// the routing for users
// universityRouter.route('/:facultyId/groups/:groupId/students/(:studentsId)?')
//   .get(userController.readUsers)
// .put(userController.updateUser)
// .delete(userController.deleteUser)

module.exports = universityRouter
