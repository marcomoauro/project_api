const logger = require('../logger')
const db = require('../db')

const createJob = async (job, projectId) => {
  logger.info(`Job::Creator::createJob job: ${JSON.stringify(job)}, project_id: ${projectId}`)
  const result = await db.query(
    `INSERT INTO jobs(creationDate, price, status, project_id)
     VALUES (?, ?, ?, ?)`,
    [job.creationDate, job.price, job.status, projectId]
  )

  job.id = result.insertId
  job.project_id = projectId

  return job
}

module.exports = {
  createJob
}