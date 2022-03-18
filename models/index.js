const userModel = require('./userModel')
const groupModel = require('./groupModel')
const facultyModel = require('./facultyModel')
const roleModel = require('./roleModel')
const userRoleModel = require('./userRoleModel')

const dbConfig = require('../configs/mySqlDb')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(dbConfig.name, dbConfig.login, dbConfig.password, {
  logging: false,
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
    underscored: true
  }
})

const database = {}

database.sequelize = sequelize
database.userModel = userModel(sequelize)
database.facultyModel = facultyModel(sequelize)
database.groupModel = groupModel(sequelize)
database.UserRoleModel = userRoleModel(sequelize)
database.roleModel = roleModel(sequelize)

database.facultyModel.hasMany(database.groupModel, {
  foreignKey: 'facultyId',
  sourceKey: 'id'
})
database.groupModel.belongsTo(database.facultyModel, {
  foreignKey: 'facultyId',
  targetKey: 'id'
})

database.groupModel.hasMany(database.userModel, {
  foreignKey: 'groupId',
  sourceKey: 'id'
})
database.userModel.belongsTo(database.groupModel, {
  foreignKey: 'groupId',
  targetKey: 'id'
})

database.userModel.belongsToMany(database.roleModel, { through: database.UserRoleModel })
database.roleModel.belongsToMany(database.userModel, { through: database.UserRoleModel })

module.exports = database
