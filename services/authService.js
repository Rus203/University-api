const bcrypt = require('bcrypt')
const colors = require('colors')

const token = require('../utils/token')
const userRep = require('../repositories/userRepository')
const roleRep = require('../repositories/roleRepository')
const { roles } = require('../credentials')

const authService = {
  async singUp (data) {
    const { login } = data
    const candidate = await userRep.read({ login })
    console.log(colors.america(JSON.stringify(candidate, null, 2)))
    if (Object.keys(candidate).length !== 0) throw new Error(`login ${login} is already exists`)

    const newUser = await userRep.add(data)
    const userRole = await roleRep.read({ name: roles.STUDENT })
    await userRep.addUserByRole(userRole, newUser)
  },

  async singIn (data) {
    const { login, password } = data
    const user = (await userRep.readOnlyOne({ login }))

    if (!user) throw new Error('Incorrect login')
    const isPassword = bcrypt.compareSync(password, user.password)

    if (!isPassword) throw new Error(colors.red('Incorrect password'))

    const roles = await roleRep.getRolesOfUser(user)
    return token.generateToken({ userId: user.id, roles })
  }
}

module.exports = authService
