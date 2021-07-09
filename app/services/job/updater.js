const logger = require('../logger')
const db = require('../db')

const updateJob = async (id, params) => {
  logger.info(`Job::Updater::updateJob id: ${id}, params: ${JSON.stringify(params)}`)
  const [updateQuery, paramsValues] = buildQuery(id, params)
  await db.query(updateQuery, paramsValues)
  const findResults = await db.query(
    `SELECT id, project_id, creationDate, price, status
     FROM jobs
     WHERE id=?`,
    [id])
  return findResults[0]
}

const buildQuery = (id, params) => {
  let query = 'UPDATE jobs SET '
  let keys = []
  const paramsValues = []
  for (const [key, value] of Object.entries(params)) {
    keys.push(`${key}=?`)
    paramsValues.push(value)
  }
  query += keys.join(', ')
  paramsValues.push(id)
  query += ' WHERE id=?'
  return [query, paramsValues]
}

module.exports = {
  updateJob
}