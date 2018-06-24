const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/public/src/GiftExchange/GiftExchange.js',
  output: {
    filename: 'GiftExchange.js',
    path: path.resolve(__dirname, 'public/dist/GiftExchange/')
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + '/public/src/GiftExchange/index.html',
    filename: 'index.html',
    inject: 'body',
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {loader: 'html-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]--[hash:base64:5]',
              modules: true
            }
          }
        ],
      }
    ]
  }
};
