var path = require('path'); //node自带的path模块
var config = {
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
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