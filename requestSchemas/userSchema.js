const Joi = require('joi')

const base = Joi.object().keys({
  name: Joi.string()
    .min(1)
    .max(30)
    .regex(/^[a-zA-Z ]+$/)
    .required(),

  phoneNumber: Joi.string()
    .min(10)
    .max(15)
    .optional(),

  surname: Joi.string()
    .min(2)
    .max(30)
    .regex(/^[a-zA-Z ]+$/)
    .required(),

  login: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),

  password: Joi.string()
    .min(8)
    .max(64)
    .regex(/^[0-9a-f]+$/)
    .required(),

  groupId: Joi.number()
    .positive()
    .integer()
    .optional()

}).options({ abortEarly: false })

const updating = base.keys({
  name: Joi.string().optional(),
  surname: Joi.string().optional(),
  login: Joi.string().optional(),
  password: Joi.string().optional()
})

module.exports = { base, updating }
