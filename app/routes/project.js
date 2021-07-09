const controller = require('../controllers/project')
const bodyValidatorMiddleware = require('../middlewares/body_validator')

module.exports = (app) => {
  app.post('/projects', bodyValidatorMiddleware, controller.createProject)
  app.get('/projects/:id', controller.getProjectById)
  app.get('/projects', controller.getProjects)
}