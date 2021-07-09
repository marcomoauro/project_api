const express = require('express')
const router = express.Router()
const controller = require('../controllers/job')

router.get('/', controller.getJobs)
router.put('/:id', controller.updateJob)

module.exports = router