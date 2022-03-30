const express = require('express')
const passport = require('./utils/passport')

const connectToDatabase = require('./database/connectToDatabase')
const loader = require('./routers/index')

const PORT = process.env.PORT || 3000

const server = express()

connectToDatabase()

server.use(express.json())
server.use(passport.initialize())

server.use(loader)

server.listen(PORT, () => {
  console.log(`server started on the ${PORT}`)
})
