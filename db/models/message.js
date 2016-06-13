const db = require('sequelize-context')

module.exports = function createChatMessageModel (context) {
  const {connection, Sequelize} = context
  const message = connection.define('message', {
    text: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate (models) {
        message.belongsTo(models.user)
        message.belongsTo(models.channel)
      },
      findRecent (howMany, channelName) {
        return db.models.message.findAll({
          include: [
            { model: db.models.user }
          ],
          where: {
            channelName
          },
          order: [['createdAt', 'ASC']],
          limit: howMany
        })
      }
    }
  })
  return message
}
