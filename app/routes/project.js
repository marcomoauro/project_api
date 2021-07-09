const express = require('express')
const router = express.Router()
const controller = require('../controllers/project')
const bodyValidatorMiddleware = require('../middlewares/body_validator')

router.post('/', bodyValidatorMiddleware, controller.createProject)
router.get('/', controller.getProjects)
router.get('/:id', controller.getProjectById)

module.exports = router
