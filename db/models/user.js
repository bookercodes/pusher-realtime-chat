const db = require('sequelize-context')

module.exports = function createUserModel (context) {
  const {connection, Sequelize} = context
  const user = connection.define('user', {
    twitterId: {
      type: Sequelize.STRING(50),
      primaryKey: true
    },
    username: Sequelize.STRING,
    displayName: Sequelize.STRING,
    avatarUrl: Sequelize.STRING
  }, {
    classMethods: {
      associate (models) {
        user.hasMany(models.message)
      },
      createIfNotExists (user) {
        return db.models.user.findOrCreate({
          where: {
            twitterId: user.twitterId
          },
          defaults: {
            username: user.username,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl
          }
        })
      }
    }
  })
  return user
}
