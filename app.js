const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./helpers/passport.js');

const app = express();

const sessionConfig = {
  secret: 'keyboard-cat',
  resave: false,
  cookie: { secure: false },
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
};

// set secure if prod
if (app.get('env') === 'production') sessionConfig.cookie.secure = true;

// initialize session
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/auth/github', passport.authenticate('github'));

app.get(
  '/api/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/api' }),
  (req, res) => {
    // console.log(req.user);
    res.redirect('/');
  }
);

app.get('/api/auth/status', (req, res) => {
  console.log(req.session);
  if (req.user) {
    console.log('logged in')
    res.json({ user: req.user });
  } else {
    console.log('not logged in')
    res.json({
      user: null
    });
  }
});

app.get('/api/logout', (req, res) => {
  if (req.user) {
    return res.send("You're already logged out");
  }
  req.logout();
  res.redirect('/api');
});

app.use('/api', (req, res) => {
  console.log('req.user: ', req.user);
  if (req.user) {
    res.send("<a href='/api/logout'>Authenticated</a>");
  } else {
    res.send('hello world');
  }
});

app.use('*', (req, res) => {
  console.log('hit 404');
  res.send('404, end of the express line');
});

module.exports = app;
