const authController = require('../controllers/authController')
const { Router } = require('express')
const validations = require('../middleware/validation')
const { userSchema } = require('../requestSchemas/index')

const authRouter = Router()

authRouter.post('/sing-up', validations(userSchema), authController.singUp)
authRouter.post('/sing-in', authController.singIn)

module.exports = authRouter
