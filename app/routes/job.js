const express = require('express')
const router = express.Router()
const controller = require('../controllers/job')

router.get('/jobs', controller.getJobs)
router.put('/job/:id', controller.updateJob)

module.exports = router