const express = require('express')
const router = express.Router()
const controller = require('../controllers/project')
const bodyValidatorMiddleware = require('../middlewares/body_validator')

router.post('/projects', bodyValidatorMiddleware, controller.createProject)
router.get('/projects/:id', controller.getProjectById)
router.get('/projects', controller.getProjects)

module.exports = router
