const express = require('express')

const server = express()

server.get('/', (request, response) => {
  response.send('Server reply')
})

server.listen(3000, () => {
  console.log('server started')
})
