const logger = require('../services/logger')
const updater = require('../services/job/updater')
const finder = require('../services/job/finder')

const updateJob = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    logger.info(`Controllers::Job::updateJob start`)
    const job = await updater.updateJob(id, request.body)

    return response.status(200).json(job)
  } catch (error) {
    logger.error(`Controllers::Job::updateJob error: ${error}`)
    return response.status(500).json({ error: error.message })
  }
}

const getJobs = async (request, response) => {
  try {
    const { status, sort_type } = request.query
    const filters = {}

    if (status) {
      filters.status = status
    }

    logger.info(`Controllers::Job::getJobs start`)
    const jobs = await finder.getJobs(filters, sort_type)
    return response.status(200).json(jobs)
  } catch (error) {
    logger.error(`Controllers::Job::getJobs error: ${error}`)
    return response.status(500).json({ error: error.message })
  }
}

module.exports = {
  updateJob,
  getJobs
}