const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const proxy = require('http-proxy-middleware');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

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
    app.use(convert(proxy('/api', { target: 'http://localhost:3001' })));
    app.use(convert(history()));
  }
};
