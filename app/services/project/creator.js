const db = require('../db')

const createProject = async (project) => {
  const result = await db.query(
    `INSERT INTO projects(title)
     VALUES (?)`,
    [project.title]
  )

  project.id = result.insertId
  return project
}

module.exports = {
  createProject
}