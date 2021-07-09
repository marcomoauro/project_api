const db = require('../db')

// next step can be to introduce pagination to avoid heavy requests to db
const getProjects = async () => {
  const result = await db.query(
    `SELECT projects.*, jobs.*, projects.id as p_id, jobs.id as j_id
     FROM projects
     LEFT JOIN jobs on projects.id=jobs.project_id`)

  const projects = {}

  for (const record of result) {
    if (!projects[record.p_id]) {
      projects[record.p_id] = {
        id: record.p_id,
        title: record.title,
        jobs: []
      }
    }

    if (!record.j_id) {
      continue
    }

    projects[record.p_id].jobs.push(
      {
        id: record.j_id,
        project_id: record.project_id,
        creationDate: record.creationDate,
        price: record.price,
        status: record.status
      }
    )

  }
  return Object.values(projects)
}

const getProjectById = async (id) => {
  const result = await db.query(
    `SELECT projects.*, jobs.*, projects.id as p_id, jobs.id as j_id
     FROM projects
     LEFT JOIN jobs on projects.id=jobs.project_id
     WHERE projects.id=?`,
    [id])

  if (result.length === 0) {
    return
  }

  const project = {
    id: result[0].p_id,
    title: result[0].title
  }

  project.jobs = []
  for (const { j_id, project_id, creationDate, price, status } of result) {
    if (!j_id) {
      continue
    }

    project.jobs.push(
      {
        id: j_id,
        project_id,
        creationDate,
        price,
        status
      }
    )

  }
  return project
}

module.exports = {
  getProjectById,
  getProjects
}