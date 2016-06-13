const db = require('sequelize-context')
const Pusher = require('pusher')

const messageController = {
  handlePost (req, res) {
    db.models.message.create({
      text: req.body.text,
      channelName: req.params.channelName,
      userTwitterId: req.user.id
    }).then(message => {
      return db.models.message.findOne({
        include: [
          { model: db.models.user }
        ],
        where: {
          id: message.id
        }
      })
    }).then(message => {
      const pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_KEY,
        secret: process.env.PUSHER_SECRET
      })
      const btoa = (str) => new Buffer(str).toString('base64')
      pusher.trigger(btoa(req.params.channelName), 'new_message', message.dataValues)
      res.sendStatus(201)
    })
  },
  handleGet (req, res) {
    db.models.message.findRecent(100, req.params.channelName).then(messages => {
      res.json(messages)
    })
  }
}

module.exports = messageController
