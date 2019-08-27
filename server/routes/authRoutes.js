const Passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    Passport.authenticate ('google',{
      scope: ['profile','email']
    })
  );

  app.get('/auth/google/callback', Passport.authenticate('google'));
};
