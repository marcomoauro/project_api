const Ajv = require('ajv')
const create_project = require('./create_project.json')
const update_job = require('./update_job.json')
const ajv = exports.ajv = new Ajv()

ajv.addSchema(create_project, 'create_project')
ajv.addSchema(update_job, 'update_job')