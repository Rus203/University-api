const groupController = require('../controllers/groupController')
const authorization = require('../middleware/authorization')
const { ADMIN, STUDENT } = require('../credentials').roles

const { Router } = require('express')

const groupRouter = Router()

groupRouter.route('/:id')
  .get(authorization(STUDENT), groupController.readGroupById)
  .put(authorization(ADMIN), groupController.updateGroup)
  .delete(authorization(ADMIN), groupController.deleteGroup)

groupRouter.route('/')
  .get(authorization(STUDENT), groupController.readGroups) // get an id via query parameters
  .post(authorization(ADMIN), groupController.addGroup)

module.exports = groupRouter
