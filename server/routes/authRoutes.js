const Passport = require('passport');

/* Google authenticate starts*/
module.exports = app => {
  app.get(
    '/auth/google',
    Passport.authenticate ('google',{
      scope: ['profile','email']
    })
  );

  app.get('/auth/google/callback', Passport.authenticate('google'));
};
/*Google authenticate ends*/

/* Facebook authenticate starts
module.exports = app => {
  app.get(
    '/auth/facebook',
    Passport.authenticate ('facebook',{
      scope: ['email']
    })
  );

  app.get('/auth/facebook/callback', Passport.authenticate('facebook'));
};
 Facebook authenticate ends */
