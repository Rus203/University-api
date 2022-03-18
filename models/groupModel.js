const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Group = sequelize.define('Group', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  return Group
}
