const controller = require('../controllers/project')

module.exports = (app) => {
  app.post('/projects', controller.createProject)
  app.get('/projects/:id', controller.getProjectById)
  app.get('/projects', controller.getProjects)
}