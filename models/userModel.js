const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      is: /^[0-9a-f]{64}$/i // maybe, I'll change this regex for bcrypt
    }
  }, {
    hooks: {
      beforeCreate: (User) => {
        User.password = bcrypt.hashSync(User.password, 12)
      }
    }
  })

  return User
}
