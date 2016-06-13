const db = require('sequelize-context')

module.exports = function (req, res, next) {
  let user = {
    isAuthenticated: req.isAuthenticated()
  }
  if (user.isAuthenticated) {
    user = Object.assign(user, {
      id: req.user.id,
      username: req.user.username,
      displayName: req.user.displayName,
      photo: req.user.photos[0].value
    })
  }
  db
    .models
    .channel
    .findAll()
    .then(channels => {
      res.locals.context = {
        channels: channels.map(channel => channel.dataValues.name),
        user
      }
      next()
    })
}
