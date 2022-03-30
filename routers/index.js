const { Router } = require('express')

const authenticate = require('../middleware/authenticate')

const studentRouter = require('./userRouter')
const groupRouter = require('./groupRouter')
const facultyRouter = require('./facultyRouter')
const authRouter = require('./authRouter')

const notFound = require('../middleware/notFoundMiddleware')
const errorHandler = require('../middleware/errorHandlerMiddleware')

const homeRouter = Router()

homeRouter.use('/auth', authRouter)
homeRouter.use('/students', authenticate, studentRouter)
homeRouter.use('/groups', authenticate, groupRouter)
homeRouter.use('/faculties', authenticate, facultyRouter)

homeRouter.get('/', (request, response) => {
  response.send('home directory')
})

homeRouter.use(notFound)
homeRouter.use(errorHandler)

module.exports = homeRouter
