const db = require('sequelize-context')
const TwitterStrategy = require('passport-twitter').Strategy

module.exports = function initPassport (passport) {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK_URL
  }, (token, tokenSecret, user, done) => {
    // TODO: Update user if, for example, the `avatarUrl` or `displayName` have changed
    db
      .models
      .user
      .createIfNotExists({
        twitterId: user.id,
        username: user.username,
        displayName: user.displayName,
        // TODO: Might `user.photos` or `user.photos[0]` not exist?
        avatarUrl: user.photos[0].value
      })
      .then(() => done(null, user))
  }))
  passport.serializeUser((twitterUserData, done) => done(null, twitterUserData))
  passport.deserializeUser((twitterUserData, done) => done(null, twitterUserData))
}
