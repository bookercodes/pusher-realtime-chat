const { accountController, messageController } = require('./controllers')
const bodyParser = require('body-parser')
const ensureLoggedIn = require('./middleware/ensureLoggedIn')
const express = require('express')
const flash = require('express-flash')
const hydrateTemplate = require('./middleware/hydrateTemplate')
const initPassport = require('./authentication/initPassport')
const initWebpack = require('./initWebpack')
const nunjucks = require('nunjucks')
const passport = require('passport')
const session = require('express-session')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
})
initPassport(passport)
initWebpack(app)

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(flash())
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(hydrateTemplate)

app.get('/', (req, res) => res.render('home.html'))
app.get('/login/twitter', passport.authenticate('twitter'))
app.get('/login/twitter/return', passport.authenticate('twitter', {
  successRedirect: '/',
  successFlash: 'Welcome',
  failureRedirect: '/',
  failureFlash: 'Whops'
}))
app.get('/logout', accountController.logout)
app.post('/api/channel/:channelName/message', ensureLoggedIn, messageController.handlePost)
app.get('/api/channel/:channelName/message', messageController.handleGet)

module.exports = app
