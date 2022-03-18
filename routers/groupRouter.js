const groupController = require('../controllers/groupController')

const { Router } = require('express')

const groupRouter = Router()

groupRouter.route('/:id')
  .put(groupController.updateGroup)
  .delete(groupController.deleteGroup)

groupRouter.route('/')
  .get(groupController.readGroups) // get an id via query parameters
  .post(groupController.addGroup)

module.exports = groupRouter
