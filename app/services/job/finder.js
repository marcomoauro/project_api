const db = require('../db')

const getJobsByProjectId = async (projectId) => {
  return db.query(
    `SELECT id, project_id, creationDate, price, status
     FROM jobs
     WHERE project_id=?`,
    [projectId])
}

// next step can be to introduce pagination to avoid heavy requests to db
const getJobs = async (filters, sort_type) => {
  const [getJobsQuery, paramsValues] = buildGetJobsQuery(filters, sort_type)
  return db.query(getJobsQuery, paramsValues)
}

const buildGetJobsQuery = (filters, sort_type) => {
  let query = `SELECT id, project_id, creationDate, price, status FROM jobs`
  let keys = []
  const paramsValues = []
  for (const [key, value] of Object.entries(filters)) {
    keys.push(`${key}=?`)
    paramsValues.push(value)
  }
  if (keys.length !== 0) {
    query += ' WHERE '
    query += keys.join('AND')
  }
  if (sort_type) {
    query += ` ORDER BY creationDate ${sort_type}`
  }
  return [query, paramsValues]
}

module.exports = {
  getJobsByProjectId,
  getJobs
}