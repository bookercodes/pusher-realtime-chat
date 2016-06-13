module.exports = function ensureLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(400).json({
      error: 'You need to be logged in to do that'
    })
  }
}
