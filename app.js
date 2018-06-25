const express = require('express');

const app = express();

app.use('/api', (req, res) => {
  console.log('HIT "/api"');
  res.send('hello world');
});

app.use('*', (req, res) => {
  console.log('hit 404');
  res.send('404, end of the express line');
});

module.exports = app;
