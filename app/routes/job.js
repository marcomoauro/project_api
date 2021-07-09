const controller = require('../controllers/job')

module.exports = (app) => {
  app.get('/jobs', controller.getJobs)
  app.put('/job/:id', controller.updateJob)
}