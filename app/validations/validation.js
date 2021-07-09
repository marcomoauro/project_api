const Ajv = require('ajv')
const create_project = require('./create_project.json')
const ajv = exports.ajv = new Ajv()

ajv.addSchema(create_project, 'create_project')