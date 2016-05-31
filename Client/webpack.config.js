var path = require('path');
var webpack = require('webpack');

/*
https://www.dzejes.cz/prvni-dev-stack.html
*/
 
module.exports = {
  entry: './src/app.js',
  output: { 
      path: __dirname + '/build',
      publicPath: "/assets/", 
      filename: 'bundle.js'
    },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};