const accountController = {
  logout (req, res) {
    req.logout()
    res.redirect('/')
  }
}

module.exports = accountController
