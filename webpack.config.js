const path = require('path')
const webpack = require('webpack')

const config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/main'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({ 'React': 'react' })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'app'),
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }, {
      test: /\.eot$/,
      loader: 'url?mimetype=application/vnd.ms-fontobject'
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url?mimetype=application/font-woff'
    }, {
      test: /\.ttf$/,
      loader: 'url?mimetype=application/octet-stream'
    }, {
      test: /\.svg$/,
      loader: 'url?mimetype=image/svg+xml'
    } ]
  },
  postcss () {
    return [require('postcss-nested'), require('postcss-simple-vars')]
  }
}

module.exports = config
