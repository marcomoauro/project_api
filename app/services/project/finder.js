const db = require('../db')
const { getJobsByProjectId } = require('../job/finder')

const getProjects = async () => {
  const projectFindResult = await db.query(
    `SELECT id, title
     FROM projects`)

  return Promise.all(projectFindResult.map(async (project) => {
    project.jobs = await getJobsByProjectId(project.id)
    return project
  }))
}


const getProjectById = async (id) => {
  const projectFindResult = await db.query(
    `SELECT id, title
     FROM projects
     WHERE id=?`,
    [id])

  if (projectFindResult.length === 0) {
    return
  }
  const project = projectFindResult[0]

  project.jobs = await getJobsByProjectId(project.id)
  return project
}

module.exports = {
  getProjectById,
  getProjects
}