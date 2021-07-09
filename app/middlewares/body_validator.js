const { ajv } = require('../validations/validation')

const API_TO_SCHEMA = {
  'POST_/projects': 'create_project'
}

module.exports = (req, res, next) => {
  const validator = ajv.getSchema(API_TO_SCHEMA[`${req.method}_${req.url}`])
  const validation = validator(req.body)
  if (validation) {
    next()
  } else {
    res.status(400).json({ message: 'validationError' })
  }
}