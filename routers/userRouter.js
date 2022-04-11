const userController = require('../controllers/userController')
const authorization = require('../middleware/authorization')
const { ADMIN, STUDENT } = require('../credentials').roles
const { Router } = require('express')
const validation = require('../middleware/validation')
const { userSchema } = require('../requestSchemas/index')

const userRouter = Router()

userRouter.route('/:id')
  .get(authorization(STUDENT), userController.readUserById)
  .put(authorization(ADMIN), validation(userSchema), userController.updateUser) // change "STUDENT" to "ADMIN"
  .delete(authorization(ADMIN), userController.deleteUser)

userRouter.get('/', authorization(STUDENT), userController.readUsers) // get an id via query parameters

module.exports = userRouter
