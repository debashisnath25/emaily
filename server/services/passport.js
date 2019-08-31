const Passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const user = mongoose.model('user');

/* Google authenticate starts */
Passport.serializeUser((user, done)=>{
    done(null,user.id);
});
Passport.deserializeUser((id, done)=>{
    user.findById(id)
    .then(user => {
        done(null,user);
    })
});
Passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done)=> {
      user.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if(existingUser){
            // user already exist
            done(null, existingUser);
        }else{
          // no user exist for this profile ID
          new user({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
        }
      })
      //console.log(profile.id);
    })
);
/* Google authenticate ends */

/*Facebook config is our configuration variable. starts
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
Facebook config is our configuration variable. ends*/
