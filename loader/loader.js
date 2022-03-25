const { Router, json } = require('express')

const passport = require('../middleware/passport')
const authenticate = passport.authenticate('jwt', { session: false })

const studentRouter = require('../routers/userRouter')
const groupRouter = require('../routers/groupRouter')
const facultyRouter = require('../routers/facultyRouter')
const authRouter = require('../routers/authRouter')

const homeRouter = Router()

homeRouter.use(json())
homeRouter.use(passport.initialize())

homeRouter.use('/auth', authenticate, authRouter)
homeRouter.use('/students', authenticate, studentRouter)
homeRouter.use('/groups', authenticate, groupRouter)
homeRouter.use('/faculties', authenticate, facultyRouter)

homeRouter.get('/', (request, response) => {
  response.send('home directory')
})

homeRouter.use((request, response, next) => {
  response.status(404).send('not found')
})

homeRouter.use((error, request, response, next) => {
  if (error) response.status(500).send('Server error')
})

module.exports = homeRouter
