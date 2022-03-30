const bcrypt = require('bcrypt')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const token = require('../utils/token')
const userRep = require('../repositories/userRepository')
const roleRep = require('../repositories/roleRepository')
const { roles } = require('../credentials')
const ApplicationError = require('../utils/ApplicationError')

const authService = {
  async singUp (data) {
    const { login } = data
    const candidate = await userRep.read({ login })

    if (Object.keys(candidate).length !== 0) throw new ApplicationError(ReasonPhrases.CONFLICT, StatusCodes.CONFLICT)

    const newUser = await userRep.add(data)
    const userRole = await roleRep.read({ name: roles.STUDENT })
    await userRep.addUserByRole(userRole, newUser)
  },

  async singIn (data) {
    const { login, password } = data
    const user = (await userRep.readOnlyOne({ login }))

    if (!user) throw new ApplicationError(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED)
    const isPassword = bcrypt.compareSync(password, user.password)

    if (!isPassword) throw new ApplicationError(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED)

    const roles = await roleRep.getRolesOfUser(user)
    return token.generateToken({ userId: user.id, roles })
  }
}

module.exports = authService
