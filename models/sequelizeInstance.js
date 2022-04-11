const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_LOGIN, process.env.DB_PASSWORD, {
  logging: false,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false,
    underscored: true
  }
})

module.exports = sequelize
