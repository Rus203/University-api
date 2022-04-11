const { initRoles } = require('../services/roleService')
const { sequelize } = require('../models/index')
const colors = require('colors')

sequelize.sync({ alter: true })
  .then(data => {
    console.log('All models were synchronized successfully.')
    initRoles()
  }, error => console.log(colors.red(error)))
