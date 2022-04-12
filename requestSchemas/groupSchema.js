const Joi = require('Joi')

const base = Joi.object({
  name: Joi.string()
    .min(1)
    .max(30)
    .required(),

  facultyId: Joi.number()
    .positive()
    .integer()
    .optional()
}).options({ abortEarly: false })

const updating = base.keys({ name: Joi.string().optional() })

module.exports = { base, updating }
