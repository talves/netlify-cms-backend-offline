/**
 * webpack.config.js
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'offline-backend': './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [/node_modules/],
        loader: 'svg-inline-loader',
      }
    ]
  },
  plugins: [
    // Minify and optimize the JavaScript
    new uglifyWebpackPlugin({
      test: /\.js($|\?)/i
    }),
  ]
}