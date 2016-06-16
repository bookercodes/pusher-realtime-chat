const db = require('sequelize-context')

module.exports = {
  seedChannels: function () {
    return db.models.channel.bulkCreate([
      { name: 'General Chat' },
      { name: 'React Europe' },
      { name: 'JavaScript' },
      { name: 'Pusher' },
      { name: 'Cheese' },
      { name: 'Something' },
      { name: 'Long' },
      { name: 'Foo' },
      { name: 'Bar' },
      { name: 'Baz' },
      { name: 'Charlie' },
      { name: 'Fred' },
      { name: 'Wibble' },
      { name: 'Wobble' },
      { name: 'Watch' },
      { name: 'This' }
    ], {
      // When `seedChannels` is called without `force:true` being set, we don't
      // want an error
      ignoreDuplicates: true
    })
  }
}
