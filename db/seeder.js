const db = require('sequelize-context')

module.exports = {
  seedChannels: function () {
    return db.models.channel.bulkCreate([
      { name: 'General Chat' },
      { name: 'React Europe' },
      { name: 'JavaScript' },
      { name: 'Pusher' }
    ], {
      // When `seedChannels` is called without `force:true` being set, we don't
      // want an error
      ignoreDuplicates: true
    })
  }
}
