const authController = require('../controllers/authController')

const { Router } = require('express')

const authRouter = Router()

authRouter.post('/sing-up', authController.singUp)
authRouter.post('/sing-in', authController.singIn)

module.exports = authRouter
