var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: __dirname + "/app",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'signup.template.ejs',
      inject: 'body',
    })
  ],
  entry: './main.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /images/,
        loader: 'url'
      }
    ]
  },
  jshint: {
    esversion: 6
  }
};
