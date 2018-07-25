const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

console.log('passport');

passport.use(
  new GithubStrategy(
    {
      clientID: '19e8e740ff4bd7abe800',
      clientSecret: '8745825f2231f9b7c76470fd67720cfdb4626c4d',
      callbackURL: 'http://localhost:3000/api/auth/github/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      const user = new User({
        githubID: profile.id
      });

      User.findOne({ githubID: user.githubID }, (err, existingUser) => {
        if (!existingUser) {
          user.save((err, user) => {
            if (err) return done(err);
            done(null, user);
          });
        } else {
          done(null, existingUser);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
