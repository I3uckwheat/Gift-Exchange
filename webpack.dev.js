const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'source-map',
});

module.exports.serve = {
  port: 3000,
  add: (app, middleware, options) => {
    middleware.webpack();
    middleware.content();
  }
}
