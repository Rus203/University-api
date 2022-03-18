const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Faculty = sequelize.define('Faculty', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.STRING
    }
  })
  return Faculty
}
