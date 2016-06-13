module.exports = function createChannelModel (context) {
  const {connection, Sequelize} = context
  const channel = connection.define('channel', {
    name: {
      type: Sequelize.STRING(100),
      primaryKey: true
    }
  }, {
    classMethods: {
      associate (models) {
        channel.hasMany(models.message)
      }
    }
  })
  return channel
}
