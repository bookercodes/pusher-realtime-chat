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
      loaders: ['style', 'css']
    }]
  }
}

module.exports = config
