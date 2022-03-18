const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Role = sequelize.define('Role', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  return Role
}
