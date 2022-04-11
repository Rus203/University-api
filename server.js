require('dotenv').config()
require('./database/connectToDatabase')

const express = require('express')
const passport = require('./utils/passport')
const loader = require('./routers/index')

const server = express()
server.use(express.json())
server.use(passport.initialize())

server.use(loader)

server.listen(process.env.PORT, () => {
  console.log(`server started on the ${process.env.PORT}`)
})
