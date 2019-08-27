const Passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');

/* Google authenticate starts
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
Google authenticate ends */

/*Facebook config is our configuration variable. starts*/
Passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret:keys.facebookClientSecret ,
    callbackURL: 'http://localhost:5000/auth/facebook/callback'
  },
  (accessToken, refreshToken, profile, done)=> {
    console.log('access token',accessToken);
    console.log('refresh token',refreshToken);
    console.log('profile',profile);
  }
));
/*Facebook config is our configuration variable. ends*/
