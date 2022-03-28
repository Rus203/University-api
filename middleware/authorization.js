module.exports = (role) => { // role = admin/student
  return (request, response, next) => {
    if (!request.user.roles.includes(role)) {
      next(new Error('Not enough permission'))
    } else next()
  }
}
