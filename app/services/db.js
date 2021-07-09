const mysql = require('mysql2/promise')
const config = require('../config/db')

let pool

const query = async (sql, params) => {
  await getConnectionPool()
  const [results, ] = await pool.query(sql, params)
  return results
}

const getConnectionPool = async () => {
  if (!pool) {
    pool = await mysql.createPool(config)
  }

  return pool
}

module.exports = {
  query
}