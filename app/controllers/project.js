const logger = require('../lib/logger')
const projectCreator = require('../services/project/creator')
const jobCreator = require('../services/job/creator')
const finder = require('../services/project/finder')

const createProject = async (request, response) => {
  try {
    const { title, jobs } = request.body

    logger.info(`Controllers::Project::createProject start`)

    const project = await projectCreator.createProject({ title })
    const jobsCreated = await Promise.all(jobs.map((job) => jobCreator.createJob(job, project.id) ))

    return response.status(200).json({ project, jobs: jobsCreated })
  } catch (error) {
    logger.error(`Controllers::Project::createProject error: ${error}`)
    return response.status(500).json({ error: error.message })
  }
}

const getProjectById = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    logger.info(`Controllers::Project::getProjectById start`)
    const project = await finder.getProjectById(id)
    if (!project) {
      return response.status(404).json({ message: `Project not found` })
    }

    return response.status(200).json(project)
  } catch (error) {
    logger.error(`Controllers::Project::getProjectById error: ${error}`)
    return response.status(500).json({ error: error.message })
  }
}

const getProjects = async (request, response) => {
  try {
    logger.info(`Controllers::Project::getProjects start`)
    const projects = await finder.getProjects()
    return response.status(200).json(projects)
  } catch (error) {
    logger.error(`Controllers::Project::getProjects error: ${error}`)
    return response.status(500).json({ error: error.message })
  }
}

module.exports = {
  createProject,
  getProjectById,
  getProjects
}