const express = require('express')

const connectToDatabase = require('./database/connectToDatabase')
const loader = require('./loader/loader')

const PORT = process.env.PORT || 3000

const server = express()

connectToDatabase()

server.use(loader)

server.listen(PORT, () => {
  console.log(`server started on the ${PORT}`)
})
