require('dotenv').config()
const db = require('sequelize-context')
const dbSeeder = require('./db/seeder')
const app = require('./app')

db
  .connect(
    './db/models/*.js',
    process.env.DB_SCHEMA,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
      force: true
    })
  .then(dbSeeder.seedChannels)
  .then(() => {
    const port = 3000
    app.listen(port, () => console.log(`Server listening on port ${port} in dev mode`))
  })
  .catch(err => console.log(`Something went wrong whrn connecting: ${err}`))
