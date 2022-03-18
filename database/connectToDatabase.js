const { initRoles } = require('../services/roleService')
const { sequelize } = require('../models/index')

module.exports = async () => {
  sequelize.sync({ alter: true })
    .then(data => {
      console.log('All models were synchronized successfully.')
      initRoles()
    })
}
