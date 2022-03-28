const userController = require('../controllers/userController')
const authorization = require('../middleware/authorization')
const { ADMIN, STUDENT } = require('../credentials').roles

const { Router } = require('express')

const userRouter = Router()

userRouter.route('/:id')
  .get(authorization(STUDENT), userController.readUserById)
  // .put(authorization(ADMIN), userController.updateUser)
  .delete(authorization(ADMIN), userController.deleteUser)

userRouter.get('/', authorization(STUDENT), userController.readUsers) // get an id via query parameters

module.exports = userRouter
