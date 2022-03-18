const userController = require('../controllers/userController')

const { Router } = require('express')

const userRouter = Router()

userRouter.route('/:id')
  .put(userController.updateUser)
  .delete(userController.deleteUser)

userRouter.get('/', userController.readUsers) // get an id via query parameters

module.exports = userRouter
