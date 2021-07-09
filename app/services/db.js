const mysql = require('mysql2/promise')
const config = require('../config/db')

let connection

const query = async (sql, params) => {
  await getConnection()
  const [results, ] = await connection.execute(sql, params)

  return results
}

const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection(config)
  }

  return connection
}

module.exports = {
  query
}