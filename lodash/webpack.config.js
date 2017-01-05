var path = require('path'); //node自带的path模块
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({
      template: 'test.html', // 源模板文件
      filename: 'test.html',
      inject: true
    }
  )],
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