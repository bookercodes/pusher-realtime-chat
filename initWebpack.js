const config = require('./webpack.config')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function initWebpack (app) {
  // TODO: Do not use webpackDevMiddleware in production!
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true
  }))
  app.use(webpackHotMiddleware(compiler))
}
