const logger = require('../lib/logger')

const projects = async (request, response) => {
  try {
    logger.info(`Controllers::Project::project start`)
    return response.status(200).json({ message: 'OK from projects' })
  } catch (error) {
    logger.error(`Controllers::Project::project error: ${error}`)
    return response.status(500).json({ error: error.message })
  }
}

module.exports = {
  projects,
}