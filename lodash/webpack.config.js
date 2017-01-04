var path = require('path'); //node自带的path模块
var config = {
  entry: path.join(__dirname, 'dist', 'main'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config