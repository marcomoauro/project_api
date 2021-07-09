const controller = require('../controllers/project')

module.exports = (app) => {
  app.get('/projects', controller.projects)
}