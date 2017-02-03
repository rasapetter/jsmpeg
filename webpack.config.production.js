var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'jsmpeg.min.js',
    publicPath: '/',
    library: 'JSMpeg'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
