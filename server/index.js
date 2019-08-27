const express = require('express');
const Passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

/* Basic Introduction starts
app.get('/', (req, res) => {
  res.send({ Bye: "sdaad" });
});
const PORT = process.env.PORT || 5000;
Basic Introduction Ends*/

/* Passport Google Oauth starts */
const keys = require('../config/keys');
Passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done)=> {
      console.log('access token',accessToken);
      console.log('refresh token',refreshToken);
      console.log('profile',profile);
    }
  )
);

app.get(
  '/auth/google',
  Passport.authenticate ('google',{
    scope: ['profile','email']
  })
);

app.get('/auth/google/callback', Passport.authenticate('google'));
/* Passport Google Oauth Ends */

// console.log('Listening to '+ PORT);
app.listen(5000);
