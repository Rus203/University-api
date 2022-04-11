const Joi = require('joi')

const base = Joi.object({
  name: Joi.string()
    .min(1)
    .max(30)
    .regex(/^[a-zA-Z ]+$/)
    .required(),

  phoneNumber: Joi.string()
    .min(10)
    .max(15)
    .optional()

}).options({ abortEarly: false })

const updating = base.keys({ name: Joi.string().optional() })

module.exports = { base, updating }
