const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const UserRole = sequelize.define('UserRole', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }
  }, {
    tableName: 'users_roles'
  })
  return UserRole
}
